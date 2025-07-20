import React, { useState } from 'react'
import Toast from './Toast'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toast, setToast] = useState("")

    const signupHandler = () =>{
        const user = {
            "email" : email,
            "password" : password
        }
        fetch('http://localhost:8000/create',{

            headers:{
                "Content-Type" : "application/json"
            },
            method: "POST",
            body : JSON.stringify(user)

        }).then((result)=>result.json())
        .then((data) => {
            console.log(data);
            alert(data.message)
            setEmail("")
            setPassword("")
            
        }).catch((e)=>{
            console.log("ERROR");
           alert("ERROR")
            
        })
    }
  return (
    <div className='flex gap-5 mt-7 w-full items-center justify-center flex-col'>
        <h1>Signup Form</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password" className="input" />
        <button onClick={signupHandler} className="btn btn-primary">Submit</button>
        
    </div>
  )
}

export default Signup