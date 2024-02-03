/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from '../pages/register/Register';
import Login from '../pages/Login/Login';
import Layout from '../components/Layout/Layout';
import Top from '../pages/Top/Top';
import Footer from '../components/Footer/Footer';
import RegisterAdv from '../pages/registerAdv/RegisterAdv';
import ContactUs from '../components/Layout/contacLayout';
import FindLayout from '../components/Layout/findLayout'
import About from '../components/Layout/aboutLayout'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route>
            <Route path='/' element={<Layout/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/top' element={<Top/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/fal' element={<FindLayout/>} />
            <Route path='/registeradv' element={<RegisterAdv/>}/>
            <Route path='/footer' element={<Footer/>} />
        </Route>
      </Routes>
    </>
  )
}

export default Routers