import React from 'react'
import NavBar from '../NavBar'
import "./AdminPage.css"

function AdminPage() {
    return (
        <div>
            <NavBar/>
        <div className="AdminPageBox">
        <h2>Admin Page</h2>
            <button>Log In</button>
            <button>Log Out</button>
            <button>Check All Visitors</button>
            <button>Search User</button>
            <button>Add Notice</button>
<br/>
            <h3>Live Numbers</h3>
            <p>Current Visitors: 1</p>
            <p>Current Staff In: 9</p>
        </div>
        </div>
    )
}

export default AdminPage
