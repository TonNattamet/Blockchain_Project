import React,{ useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './ListUser.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ListUser() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
      // เรียก API เพื่อดึงข้อมูลผู้ป่วย
      axios.get('http://localhost:8081/datapatients')
        .then(response => {
          setPatients(response.data);
        })
        .catch(error => {
          console.error('Error fetching patients data:', error);
        });
    }, []);
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
                <div className="search-age">
                    Age
                </div>
                <div className="search-gender">
                    Gender
                </div>
                <div className="search-birth">
                    PhoneNumber
                </div>
                <div className="search-action">
                    Action
                </div>
            </div>

            {patients.map((patient, index) => (
        <div key={index} className="main-list">
        <div className="id-list">
            {patient.id}
        </div>
        <div className="name-list">
            {patient.name}
        </div>
        <div className="age-list">
            {patient.age}
        </div>
        <div className="gender-list">
            {patient.gender}
        </div>
        <div className="birth-list">
            {patient.phoneNumber}
        </div>
        <div className="action-list">
            <Link to='/doctorsearch'>More</Link>
        </div>
        </div>
        ))}

        </div>

        <div className="profile-calcel">
            <Link to='/homedoctor'>Back</Link>
        </div>
        
    </div>
  )
}

export default ListUser
