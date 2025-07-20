import React, { use, useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams();
    const [name, setName]  = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        const fetchUser = () =>{
        fetch(`http://localhost:8000/find-user/${id}`)
        .then((result)=>result.json())
        .then((data)=>{
            setName(data.name);
            setEmail(data.email);
            setPassword(data.password);
            console.log(data);
        }).catch((e)=>{
            console.log(e);          
        })
    }
        fetchUser();
    },[])


    const updateUser = () =>{
        const user = {
            name,
            email,
            password
        }
        fetch(`http://localhost:8000/update/${id}`,{
            headers:{
                "Content-Type" : "application/json",
            },
            method: "PUT",
            body : JSON.stringify(user)
        }).then((result)=>result.json())
        .then((data)=>{
            console.log(data.message);
            alert(data.message.message)
        })
    }
  return (
    <div>
        <input onChange={(e)=> setName(e.target.value)} value={name} type="text" />
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" />
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="text" />
        <button onClick={updateUser}>Submit</button>
    </div>
  )
}

export default Update