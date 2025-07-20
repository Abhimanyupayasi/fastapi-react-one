import React from 'react'

function Input( {type, name, value, handleChange, label}) {
  
    return (
    <div>
      <label >{label}</label>,
        <input type={type} name={name} value={value} placeholder={label} onChange={handleChange}/>
    </div>
  )
}

export default Input