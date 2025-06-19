import React from 'react'
import "../Alert/Alert.css"
import checkCircle from "../../assets/check_circle.svg"

export default function Alert() {
  return (
   <div className='alert-wrapper'>
    <img src={checkCircle} />
    <p>Item was added to wardrobe</p>
   </div>
  )
}