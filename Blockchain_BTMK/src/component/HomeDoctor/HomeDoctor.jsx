import React from 'react'
import './HomeDoctor.css'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function HomeDoctor() {
  return (
    <div>
        <Navbar/>

        <h2 className='head-home-doctor'>Welcome Mr.Tanawat Kama</h2>

        <div className="box-main-doctor">
            <div className="box-patient-records">
                <FontAwesomeIcon className='icon-records' size='6x' icon={faBook} />
                <Link to='/listuser'>Patient Records</Link>
            </div>

            <div className="box-patient-search">
              <FontAwesomeIcon className='icon-records' size='6x' icon={faFolderOpen} />
                <Link to='/search'>Patient Search</Link>
            </div> 
        </div>

    </div>
  )
}

export default HomeDoctor
