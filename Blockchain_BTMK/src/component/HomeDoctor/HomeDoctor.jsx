import React from 'react'
import './HomeDoctor.css'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFolderOpen} from '@fortawesome/free-solid-svg-icons'

function HomeDoctor() {
  return (
    <div>
        <Navbar/>

        <h2>Welcome Mr.Tanawat Kama</h2>

        <div className="box-main-doctor">
            <div className="box-patient-records">
                <FontAwesomeIcon className='icon-records' size='6x' icon={faBook} />
                <h3>Patient Records</h3>
            </div>

            <div className="box-patient-search">
              <FontAwesomeIcon className='icon-records' size='6x' icon={faFolderOpen} />
                <h3>Patient Search</h3>
            </div>
        </div>

    </div>
  )
}

export default HomeDoctor
