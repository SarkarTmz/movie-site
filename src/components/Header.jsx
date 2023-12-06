import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="header">
        <Link to='/' ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/192px-IMDb_Logo_Square.svg.png?20200218171646" className='header__icon' alt="" /></Link>
            <div className="headerLeft">
                <Link to='/movies/popular' >Popular</Link>
                <Link to='/movies/top_rated' >Top Rated</Link>
                <Link to='/movies/upcoming' >Upcoming</Link>
            </div>
        </div>
    </>
  )
}

export default Header