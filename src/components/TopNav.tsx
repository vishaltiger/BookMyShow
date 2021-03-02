import React from 'react';
import logo from "./download.jpg";
import "./TopNav.css";


function TopNav() {
  return (
    <nav className="TopNav">
<img src={logo}/>
<div className="searchBar"><i className="fa fa-search"></i>
<input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
</div>
</nav>
   
  );
}

export default TopNav;
