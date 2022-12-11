import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Repositories from './components/Repositories';
import About from './components/About';
import Error from './components/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error></Error>
    },
    {
      path: "repositories",
      element: <Repositories></Repositories>
    },
    {
      path: "about",
      element: <About></About>
    }
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

console.log(root)
