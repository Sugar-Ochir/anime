import React, { useState } from 'react';
import './sideMenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import logo from '../images/logo.png';
function SideMenu({active}) {
    const[navData] = useState(navListData);

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}> 
            <img src={logo} className="logo"></img>
        <ul className="nav">
            {navData.map(item => (
            <NavListItem key={item._id} item={item}/>
            ))}
        </ul>
    </div>
  );
}

export default SideMenu