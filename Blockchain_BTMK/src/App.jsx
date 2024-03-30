import { useState } from 'react'
import './App.css'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Search from './component/Search/Search';
import Login from './component/Login/Login';
import Information from './component/Informtion/Information';
import AddInfo from './component/AddInfo/AddInfo';
import ListUser from './component/ListUser/ListUser';
import ProflieUser from './component/ProflieUser/ProflieUser';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/information' element={<Information />}></Route>
                <Route path='/addInfo' element={<AddInfo />}></Route>
                <Route path='/listuser' element={<ListUser />}></Route>
                <Route path='/profileuser' element={<ProflieUser />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
