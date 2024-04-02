import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import axios, { Axios } from 'axios'

function Login() {

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event){
        event.prevenDefault();
        axios.post('http://localhost:8081/login', {id, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login Patient</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' 
            onChange={e => setId(e.target.value)}
            required/>
            <input type="text" placeholder='Password' 
            onChange={e => setPassword(e.target.value)}
            required/>
            <div className="box-select-forgot">
                <Link to='/register'>Register</Link>
                <Link to='/logindoctor'>Login Doctor</Link>
            </div>

            <div className="box-login">
                <Link onSubmit={handleSubmit} >Login</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Login
