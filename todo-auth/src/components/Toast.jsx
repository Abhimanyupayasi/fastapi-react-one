import React, { useEffect, useState } from 'react'

function Toast({todo}) {
    console.log(todo);
    const [show , setShow] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
        setShow(false)
    },2000)

    
    },[])
    if(!show){
        return null
    }
  return (
    <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>{todo}</span>
  </div>
  </div>
    
  )
}

export default Toast