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
    </div>
  )
}

export default ListUser
