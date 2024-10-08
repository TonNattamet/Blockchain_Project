import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import ABI_PatientRecord from '../../Abis/ABI_PatientRecord'
import Web3 from 'web3';


function DoctorSearch() {

    const location = useLocation();
    const id = location.state.id;
    console.log("ID is",id);

    const [patientData, setPatientData] = useState({
        id: '',
        name: '',
        gender: '',
        age: '',
        bloodType: '',
        phoneNumber: '',
        drugAllergy: '',
        congenitalDisease: ''
    });

    const StringId = patientData[0] ? patientData[0].toString() : '';
    const StringAge = patientData[3] ? patientData[3].toString() : '';
    

    useEffect(() => {
        async function fetchPatientData() {
            if (!window.ethereum) {
                alert('Please install MetaMask to interact with this application.');
                return;
            }

            const web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const userAddress = accounts[0];
                const contractAddress = '0x82bf081aE1B8005c446a3Be376285355CE58e228'; 
                const contract = new web3.eth.Contract(ABI_PatientRecord, contractAddress);
                const patient = await contract.methods.getPatient(id).call({ from: userAddress });
                setPatientData(patient);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        }

        fetchPatientData();
    }, [id]); // เรียกใช้งาน useEffect เมื่อ ID ของผู้ป่วยเปลี่ยนแปลง

  return (
    <div>
        <Navbar/>

        <div className="box-img-user">
                <img className='profile-img-user' src="https://i.pinimg.com/550x/13/d9/7d/13d97d540be78ef119a9e357b76816a1.jpg" alt="" />
                <div className="box-img-name">
                    {patientData[1]}
                </div>

                <div className="box-img-detail">
                    <div className="box-img-id">
                        <span>ID</span>
                        <p> {StringId}</p>
                    </div>
                    <div className="box-img-phone">
                        <span>Phone</span>
                        <p>{patientData[5]}</p>
                    </div>
                    <div className="box-img-gender">
                        <span>Gender</span>
                        <p>{patientData[2]}</p>
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
                        {patientData[1]}
                    </div>
                    <div className="profile-birth">
                         {StringAge}
                    </div>
                    <div className="profile-height">
                    {patientData[4]}
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
                    <div className="head-profile-name">
                        congenitalDisease
                    </div>
                </div>

                <div className="detail-emer-profile">
                    <div className="profile-name">
                    {patientData[6]}
                    </div>
                    <div className="profile-phone">
                    {patientData[7]}
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
