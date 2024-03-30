import React, {useState}  from 'react'
import './Login.css'
import Navbar from '../Navbar/Navbar'
import Select from 'react-select'

const options = [
    { value: 'patient', label: 'Patient' },
    { value: 'doctor', label: 'Doctor' },
];

function Login() {

    const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
        <Navbar/>
        <div className="main-login">
            <h3>Login</h3>
            <p>welcome to website</p>
            <input type="text" placeholder='ID' required/>
            <input type="text" placeholder='Password' required/>
            <div className="box-select-forgot">
                <Select className='select-login'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    required
                />
                <a className='forgot' href="#">forgot password ?</a>
            </div>

            <div className="box-login">
                <h3>Login</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Login
