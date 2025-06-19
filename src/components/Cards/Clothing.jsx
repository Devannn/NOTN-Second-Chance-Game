import React from 'react'
import "./Clothing.css"

export default function Clothing(props) {
  return (
    <div className='dead-clothing-bg'>
        <img src={props.imgSrc} />
    </div>
  )
}