import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import { Axios } from 'axios'

function Login() {

    const [id_user, setId] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event){
        event.prevenDefault();
        console.log(id_user)
        console.log(password)
        Axios.post('http://localhost:8081/login', {id_user, password})
        .then(res => {
            if(res.data === 'Success'){
                navigator('/home')
            } else{
                alert('No Data')
            }
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <Navbar/>
        
        <form onSubmit={handleSubmit}>
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


                    <button >Login</button>

            </div>
        </form>
        
    </div>
  )
}

export default Login
