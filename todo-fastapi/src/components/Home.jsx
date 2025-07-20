import React, { use, useEffect, useState } from 'react'

function Home() {
    const [data, setData]  = useState("")
    useEffect(()=>{
        fetch("http://localhost:8000")
            .then((result)=>result.json())
            .then((data)=> {
                console.log(data);
                setData(data.message)
                alert(data.message)
                
            })
    },[])
  return (
    <div>Home</div>
  )
}

export default Home