import React from 'react'
import'./button.css'

export default function ButtonTranslate({click,se}) {
  const handelClick = ()=>{
    click(true)
  }
    
  return (
    <div>
      <button className='button-15' onClick={handelClick}>{se}</button>
    </div>
  )
}
