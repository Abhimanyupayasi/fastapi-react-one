import React, { useState } from 'react'

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [res, setRes] = useState("")

    const submitButton =() =>{
        const note = {
            title, 
            content
        }
        fetch("http://localhost:8000/create",{
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(note)
        }).then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setContent("")
            setTitle("")
        })
        .catch((e)=>{
            console.log(
                e
            );
            
        })
    }

  return (
    <>
    <input value={title} type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Type here" className="input" />
    <br />
    <input value={content} type="text" onChange={(e)=> setContent(e.target.value)} placeholder="Type here" className="input mt-3" />
    <br />
    <button className='mt-2' onClick={submitButton}>Submit</button>
    </>
  )
}

export default CreatePost