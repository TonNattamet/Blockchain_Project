import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Web3 from 'web3';
// import ABI_recordPatient from '../../Abis/ABI_recordPatient';
// import {useNavigate} from 'react-router-dom';
import './Addinfo.css'

function AddInfo() {

    // const navigate = useNavigate();
    // const ABI = ABI_recordPatient;

    // // สร้าง state เพื่อเก็บข้อมูลที่ผู้ใช้ป้อนเข้ามา
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        address: '',
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
    

    //    // Function สำหรับส่งข้อมูลไปยัง Smart Contract
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
            const contractAddress = '0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027'; // ที่อยู่ของ Smart Contract
            const contract = new web3.eth.Contract(ABI, "0xDD883df7182Bb8519c7dEA2F99e64e8f4486C027");
            // เรียกใช้ฟังก์ชันใน Smart Contract 
            await contract.methods.addPatient(
                formData.id,
                formData.name,
                formData.gender,
                formData.birthdate,
                formData.height,
                formData.weight,
                formData.address,
                formData.phone,
                formData.drugAllergy,
                formData.congenitalDisease
            ).send({ from: userAddress }); // ส่ง transaction ด้วยที่อยู่ของผู้ใช้
    
            // หลังจากส่งข้อมูลเสร็จสิ้น สามารถทำอย่างไรก็ได้ เช่น แสดงข้อความว่าบันทึกข้อมูลสำเร็จ
            console.log('Data saved successfully');
        } catch (error) {
            // หากเกิดข้อผิดพลาดในการส่งข้อมูล ให้แสดงข้อความแจ้งเตือน
            console.error('Error saving data:', error);
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
                <div className="box-phone">
                    Phone
                    <input type="text" 
                    name="phone" 
                    onChange={handleChange}
                    />
                </div>
                {/* <div className="box-gender">
                    <legend>Gender</legend>
                    <select name="gander" name="gender" onChange={handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div> */}
                
                <div className="box-date">
                    age
                    <input type="text" 
                    name="age" 
                    onChange={handleChange}
                    />
                </div>
                {/* <div className="box-height-weight">
                    <div className="box-height">
                    Height (CM)
                        <input type="text"
                        name="height" 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="box-weight">
                    Weight (KG)
                        <input type="text" 
                        name="weight" 
                        onChange={handleChange}
                        />
                    </div>
                </div> */}
                <div className="box-address">
                    Address
                    <textarea name="address" 
                    onChange={handleChange} 
                    cols="30" 
                    rows="10">   
                    </textarea>
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
