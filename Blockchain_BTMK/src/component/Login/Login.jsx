import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [id_user, setId] = useState('')
    const [password, setPassword] = useState('')
    
    const navigateTo = useNavigate()

    const loginUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', {
            id_user: id_user,
            password: password
        }).then((res)=>{
            console.log()
            if(res.data.message){
                alert("Login Failed!!!")
                navigateTo('/');
            }
            else{
                navigateTo('/home');
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
                <h3>Login Patient</h3>
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
                    <Link to='/register'>Register</Link>
                    <Link to='/logindoctor'>Login Doctor</Link>
                </div>

                <div className="box-login">
                    <div onClick={loginUser}>Login</div>
                </div>
                    

            </div>
        </form>
        
    </div>
  )
}

export default Login
