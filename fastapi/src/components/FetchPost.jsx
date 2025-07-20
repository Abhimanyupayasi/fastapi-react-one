import React, { useEffect, useState } from 'react'

function FetchPost() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
           await fetch("http://localhost:8000/all-notes")
           .then((result)=>result.json())
           .then((data)=>{
            console.log(data)
            setData(data)
           })
           .catch((e)=>{
            console.log("message ", e);
            
           })
        }
        fetchData();

    },[])

  return (

    <div>
        {
            data.map((note , i)=>{
               return <div className='p-5 border-[1px] mt-2.5' key={i}>
               <h1>{note.title}</h1>
               <h2>{note.id}</h2>
               <h4>{note.content}</h4>
               <button
                onClick={()=>{
                    fetch(`http://localhost:8000/deleteOne/${note.id}`,{
                        "method" : "DELETE",
                        "headers" :{
                            "Content-Type" : "application/json"
                        }
                    }).then((result)=>result.json()).then((data)=>{
                        console.log(data);
                        setData(data)
                        alert(data.message)
                    }).catch((e)=>{
                        console.log(e);
                        
                    })
                }}
               className='px-3 py-1 mt-2 border-red-700 border-[1px] bg-red-500 text-white rounded-3xl cursor-pointer'>delete</button>
               </div>
            })
        }
    </div>
  )
}

export default FetchPost