import React from 'react'
import './Register.css'
import Navbar from '../Navbar/Navbar'

function Register() {
  return (
    <div>
        <Navbar/>

        <div className="main-login">
            <h3>Register</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' required/>
            <input type="text" placeholder='Password' required/>
            <input type="text" placeholder='Confirm Password' required/>

            <div className="box-login">
                <h3>Register</h3>
            </div>
        </div>

    </div>
  )
}

export default Register
