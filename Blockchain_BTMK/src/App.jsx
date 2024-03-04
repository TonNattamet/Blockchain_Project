import { useState } from 'react'
import './App.css'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Search from './component/Search/Search';
import Login from './component/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
