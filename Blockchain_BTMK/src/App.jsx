import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}></Route>
            </Routes>
        </BrowserRouter>
        <h1>Hello Blockchain</h1>
    </>
  )
}

export default App
