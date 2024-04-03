import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Search.css'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <div className='main-search'>
        <Navbar/>
        <div className="box-list-search">
            <div className="head-search">
                Patient Records
            </div>
            <div className="list-search">
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="box-main-list-search">
            <div className="head-main-list">
                <div className="search-id">
                    ID
                </div>
                <div className="search-name">
                    Full Name
                </div>
                <div className="search-birth">
                    Brithday
                </div>
                <div className="search-age">
                    Age
                </div>
                <div className="search-gender">
                    Gender
                </div>
                <div className="search-action">
                    Action
                </div>
            </div>
            <div className="main-list">
                <div className="id-list">
                    1234567890123
                </div>
                <div className="name-list">
                    Tanawat Kama
                </div>
                <div className="birth-list">
                    01/01/1111
                </div>
                <div className="age-list">
                    21
                </div>
                <div className="gender-list">
                    Male
                </div>
                <div className="action-list">
                    <Link to='/profileuser'>More</Link>
                </div>
            </div>

        </div>
        <div className="profile-calcel">
            <Link to='/homedoctor'>Back</Link>
        </div>
    </div>
  )
}

export default Search
