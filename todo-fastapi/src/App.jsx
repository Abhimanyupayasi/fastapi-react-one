import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router"
import Home from './components/Home'
import Addtodo from './components/Addtodo'
import AllUsers from './components/AllUsers'
import UpdateTodo from './components/UpdateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Addtodo/>} />
        <Route path='/all' element={<AllUsers/>} />
        <Route path='/update/:id' element={<UpdateTodo/>} />
    </Routes>
  )
}

export default App
