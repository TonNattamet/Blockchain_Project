import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Search.css'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <div className='main-search'>
        <Navbar/>

        <div className="box-main-search">

            <h2 className='head-box-search'>Patient's ID Card Number</h2>

            <div className="box-search">
                <input type="text" placeholder='Search' />
                <Link to='/doctorsearch' className='button-search'>Search</Link>
            </div>

            <div className="profile-calcel">
                <Link to='/homedoctor'>Back</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Search
