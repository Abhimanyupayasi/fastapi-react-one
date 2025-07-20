import React, { useEffect, useState } from 'react'

function Signup() {
  const [name, setName] = useState("");
  const [password , setPassword] = useState("");
  
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    

    if(user){
      setName(user.name);
      setPassword(user.password);
    }

  },[])

  
  const handleSubmit = () =>{
    const user = { name , password}
    localStorage.setItem("user", JSON.stringify(user));
    
    
  } 

  return (
    <div>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Signup