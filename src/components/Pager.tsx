import React, {useRef, useEffect} from 'react'
import PagerInfo from '../models/PagerInfo';
import _ from 'lodash';
import "./ResultDisplay.css"

type Props = {pagerModel: PagerInfo, setGotoPage: React.Dispatch<React.SetStateAction<number>>};

const Pager = ({pagerModel, setGotoPage}:Props) => {
    useEffect(() => {
      pageRef.current!.value = pagerModel.snapshotPage.toString();
    }, [pagerModel])

    const gotoNumber = (gotoPage : string | number | null) : any=> {
        var number = parseInt(gotoPage + '' ?? 1);
        if(!isNaN(number) && totalPages && number <= totalPages){
          setGotoPage(number);
        }
        else{
          //if not valid number
          pageRef.current!.value = pagerModel.snapshotPage.toString();
        }
    }

    const pageRef = useRef<HTMLInputElement>(null);
    const clearContent = () => {
        if(pageRef.current){
            pageRef.current.value = "";
        }
    }

  let currentPage : number = pagerModel.snapshotPage;
  let totalPages : number | null = pagerModel.lastPage;

  return (
    <div className="pager">
      <span className='current-page'>Current: {currentPage}</span>

      <span className='prev-next'>
        <button type="button" disabled={currentPage==1} onClick={() => gotoNumber(currentPage-1)}>Prev</button>
        
        <button type="button" disabled={!totalPages && currentPage==totalPages} 
                            onClick={() => gotoNumber(currentPage+1)}>
                              Next
        </button>
      </span>

      <span className="to-page">To Page:
        <input type="text" ref = {pageRef}
             onFocus = {clearContent}
             onBlur = {() => gotoNumber(pageRef.current ? pageRef.current.value : null)} 
        ></input></span>
      <span>Total Page: {totalPages}</span>
    </div>
  )
}

export default Pager
