import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from 'react-router-dom';
import _ from 'lodash';
import About from './components/About';
import './App.css';
import Repositories from './components/Repositories';

const App: React.FC = () => {
  return (  
    <div className="App">
        <nav>
          <ul>
            <li>
              {/* <a href={`/repositories`}>Repositories</a> */}
              <Link to="repositories">Repositories</Link>
            </li>
            <li>
              {/* <a href={`/files`}>Files</a> */}
              <Link to="files">Files</Link>
            </li>
          </ul>
        </nav>
        <div id="detail">
          <Outlet />
      </div>
    </div>
  );
}

export default App;
