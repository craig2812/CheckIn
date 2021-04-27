import React from 'react'
import logo from './HDNLogo.png'
import css from "./NavBar.css"


function NavBar() {
    return (
    <nav>
            <img src={logo} alt="logo"/> 
            <button id="visitorsBut">Visitors</button>
            <button id="usersBut">Users</button>
            <h1>Check-It!</h1>
      </nav>
    )
}

export default NavBar
