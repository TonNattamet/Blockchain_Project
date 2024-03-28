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
                    {/* <span>
                        <input type="radio" id="male" name="test" checked/>
                        <label class="male" for="male">Male </label>
                    </span>
                    <span>
                        <input type="radio" id="female" name="test"/>
                        <label class="female" for="female">Female </label>
                    </span> */}
                    <select name="gander" id="">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                
                <div className="box-date">
                    Date of Birth
                    <input type="date" />
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
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
        </div>
    </div>
  )
}

export default AddInfo
