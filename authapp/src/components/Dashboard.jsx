import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Allusers from './Allusers'

function Dashboard() {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchUser = () =>{
        fetch(`http://localhost:8000/find-user/${id}`)
        .then((result)=>result.json())
        .then((data)=>{
            setData(data)
            
        })
    }
    fetchUser();
    },[])
    
    
    console.log(data);
    

  return (
    <>
        <div className='felx w-[100%] h-full justify-center items-center'>
            <div className='p-4 text-center  text-lg'>
                <h1>current user is </h1>
                <h1>{data.name}</h1>
                <h2>{data.email}</h2>
                <h2>{data.id}</h2>
                <h2>{data.password}</h2>
            </div>
            <Allusers/>
        </div>
    </>
  )
}

export default Dashboard