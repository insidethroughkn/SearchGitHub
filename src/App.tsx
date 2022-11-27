import React, {useState} from 'react';
import {  BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import _ from 'lodash';
import QueryPerformer from './components/QueryPerformer';
import ResultDisplay from './components/ResultDisplay';
import Repository from './models/Repository'
import AbstractResponse from './models/AbstractResponse';
import PagerInfo from './models/PagerInfo';
import './App.css';

const App : React.FC = () => {
  const [query, setQuery] = useState('');
  const [repoBody, setRepoBody] = useState<AbstractResponse<Repository>>({items: []});
  const [pagerInfo, setPagerInfo] = useState<PagerInfo>({snapshotPage: 1, lastPage: null});
  const [error, setError] = useState<any>(null);
  const [gotoPage, setGotoPage] = useState<number>(1);

  return (
        <div className="App">
          <h1>GitHub Repositories Search</h1>
          <QueryPerformer saveError={setError} refreshBody={setRepoBody} 
                        setPagerInfo={setPagerInfo}
                        gotoPage={gotoPage}></QueryPerformer>
          <ResultDisplay error={error} dataSource={repoBody} pagerModel={pagerInfo} 
                         setGotoPage = {setGotoPage}></ResultDisplay>
        </div>
  );
}

export default App;
