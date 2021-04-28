import React from 'react'
import noticeData from "../DummyData/notice"
import "./SideBar.css"

function SideBar() {

let noticeDataNew = [...noticeData.slice(0,3)] // ensure use of 3 most recent posts only 
//
    return (
        <div>
            {noticeDataNew.map(data =>
          
<div className="noticeBox">
    <h1 className="title">{data.title}</h1>
    <p className="content">{data.content}</p>
    <p className="date">Posted On: {data.date}</p>
    <p className="author">Published By: {data.author}</p>
    </div> 
            )}

       </div>
    )
}

export default SideBar
