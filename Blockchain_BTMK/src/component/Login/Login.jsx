import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

function Login() {

  return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login Patient</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' required/>
            <input type="text" placeholder='Password' required/>
            <div className="box-select-forgot">
                <Link to='/register'>Register</Link>
                <Link to='/logindoctor'>Login Doctor</Link>
            </div>

            <div className="box-login">
                <Link to='/home'>Login</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Login
