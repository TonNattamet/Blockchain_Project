import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

function LoginDoctor() {
  return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login Doctor</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' required/>
            <div className="box-select-forgot">
                <Link to='/'>Login Patient</Link>
            </div>

            <div className="box-login">
                <h3>Login</h3>
            </div>
        </div>
    </div>
  )
}

export default LoginDoctor
