import React from "react"

export default function Radio(){
    return (

    <div className ="radio-box row radio-container" >

        <div className="form-check form-check-inline col">
            <input 
 
            className="form-check-input" 
            type="radio" 
            name="typeOfTravel" 
            id="inlineRadio1" 
            value="Round Trip" 

            />
            <label className="form-check-label" htmlFor="inlineRadio1">Round Trip</label>
        </div>
        <div className="form-check form-check-inline col">
            <input 

            className="form-check-input" 
            type="radio" 
            name="typeOfTravel" 
            id="inlineRadio2" 
            value="One Way"

            />
            <label className="form-check-label" htmlFor="inlineRadio2">One Way</label>
        </div>
        <div className="form-check form-check-inline col">
            <input 
            className="form-check-input" 
            type="radio" 
            name="typeOfTravel" 
            id="inlineRadio3" 
            value="Multi City"

            />
            <label className="form-check-label" htmlFor="inlineRadio3">Multi City</label>
        </div>
        <hr />
    </div>
    
)
    }