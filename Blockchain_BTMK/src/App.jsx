import { useState } from 'react'
import './App.css'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
