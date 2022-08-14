import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Headerlist/About'
import Articles from './Headerlist/Articles'
import Home from './Headerlist/Home'
import Login from './Headerlist/Login'

export default function Header() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/articles' element={<Articles />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  )
}
