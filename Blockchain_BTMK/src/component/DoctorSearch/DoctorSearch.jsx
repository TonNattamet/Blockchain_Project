import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

function DoctorSearch() {
  return (
    <div>
        <Navbar/>

        <div className="box-img-user">
                <img className='profile-img-user' src="" alt="" />
                <div className="box-img-name">
                    Mod Love Who
                </div>

                <div className="box-img-detail">
                    <div className="box-img-id">
                        <span>ID</span>
                        <p> 0123456789123</p>
                    </div>
                    <div className="box-img-phone">
                        <span>Phone</span>
                        <p>0123456789</p>
                    </div>
                    <div className="box-img-gender">
                        <span>Gender</span>
                        <p>Female</p>
                    </div>
                </div>
            </div>

            <div className="box-proflie-user">
                <h3>PERSONAL DETAIL</h3>
                <div className="head-box-profile">
                    <div className="head-profile-name">
                        Full Name
                    </div>
                    <div className="head-profile-birth">
                        Age
                    </div>
                    <div className="head-profile-height">
                        Blood Type
                    </div>
                    {/* <div className="head-profile-weight">
                        Weight (KG)
                    </div> */}
                    
                </div>
                <div className="detail-box-profile">
                    <div className="profile-name">
                        Mod Love Who
                    </div>
                    <div className="profile-birth">
                        01/01/1001
                    </div>
                    <div className="profile-height">
                        190
                    </div>
                    {/* <div className="profile-weight">
                        65
                    </div> */}
                </div>
                {/* <div className="head-profile-address">
                    <span>Address</span>
                    <p>1548/1548 Test Test</p>
                </div> */}
            </div>

            <div className="emergency">
                <h3>Emergency Contact</h3>

                <div className="head-box-emer">
                    <div className="head-profile-name">
                        drugAllergy
                    </div>
                    <div className="head-profile-phone">
                        congenitalDisease
                    </div>
                </div>

                <div className="detail-emer-profile">
                    <div className="profile-name">
                        Mod Love Who
                    </div>
                    <div className="profile-phone">
                        0123456789
                    </div>
                </div>

            </div>

            <div className="profile-calcel">
                <Link to='/search'>Back</Link>
            </div>

    </div>
  )
}

export default DoctorSearch
