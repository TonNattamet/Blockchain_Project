import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  return (
    <div>
        <div className="Navbar">
            <h1>BTMK</h1>
            
            <div className="item">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Service</h3>
                <h3>Blog</h3>
                <h3>Contact</h3>
                <h3>User ID</h3>
                {/* <FontAwesomeIcon className='icon-search' icon={faMagnifyingGlass} /> */}
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
