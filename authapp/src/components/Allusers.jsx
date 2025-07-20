import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom'

function Allusers() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchUsers =() =>{
            fetch(`http://localhost:8000/all-users`)
            .then((result)=> result.json())
            .then((data)=>{
                setData(data)
            })
        }
        fetchUsers();
    },[])
    console.log(data);


    const navigation=(id)=>{
        
        navigate(`/update/${id}`)
    }

    const deleteHandler = (userid) =>{
        fetch(`http://localhost:8000/delete/${userid}`,{
            method:"DELETE",
            headers:{
                "Content-Type" : "application/json"
            },
        }).then((result)=>result.json())
        .then((data)=>{
            console.log(data);
            alert(data.message)   
        })
    }
    
  return (
    <div>
        {data.map((user, key)=> 
        <div key={key} className='p-5 text-center border-[1px]'>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.id}</h1>
            <h1>{user.password}</h1>
            <div className='gap-10 mt-4'>
                <button
                onClick={()=>{
                    navigation(user.id)
                }}
                 className='px-3 cursor-pointer mr-2 py-2 border-[1px] border-yellow-600'>update</button>
                <button onClick={()=>{
                    deleteHandler(user.id)
                }} className='px-3 cursor-pointer ml-2 py-2 border-[1px] border-red-700'>delete</button>
            </div>
        </div> )}
    </div>
  )
}

export default Allusers