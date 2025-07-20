import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router"

function AllUsers() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("http://localhost:8000/all").then((Result) => Result.json())
            .then((data) =>{
                console.log(data.data);
                setData(data.data)
                
            })
    },[])

    function handleUpdate(id){
      navigate(`/update/${id}`)
    }

    function handleDelete(id){
      fetch(`http://localhost:8000/delete/${id}`,{
          headers:{
            "Content-Type" : "application/json"
          },
          method : "DELETE"
      })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        alert(data.message)
        
      })
    }



  return (
    <>
    {data.map((item, i)=>{
     return   <div className='design' key={i}>
                    <p>{i+1}</p>
                    <p>{item.todo}</p>
                    
                    <p>{item.id}</p>
                    <div className='button-2'>
                      <button onClick={()=>handleUpdate(item.id)} >update</button>
                      <button onClick={()=> handleDelete(item.id)}>delete</button>
                    </div>
             </div>
    })}
    </>
  )
}

export default AllUsers