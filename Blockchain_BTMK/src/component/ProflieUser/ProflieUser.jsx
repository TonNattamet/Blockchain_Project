import React,{ useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './ProflieUser.css'
import { Link } from 'react-router-dom'
import Web3 from 'web3';
import ABI_PatientRecord from '../../Abis/ABI_PatientRecord'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProflieUser() {

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
        const [userList, setUserList] = useState([]);


        const StringId = patientData[0] ? patientData[0].toString() : '';
        const StringAge = patientData[3] ? patientData[3].toString() : '';
        
        const location = useLocation();
        const id = location.state.id;

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
                    const contractAddress = '0x1c16ff5DBD27b5cFe63782c150F0dcB7b58D962A'; 
                    const contract = new web3.eth.Contract(ABI_PatientRecord, contractAddress);
                    const patient = await contract.methods.getPatient(id).call({ from: userAddress });
                    setPatientData(patient);
                } catch (error) {
                    console.error('Error fetching patient data:', error);
                }
            }

            fetchPatientData();
        }, [id]); // เรียกใช้งาน useEffect เมื่อ ID ของผู้ป่วยเปลี่ยนแปลง

        useEffect(() => {
            addData();
        }, [patientData]);

        const addData = () => {
            axios.post('http://localhost:8081/patient', {
                id: StringId,
                name: patientData[1],
                age: StringAge,
                gender: patientData[2],
                phoneNumber: patientData[5]
            }).then(() => {
                // เพิ่มผู้ป่วยใหม่ลงใน userList หลังจากบันทึกลงในฐานข้อมูลเรียบร้อยแล้ว
                setUserList([
                    ...userList,
                    {
                        id: StringId,
                        name: patientData[1],
                        age: StringAge,
                        gender: patientData[2],
                        phoneNumber: patientData[5]
                    }
                ]);
            }).catch(error => {
                console.error('Error saving patient data:', error);
            });
        }
        

    // useEffect(() => {
    //     function postData() {
    //         // แปลงข้อมูล BigInt เป็น String
    //         const dataToSend = {
    //             id: StringId,
    //             name: patientData[1],
    //             gender: patientData[2],
    //             age: StringAge,
    //             bloodType: patientData[4],
    //             phoneNumber: patientData[5],
    //             drugAllergy: patientData[6],
    //             congenitalDisease: patientData[7]
    //         };
        
    //         console.log("dataToSend is", dataToSend);
        
    //         axios.post('http://localhost:8081/patient',dataToSend)
    //         .then(response => {
    //             console.log(response.data);
    //             // เพิ่มการจัดการหลังจากที่ส่งข้อมูลสำเร็จ ตามที่ต้องการ
    //         })
    //         .catch(error => {
    //             console.error('Error saving data:', error);
    //             console.error('Error details:', error.response);
    //             // เพิ่มการจัดการข้อผิดพลาดตามที่ต้องการ
    //         });
    //     }
    //     postData();
    //   }, [patientData]);
    
      

    return (
        <div>
            <Navbar/>

            <div className="box-img-user">
                <img className='profile-img-user' src="" alt="" />
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
                    <div className="head-profile-phone">
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
                <Link to='/home'>Back</Link>
            </div>

        </div>
    )
}

export default ProflieUser
