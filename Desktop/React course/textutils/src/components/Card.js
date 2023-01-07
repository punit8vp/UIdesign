import React from "react";
import "./cardStyle.css";

export default function Card() {
    return (
        // <div className="container">
        <div className="card-container row gridCard">
            <div className="card col-lg-2 mx-2 my-2">
                <p className="Text">LAS VEGAS</p>
                <p>NV (LSX)</p>
            </div>
            <div className="card col-lg-2 mx-2 my-2">
                <p className="Text">LOS ANGELES</p>
                <p>CA (LAX)</p>
            </div>
            <div className="card col-lg-2 mx-2 my-2">
                <p className="Text">NEW YORK CITY</p>
                <p>NV (LSX)</p>
            </div>
            <div className="card col-lg-2 mx-2 my-2">
                <p className="Text">SYDNEY</p>
                <p>NV (SYN)</p>
            </div>
            <div className="card col-lg-2 mx-2 m-2">
                <p className="Text">PALM SPRING</p>
                <p>CA(PSP)</p>
            </div>
            <div className="card col-lg-2 mx-2">
                <p className="Text">PORTLAND</p>
                <p>OR(PDX)</p>
            </div>
            <div className="card col-lg-2 mx-2">
                <p className="Text">ALL CITIES</p>
            
            </div>
        </div>
        // </div>
    )
}