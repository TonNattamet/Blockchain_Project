import React, { useState }from 'react'
import Navbar from '../Navbar/Navbar'
import './Search.css'
import { Link, useNavigate} from 'react-router-dom'


function Search() {

  const navigate = useNavigate();
  const [idpatient, setIdpatient] = useState('');
  

  const handleidpatient = (event) => {
    setIdpatient(event.target.value)
  }

  const handleSubmit = async () => {
    navigate('/doctorsearch', { state: { id: idpatient } }); 
  };



  return (
    <div className='main-search'>
        <Navbar/>

        <div className="box-main-search">

            <h2 className='head-box-search'>Patient's ID Card Number</h2>

            <div className="box-search">
                <input className='search-input'
                type="text" 
                placeholder='Search'
                onChange={handleidpatient}
                />
                {/* <Link to='/doctorsearch' className='button-search'
                onClick={handleSubmit} 
                >Search</Link> */}
                 <input className="button-search" 
                    type="submit" 
                    value="submit"
                    onClick={handleSubmit} 
                />
            </div>

            <div className="profile-calcel">
                <Link to='/homedoctor'>Back</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Search
