import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Web3 from 'web3';

function LoginDoctor() {

    const [id_doctor, setIddoctor] = useState('')
    const [password, setPassword] = useState('')
    
    const navigateTo = useNavigate()

    

    const loginDoctor = async (e) => {
        e.preventDefault();
        if (!window.ethereum) {
          alert('Please install MetaMask to interact with this application.');
          return;
        }
        
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          const userAddress = accounts[0];
          console.log(userAddress)
      
          axios.post('http://localhost:8081/logindoctor', {
            id_doctor: id_doctor,
            password: password,
            userAddress: userAddress
          }).then((res)=>{
            if(res.data.message){
              alert("Login Failed!!!")
              navigateTo('/logindoctor');
            } else {
              navigateTo('/homedoctor');
            }
          })
        } catch (error) {
          console.error('Error enabling MetaMask:', error);
        }
      }
      
      
    const onSubmit = () => {
        setId('')
        setPassword('')
    }

  return (
    <div>
        <Navbar/>
        <form onSubmit={onSubmit}>
            <div className="main-login">
                <h3>Login Doctor</h3>
                <p>welcome to website</p>
                <input type="text" placeholder='ID' 
                onChange={(event)=>{
                    setIddoctor(event.target.value)
                }}
                required/>
                <input type="password" placeholder='Password' 
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}
                required/>
                <div className="box-select-forgot">
                    <Link to='/'>Login Patient</Link>
                </div>

                <div className="box-login">
                    <div onClick={loginDoctor}>Login</div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginDoctor
