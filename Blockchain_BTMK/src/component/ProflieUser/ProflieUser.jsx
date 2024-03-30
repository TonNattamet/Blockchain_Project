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

            <div className="box-proflie-user">
                <h3>PERSONAL DETAIL</h3>
                <div className="head-box-profile">
                    <div className="head-profile-name">
                        Full Name
                    </div>
                    <div className="head-profile-birth">
                        BirthDate
                    </div>
                    <div className="head-profile-height">
                        Height (CM)
                    </div>
                    <div className="head-profile-weight">
                        Weight (KG)
                    </div>
                    
                </div>
                <div className="detail-box-profile">
                    <div className="profile-name">
                        Moddy LoveHee
                    </div>
                    <div className="profile-birth">
                        01/10/1001
                    </div>
                    <div className="profile-height">
                        180
                    </div>
                    <div className="profile-weight">
                        65
                    </div>
                </div>
                <div className="head-profile-address">
                    <span>Address</span>
                    <p>1548/1548 Test Test</p>
                </div>
            </div>

            <div className="emergency">
                <h3>Emergency Contact</h3>

                <div className="head-box-emer">
                    <div className="head-profile-name">
                        Full Name
                    </div>
                    <div className="head-profile-phone">
                        Phone
                    </div>
                </div>

                <div className="detail-emer-profile">
                    <div className="profile-name">
                        Moddy LoveHee
                    </div>
                    <div className="profile-phone">
                        012-285-4578
                    </div>
                </div>

            </div>

            <div className="profile-calcel">
                Back
            </div>

        </div>
    )
}

export default ProflieUser
