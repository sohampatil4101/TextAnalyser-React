import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <a className="navbar-brand" href="/"  >Textutils</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
        <li className="nav-item"><Link   className="nav-link" href='/' to="/"> Home <span className="sr-only">(current)</span></Link></li>
        <li className="nav-item "><Link  className="nav-link" href='/' to="/about">about us</Link></li>
        <li className="nav-item "><Link  className="nav-link" href='/' to="/contact">Contact us </Link></li>
        <li className="nav-item"><Link   className="nav-link" href='/' to="/login">Login </Link></li>
        <li className="nav-item "><Link  className="nav-link" href='/' to="/register">Register</Link></li>

          </ul>
        </div>
      </nav>
       <p className="mt-5 mb-3 text-muted text-center  text-dark fixed-bottom my-03 py-13">Copyright &copy; 2023| All Rights Reserved</p> 
       <Outlet />
        </>
    )
    
}

