import React from 'react'
import workers from "../../DummyData/workers"
import css from './StaffListTable.css'

// import full staff list 
// dispaly each staff member in a grid layout 
// have edit button for staff member 
// have sign in option?

function StaffListTable() {
    return (
        <div><div className="table">
            <div>ID</div><div>Name</div><div>Position</div><div>Weekly Hrs</div><div>Hrs Worked</div><div>Checked In/Out</div><button className="EditButton">Edit</button>
        </div>
        {workers.map(staff => 
            <div className="tableContents" key={staff.id}> 
            <div>{staff.id}</div><div>{staff.name}</div><div>{staff.position}</div><div>{staff.Hrs}</div><div className={staff.HrsDone < staff.Hrs ? "okay" : "over"  }>{staff.HrsDone}</div><div>{staff.checked}</div><button className="EditButton">Edit</button></div> )}
    </div>
    )
}

export default StaffListTable
