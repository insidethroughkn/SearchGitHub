import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Repositories from './components/Repositories';
import About from './components/About';
import Error from './components/Error';
import Files from './components/Files/Files';
import UsersRepos from './components/Files/Users_Repos/UsersRepos';
import SourceFileList from './components/Files/SourceFileList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "repositories",
          element: <Repositories></Repositories>
        },
        {
          path: "files",
          element: <Files></Files>,
          children:[
            {
              path: "users_repos",
              element: <UsersRepos></UsersRepos>
            },
            {
              path: "sourcefiles",
              element: <SourceFileList></SourceFileList>
            }
          ]
        }
      ]
    },
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

console.log(root)
