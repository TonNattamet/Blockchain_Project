import React from 'react'
import './Navbar.css'

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
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar
