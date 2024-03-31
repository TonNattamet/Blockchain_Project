import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Addinfo.css'

function AddInfo() {
  return (
    <div>
      <Navbar/>
        <h1 className='addinfo-h1'>AddInformation</h1>
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
                <div className="box-address">
                    DrugAllergy
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="box-address">
                    CongenitalDisease
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
        </div>
        <input className="submit" type="submit" value="submit" />
    </div>
  )
}

export default AddInfo
