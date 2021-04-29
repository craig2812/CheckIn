import React from 'react'
import NavBar from '../NavBar'
import "./AdminPage.css"
import { useAuth0 } from "@auth0/auth0-react";

function AdminPage() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const allowedEmails = ['craig2812@gmail.com', "office@halesowendaynursery.com"] //can I make this .env or called on in Database?
  
if(isLoading){<h1>LOADING</h1>}

if (!isAuthenticated) {
      return (
<div>
            <NavBar/>
        <div className="AdminPageBox">
        <h2>Admin Page</h2>
        <button onClick={() => loginWithRedirect()}>Log In</button>
<br/>

            <h3>Live Numbers</h3>
            <p>Current Visitors: 1</p>
            <p>Current Staff In: 9</p>
        </div>
        </div>
      )}

    if (isAuthenticated &&  allowedEmails.some(email => email === user.email) //some basically checks if one value of the array matches user.email and returns true or false 
        // (domain ===  "halesowendaynursery.com" || user.email === "craig2812@gmail.com") 
        ) {
        return(
            isAuthenticated && (
      
      
              <div>
                  <NavBar/>
              <div className="AdminPageBox">
              <h2>Admin Page</h2>
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              <button onClick={() => logout({ returnTo: "http://localhost:3000/AdminPage" })}>
              Log Out
            </button>
      
                  <button>Check All Visitors</button>
                  <button>Search User</button>
                  <button>Add Notice</button>
      <br/>
                  <h3>Live Numbers</h3>
                  <p>Current Visitors: 1</p>
                  <p>Current Staff In: 9</p>
              </div>
              </div>
          ))

    }

else return (
    <div>
    <NavBar/>
<div className="AdminPageBox">
<h2>You are not an Authorised User please Log Out</h2>
<br/>
<button onClick={() => logout({ returnTo: "http://localhost:3000/AdminPage" })}>
      Log Out
    </button>
    <h3>Live Numbers</h3>
    <p>Current Visitors: 1</p>
    <p>Current Staff In: 9</p>
</div>
</div>
)


}

export default AdminPage
