import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router"
import Home from './components/Home'
import Signup from './components/Signup'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  )
}

export default App
