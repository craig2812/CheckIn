import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo from './HDNLogo.png'
import "./NavBar.css"





function NavBar() {


    return (
    <nav>
       
       <Link className="logo" to={`/`}>
         <img src={logo} alt="logo"/> 
         </Link>

         <div className="staffBut"><Link className="routerLink" to={`/StaffList`}><button > Staff</button> </Link></div>
        
         <div className="adminBut"><Link className="routerLink" to={`/AdminPage`}><button > Admin</button> </Link></div>

         <div className="visitorsBut"><Link className="routerLink" to={`/VisitorList`}>  <button >
            Visitors
           </button> </Link></div>
            
            <h1>Check-It!</h1>
           
      </nav>
    )
}

export default NavBar
