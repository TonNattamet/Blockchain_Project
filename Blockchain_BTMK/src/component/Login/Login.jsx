import React from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'

function Login() {
  return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' />
            <input type="text" placeholder='Password' />
            <a className='forgot' href="#">forgot password ?</a>

            <div className="box-login">
                <h3>Login</h3>
            </div>
        </div>
    </div>
  )
}

export default Login
