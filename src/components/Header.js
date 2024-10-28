import React from 'react';
import './Header.css'; 
import miFoto from '../images/yo.jpg'; 
import DropdownMenu from './DropdownMenu'; 


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={miFoto} alt="Marco Espina" className="profile-pic" />
        <div className="header-title">
          <h1>Marco Antonio Espina Erices</h1>
        </div>
        <nav>
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
