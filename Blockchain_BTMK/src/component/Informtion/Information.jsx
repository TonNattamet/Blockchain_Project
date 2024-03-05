import React from 'react'
import './Information.css'
import Navbar from '../Navbar/Navbar'

function Information() {
  return (
    <div>
        <Navbar/>
        <div className="main-box">
            <div className="box-img-info">
                <div className="box-img">

                </div>
                <div className="box-name">
                    <p><b>Name : </b>สมยศ อดข้าวเช้า</p>
                </div>
                <div className="box-age">
                    <p><b>Age : </b>22 Years</p>
                </div>
                <div className="box-gender">
                    <p><b>Gender : </b>Male</p>
                </div>
            </div>
            
            <div className="head-box">
                <h2>Information Patient</h2>
            
                <div className="main-box-info">
                    
                    <div className="box-left">
                        <h3>ID Patient</h3>
                        <div className="info-id">
                            
                        </div>
                        <h3>Number</h3>
                        <div className="info-number">

                        </div>
                        <h3>Address</h3>
                        <div className="info-address">

                        </div>
                    </div>
                    <div className="box-right">
                        <h3>Drug allergy</h3>
                        <div className="box-drug">

                        </div>
                        <h3>Congenital disease</h3>
                        <div className="box-congenital">

                        </div>  
                    </div>

                    <div className="box-edit">
                        <h3>Edit</h3>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Information
