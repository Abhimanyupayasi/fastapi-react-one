import React, { useState } from 'react'

function Addtodo() {
    const[todo, setTodo] = useState("")
    const handleSubmit = () =>{
        const data = {"todo" : todo}
        fetch(`http://localhost:8000/create`,{
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)

        }).then((result) =>result.json())
            .then((data) =>{
                console.log(data);
                alert(data.message)
                setTodo("")
                
            })
    }
  return (
    <>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" />
        <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Addtodo