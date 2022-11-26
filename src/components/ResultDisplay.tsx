import React from 'react';
import AbstractResponse from '../models/AbstractResponse';
import ContentTable from './ContentTable';
import Pager from './Pager';
import './ResultDisplay.css';
import Repository from '../models/Repository';
import PagerInfo from '../models/PagerInfo';

interface Props{
    error: any,
    pagerModel: PagerInfo,
    dataSource: AbstractResponse<Repository>,
    setGotoPage: React.Dispatch<React.SetStateAction<number>>
}

const ResultDisplay : React.FC<Props> = ({error, dataSource, pagerModel, setGotoPage}: Props) => {
  let headers = ["Name", "Full Name", "Url", "Owner"]
  return (
    <div className='content'>
        <div className='contentWrapper'>
            { error ? <span className="error">{error}</span> : 
            <ContentTable columnHeaders={headers} data={dataSource}></ContentTable>}
            <Pager pagerModel={pagerModel} setGotoPage={setGotoPage}></Pager>
        </div>
    </div>
  )
}

export default ResultDisplay
