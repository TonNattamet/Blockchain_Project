import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ListUser.css'

const data = [
    {
        id_user: `1234567890123`,
        name: `Tanawat Kama`,
        birth: `01/01/2000`,
        age: `21`,
        gender: `Male`
    },
    {
        id_user: "9874561230213",
        name: "Mod Love",
        birth: "11/08/1988",
        age: "18",
        gender: "Male"
    },
    {
        id_user: "5467892310231",
        name: "Test Name",
        birth: "12/55/6545",
        age: "35",
        gender: "Female"
    },
]

function ListUser() {
  return (
    <div>
        <Navbar/>

        <div className="box-list-search">
            <div className="head-search">
                Patient Records
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
