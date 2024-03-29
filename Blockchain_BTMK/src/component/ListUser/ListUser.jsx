import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ListUser.css'

function ListUser() {
  return (
    <div>
        <Navbar/>

        <div className="box-list-search">
            <div className="head-search">
                Patient Records
            </div>
            <div className="list-search">
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="box-main-list">
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
                    Logo list
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ListUser
