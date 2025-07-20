import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router"
import HomePage from './components/HomePage'
import Signup from './components/Signup'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    
  )
}

export default App
