import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
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
              <a href={`repositories`}>Repositories</a>
            </li>
            <li>
              <a href={`about`}>About</a>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
