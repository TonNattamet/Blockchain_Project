import React from 'react'
import './Home.css'
import Imgage from '../Image/bg-home.png'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>
      
        <Navbar/>
        <div className="main">
        <img src="../Image/bg-home.png" alt="" />
            <h1>Hello Blockchain Project</h1>
        </div>
    </div>
  )
}

export default Home
