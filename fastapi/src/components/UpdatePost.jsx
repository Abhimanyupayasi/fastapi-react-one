import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdatePost() {
    const {id} = useParams();    
    const [data, setData] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    useEffect(()=>{
        const fetchPost = async () =>{
            await fetch(`http://localhost:8000/fetchOne/${id}`).then((result)=>result.json()).then((data)=>{
                console.log(data);
                setData(data);
                setContent(data.data.content)
                setTitle(data.data.title)                      
            }).catch((e)=>{
                console.log(e);               
            })            
        }
        fetchPost()
    },[])

    const submitButton =() =>{
        fetch(`http://localhost:8000/update/${id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({title, content})
        }).then((result)=>result.json()).then((data)=>{
            console.log(data);
            alert(data.message);
        })
    }

  return (
    <>
    
        <input  value={title} type="text" onChange={(e)=> setTitle( e.target.value)}     placeholder="Type title" className="input" />
        <br />
        <input value={content} type="text" onChange={(e)=> setContent(e.target.value)}    placeholder="Type content" className="input mt-3" />
        <br />
        <button className='mt-2' onClick={submitButton}>Submit</button>
    
    </>
  )
}

export default UpdatePost