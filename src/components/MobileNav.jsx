import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/MobileNav.css';
import { VscThreeBars } from "react-icons/vsc";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className= "mobile-nav">
      <Link to="/">
        <img src={logo} alt="" className="mobile-logo" />
      </Link>
      
      <VscThreeBars className="bar"
        onClick={toggleMenu} />

      <div className= {isOpen ? "mobile-li" : "menu-li"}  id="mobile">
        <ul>
          <Link to="/">Home</Link>
          <Link to='/movies/popular' >Popular</Link>
          <Link to='/movies/top_rated' >Top Rated</Link>
          <Link to='/movies/upcoming' >Upcoming</Link>
          </ul>
      </div>
    </nav>
  );
};

export default MobileNav;