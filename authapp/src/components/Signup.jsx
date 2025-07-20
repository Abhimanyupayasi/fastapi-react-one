import React, { use, useState } from 'react'
import {useNavigate} from "react-router-dom"

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = () =>{
        const user = {
        "name":  name,
        "email":email, 
        "password":password
        }
        fetch("http://localhost:8000/create",{
            method : "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(user)
        }).then((result) => result.json())
        .then((data) => {
            console.log(data);
            setEmail("")
            setName("")
            setPassword("")
            alert(data.message)
            navigate(`/dashboard/${data.id}`)
            
        }).catch((e)=>{
            console.log(e);
                
        })
    }
  return (
    <div>
        <h1 className='text-center'>
            Signup form
        </h1>
        <input 
            value={name}
            placeholder='name'
            onChange={(e)=> setName(e.target.value)} type="text" />
        <input
            value={email}
            placeholder='email'
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            type="email" />
            <input
            placeholder='password'
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="text" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup