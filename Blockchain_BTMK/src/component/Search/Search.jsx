import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Search.css'

function Search() {
  return (
    <div className='main-search'>
        <Navbar/>
        <div className="main-box-search">
            <h3>ID Patient</h3>
            <div className="box-search">
                <input type="text" placeholder='Search'/>
            </div>
        </div>
    </div>
  )
}

export default Search
