import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Files = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              {/* <a href={`/files/users_repos`}>User And Repositories</a> */}
              <Link to="users_repos">Users And Repos</Link>
            </li>
            <li>
              {/* <a href={`/files/sourcefiles`}>Source Files</a> */}
              <Link to="sourcefiles">Source Files</Link>
            </li>
          </ul>
        </nav>
        <div className="code-details">
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Files
