import React from 'react'

function Button({text, handleSubmit}){
  return (
    <div>
        <button onClick={handleSubmit}>{text}</button>
    </div>
  )
}

export default Button