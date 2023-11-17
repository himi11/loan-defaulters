import React from "react";
import "./Navigation.css";
import { NavLink } from 'react-router-dom';


export default function Navigation(){

    return (
    <header className="Header">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={require("../assets/dollar1.png")} className="Logo" alt="logo" />
  <a className="navbar-brand" href="#">Loan Defaulter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/dataVisualize">Data Visualization</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/DataGridDemo">Data Grid</NavLink>
      </li>
    </ul>
 
  </div>
</nav>
     </header>

    );
}

