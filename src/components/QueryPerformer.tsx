import React, {useState, useEffect, useRef} from 'react'
import SearchService from '../services/SearchService';
import Repository from '../models/Repository';
import AbstractResponse from '../models/AbstractResponse'
import PagerInfo from '../models/PagerInfo';
import _ from 'lodash';

interface Props {
    saveError: React.Dispatch<React.SetStateAction<any>>,
    refreshBody: React.Dispatch<React.SetStateAction<AbstractResponse<Repository>>>,
    setPagerInfo: React.Dispatch<React.SetStateAction<PagerInfo>>
    gotoPage: number
}

//const queryRef = useRef<HTMLInputElement>(null);

const QueryPerformer : React.FC<Props> = ({saveError, refreshBody, setPagerInfo, gotoPage} : Props) => {
  const [query, setQuery] = useState('');
  const [lastTimePage, setLastTimePage] = useState(0);

  useEffect(() => {
    if(gotoPage != lastTimePage){
      goSearch();
    }
  }, [gotoPage])

  const goSearch = (e?: React.FormEvent<HTMLButtonElement> ) => {
    SearchService("repositories", query, gotoPage).then(
        (response) => {
            saveError('')
            refreshBody(response.body);
            var totalPages = findLastPageNumber(response.headers);
            setPagerInfo({snapshotPage: gotoPage, lastPage:  totalPages})
            setLastTimePage(gotoPage);
            console.log(response.body);
        }
    )
    .catch(
        (error) => saveError(error)
    )
  }

  const findLastPageNumber = (headers : Headers) : number | null =>{
    if(!headers.has("Link")){
      return null;
    }

    var link = headers.get("Link");
    var totalPages = null;
    link?.split(',').forEach((value) => {
      var item = value.trim().toLowerCase();
      if(item.includes("rel=\"last\"")){
        var queryStrs = item.split(";")[0].trim().split("&");
        queryStrs.forEach((seg) => {
          var matches = seg.match(/^page=(\d+)/);
          if(matches!=null){
            console.log('find:', matches[1]);
            totalPages = +matches[1];
          }
        })
      }
    })

    return totalPages;
  }

  return (
    <div className='search-query'>
        <form>
            <input type="input" placeholder='query' onBlur={(e) => setQuery(e.target.value)}></input>
            <button className="btn-go" type="button" onClick={goSearch}>Go</button>
        </form>
    </div>
  )
}

export default QueryPerformer
