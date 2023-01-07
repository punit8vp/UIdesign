import React from 'react'
import "./HeadingStyle.css";

export default function Heading() {
  return (
    <div>
      <div className="container">
        <p>Book from 
        <select className='cityList' Name="city-list">  
            <option> San Francisco </option>  
            <option> List item 2 </option>  
            <option> List item 3 </option>  
            <option> List item N </option>  
        </select>
        to</p>
      </div>

    </div>
  )
}
