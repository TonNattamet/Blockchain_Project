import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Web3 from 'web3';
import ABI_PatientRecord from '../../Abis/ABI_PatientRecord'
import {useNavigate} from 'react-router-dom';
import './Addinfo.css'

function AddInfo() {

    const navigate = useNavigate();
    const ABI = ABI_PatientRecord;


    // สร้าง state เพื่อเก็บข้อมูลที่ผู้ใช้ป้อนเข้ามา
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        gender: '',
        age:'',
        bloodtype:'',
        phoneNumber: '',
        drugAllergy: '',
        congenitalDisease: ''
    });
    
    // Function สำหรับอัปเดตค่าข้อมูลใน state เมื่อมีการเปลี่ยนแปลงใน input fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    

    // Function สำหรับส่งข้อมูลไปยัง Smart Contract
    const handleSubmit = async () => {
        console.log(formData)
        if (!window.ethereum) {
            alert('Please install MetaMask to interact with this application.');
            return;
          }
      
          const web3 = new Web3(window.ethereum);
          try {
            await window.ethereum.enable(); // ขออนุญาติให้เข้าถึงบัญชี MetaMask
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0]; // เลือกบัญชี MetaMask ของผู้ใช้
            const contractAddress = '0x9F705E5f4ca1eC47017be4ee5556D3DD775af7DA'; // ที่อยู่ของ Smart Contract
            const contract = new web3.eth.Contract(ABI, contractAddress);
            await contract.methods.addPatient(
                formData.id,
                formData.name,
                formData.gender, 
                formData.age,
                formData.bloodtype,
                formData.phoneNumber,
                formData.drugAllergy,
                formData.congenitalDisease
            ).send({ from: userAddress }); // ส่ง transaction ด้วยที่อยู่ของผู้ใช้
    
            // หลังจากส่งข้อมูลเสร็จสิ้น สามารถทำอย่างไรก็ได้ เช่น แสดงข้อความว่าบันทึกข้อมูลสำเร็จ
            alert('Data saved successfully');
            // ส่งไปยังหน้าโปรไฟล์ผู้ใช้พร้อม ID
            navigate('/profileuser', { state: { id: formData.id } }); // ส่งไปยังหน้าโปรไฟล์ผู้ใช้พร้อม ID

        } catch (error) {
            // หากเกิดข้อผิดพลาดในการส่งข้อมูล ให้แสดงข้อความแจ้งเตือน
            alert('Error saving data:', error);
        }
    };
  



  return (
    <div>
      <Navbar/>
        <h1 className='addinfo-h1'>AddInformation</h1>
            <div className="main-info">
                <div className="box-id">
                    ID
                    <input type="text"
                    name="id" 
                    onChange={handleChange}
                    />
                </div>
                <div className="box-name">
                    Full Name
                    <input type="text" 
                    name="name" 
                    onChange={handleChange}
                    />
                </div>
                <div className="box-gender">
                    <legend>Gender</legend>
                    <select name="gender" onChange={handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div className="box-date">
                    Age
                    <input type="text" 
                    name="age" 
                    onChange={handleChange}
                    />
                </div>
                <div className="box-phone">
                    Phone
                    <input type="text" 
                    name="phoneNumber" 
                    onChange={handleChange}
                    />
                </div>
                <div className="box-height-weight">
                    <div className="box-height">
                    Blood type
                        <input type="text"
                        name="bloodtype" 
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="box-address">
                    DrugAllergy
                    <textarea 
                    name="drugAllergy" 
                    onChange={handleChange} 
                    cols="30" 
                    rows="10">
                    </textarea>
                </div>
                <div className="box-address">
                    CongenitalDisease
                    <textarea 
                    name="congenitalDisease" 
                    onChange={handleChange} 
                    cols="30" 
                    rows="10">
                    </textarea>
                </div>
        </div>
        <input className="submit" 
        type="submit" 
        value="submit"
        onClick={handleSubmit} 
         />
    </div>
  )
}

export default AddInfo
