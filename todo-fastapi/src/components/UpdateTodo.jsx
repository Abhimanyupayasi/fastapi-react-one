import React, { useEffect, useState } from 'react'
import {useParams} from "react-router"

function UpdateTodo() {
    const {id}  = useParams()
    const[todo, setTodo] = useState("")

    console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:8000/todo/${id}`)
        .then((result)=> result.json())
        .then((data)=>{
            console.log(data.data.todo);
            setTodo(data.data.todo)
            
        })
    },[])



    const handleUpdate = () =>{
        const data = {
            "todo" : todo,
        }
        fetch(`http://localhost:8000/update/${id}`,{
            headers:{
                "Content-Type" : "application/json"
            },
            method: "PUT",
            body : JSON.stringify(data)
        })
        .then((result)=>result.json())
        .then((data)=>{
            console.log(data);
            alert(data.message.message)
            
        })
    }
    
  return (
    <div>

        <input value={todo} 
        onChange={(e)=>setTodo(e.target.value)}
         type="text" />
         <button onClick={handleUpdate}>Update Value</button>
        
    </div>
  )
}

export default UpdateTodo