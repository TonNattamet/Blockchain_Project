import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function LoginDoctor() {

    const [id_doctor, setIddoctor] = useState('')
    const [password, setPassword] = useState('')
    
    const navigateTo = useNavigate()

    const loginDoctor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/logindoctor', {
            id_doctor: id_doctor,
            password: password
        }).then((res)=>{
            console.log()
            if(res.data.message){
                alert("Login Failed!!!")
                navigateTo('/logindoctor');
            }
            else{
                navigateTo('/homedoctor');
            }
        })
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
                <input type="text" placeholder='Password' 
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
