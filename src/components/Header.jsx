import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
        <div className="header">
        <Link to='/' ><img src={logo} className='header__icon' alt="" /></Link>
            <div className="headerLeft">
                <Link to="/">Home</Link>
                <Link to='/movies/popular' >Popular</Link>
                <Link to='/movies/top_rated' >Top Rated</Link>
                <Link to='/movies/upcoming' >Upcoming</Link>
            </div>
        </div>
    </>
  )
}

export default Header