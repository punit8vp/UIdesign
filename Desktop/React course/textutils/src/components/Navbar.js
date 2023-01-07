import React from "react";
import images from '../images/img4.png';
import NavService from "./navService";
import NavInfo from "./NavInfo";
import NavLogin from "./navLogin";
import "./NavbarStyle.css";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand brand-container" href="#">
          <img src={images} alt="logo"  className="d-inline-block align-text-top logoicon"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavService />
          <NavInfo />
          <NavLogin />
          

         
        </div>
      </div>
    </nav>
  );
}
