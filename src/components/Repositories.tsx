import React, {useState} from 'react'
import QueryPerformer from './QueryPerformer'
import ResultDisplay from './ResultDisplay'
import AbstractResponse from '../models/AbstractResponse';
import PagerInfo from '../models/PagerInfo';
import Repository from '../models/Repository'

const Repositories : React.FC = () => {
    const [query, setQuery] = useState('');
    const [repoBody, setResponBody] = useState<AbstractResponse<Repository>>({items: []});
    const [pagerInfo, setPagerInfo] = useState<PagerInfo>({snapshotPage: 1, lastPage: null});
    const [error, setError] = useState<any>(null);
    const [gotoPage, setGotoPage] = useState<number>(1);
  return (
    <div>
        <QueryPerformer saveError={setError} refreshBody={setResponBody} 
                    setPagerInfo={setPagerInfo}
                    gotoPage={gotoPage}></QueryPerformer>
        <ResultDisplay error={error} dataSource={repoBody} pagerModel={pagerInfo} 
                    setGotoPage = {setGotoPage}></ResultDisplay>
    </div>
  )
}

export default Repositories
