import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
