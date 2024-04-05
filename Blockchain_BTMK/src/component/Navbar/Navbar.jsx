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
            <img className='img-nav' src="https://cdn.discordapp.com/attachments/867629080366022686/1225884488568144003/image.png?ex=6622c0e5&is=66104be5&hm=fe70c5305fab614314ff4595b51412d4bfd17bfdd8eb7cc4baf56d3ab889fa17&" alt="" />
            
            <div className="item">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Service</h3>
                <h3>Blog</h3>
                <h3>Contact</h3>
                <FontAwesomeIcon className='icon-search' icon={faMagnifyingGlass} />
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
