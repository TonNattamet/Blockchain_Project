import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ProflieUser.css'

function ProflieUser() {
  return (
    <div>
        <Navbar/>

        <div className="box-img-user">
            <img className='profile-img-user' src="" alt="" />
            <div className="box-img-name">
                Tanawat Kama
            </div>

            <div className="box-img-detail">
                <div className="box-img-id">
                    <span>ID</span>
                    <p>1234567890123</p>
                </div>
                <div className="box-img-phone">
                    <span>Phone</span>
                    <p>062-291-1382</p>
                </div>
                <div className="box-img-gender">
                    <span>Gender</span>
                    <p>Male</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProflieUser
