import React, { useState } from 'react'
import './Register.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [id_user, setId] = useState('')
    const [password, setPassword] = useState('')

    const CreateUser = () => {
        axios.post('http://localhost:8081/register', {
            id_user: id_user,
            password: password
        }).then(()=>{
            console.log("User has been create")
        })
    }

  return (
    <div>
        <Navbar/>

        <div className="main-login">
            <h3>Register</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' 
            onChange={(event)=>{
                setId(event.target.value)
            }}
            required/>
            <input type="text" placeholder='Password' 
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
            required/>
            <div className="box-select-forgot">
                <Link to='/'>Login</Link>
            </div>

            <div className="box-login">
                <h3 onClick={CreateUser}>Register</h3>
            </div>
        </div>

    </div>
  )
}

export default Register
