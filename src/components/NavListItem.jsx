import React from 'react'
import { NavLink } from 'react-router-dom';
function NavListItem({item, navOnClick}) {
  return (
    <li>
    <NavLink to={`${item.target}`}>
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
    </NavLink>
    </li>
  )
}

export default NavListItem