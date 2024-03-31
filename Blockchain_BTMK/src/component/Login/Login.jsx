import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import Select from 'react-select'
import {Link} from 'react-router-dom'

function Login() {

  return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' required/>
            <input type="text" placeholder='Password' required/>
            <div className="box-select-forgot">
                <Link to='/register'>Register</Link>
                <a className='forgot' href="#">Forgot password ?</a>
            </div>

            <div className="box-login">
                <h3>Login</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Login
