import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router'
import Home from './components/Home'
import Signup from './components/signup'
import Dashboard from './components/dashboard'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/dashboard/:id' element={<Dashboard/>} />
      <Route path='/update/:id' element={<Update/>} />
    </Routes>
  )
}

export default App
