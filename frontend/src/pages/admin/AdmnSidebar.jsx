import React from 'react'
import { Link } from 'react-router-dom'
export const AdmnSidebar = () => {
  return (
    <div>

<aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <Link className="nav-link "  to="/admin/dashboard">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="/admin/all-properties">
      <i className="bi bi-grid"></i>
      <span>properties</span>
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="/admin/all-users">
      <i className="bi bi-grid"></i>
      <span>Users</span>
    </Link>
  </li>

</ul>

</aside>
    </div>
  )
}
