import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreatePost from './components/CreatePost'
import FetchPost from './components/FetchPost'
import {Routes, Route} from "react-router-dom"
import UpdatePost from './components/UpdatePost'
// import Upadate from './components/Upadate'


function App() {
  const [count, setCount] = useState(0)
  

  return (

    <Routes>
      <Route path='/' element={<FetchPost/>} />
      <Route path='/create' element={<CreatePost/>} />
      <Route path='/update/:id' element={<UpdatePost/>}/>
    </Routes>
    // <>
    // <FetchPost/>
    // <CreatePost/>
    // </>
  )
}

export default App
