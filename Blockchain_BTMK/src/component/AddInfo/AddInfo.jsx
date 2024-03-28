import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Addinfo.css'

function AddInfo() {
  return (
    <div>
      <Navbar/>
        <h1>AddInformation</h1>
            <div className="main-info">
                <div className="box-id">
                    ID
                    <input type="text" />
                </div>
                <div className="box-name">
                    Full Name
                    <input type="text" />
                </div>
                <div className="box-phone">
                    Phone
                    <input type="text" />
                </div>
                <div className="box-gender">
                    <legend>Gender</legend>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id='male' value="male" />

                    <label htmlFor="female">Female</label>
                    <input className="female" type="radio" id='female' value="female" />
                </div>
                
                <div className="box-date">
                    Date of Birth
                    <input type="text" />
                </div>
                <div className="box-height-weight">
                    <div className="box-height">
                    Height (CM)
                        <input type="text" />
                    </div>
                    <div className="box-weight">
                    Weight (KG)
                        <input type="text" />
                    </div>
                </div>
                <div className="box-address">
                    Address
                    <input type="text" />
                </div>
        </div>
    </div>
  )
}

export default AddInfo
