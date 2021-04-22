import React, {useState} from "react"
import { Modal, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Modal.css"
import AlertDialog from "../Alert"
import TimePicker from 'react-time-picker'

function CheckInModal(props) {
    const [shiftStart, setShiftStart] = useState("07:00")
    const [shiftEnd, setShiftEnd] = useState("")
    const [time, timeChange] = useState("07:00");
    const [timestampIn, setTimeStampIn] = useState("00:00")
    const [timestampOut, setTimeStampOut] = useState("00:00")
    let timestamp = new Date()

    function handleTime(v){
      timeChange(v)
      handleTimeSubmit(v)
    }

    function handleTimeSubmit(v){
    props.checked === "In" ? setShiftStart(v) : setShiftEnd(v)
    }



  function handleSumbit(){
     if (props.checked === "Out") //meaning was In bvefore click - thus checking In 
     {
        setTimeStampOut(timestamp)
         props.onHide()
         console.log(`${props.name} left HDN at ${timestamp}`)
         console.log(`${props.name} ended their shift at ${shiftEnd} on ${timestamp.toString().slice(0,15)}`)
         return timestampIn, shiftEnd}
     
     else{
      setTimeStampIn(timestamp)
        props.onHide()
        console.log(`${props.name} entered HDN at ${timestamp}`)
        console.log(`${props.name} started their shift at ${shiftStart} on ${timestamp.toString().slice(0,15)}`)
        return timestampOut, shiftStart}
      
  }

  function handleCancel(){
    props.setChecked(props.checked === "In" ? "Out": "In")
    props.onHide();
  }



    return (
        
        <Modal {...props} aria-labelledby="checkinModal" size="lr"
        dialogClassName="modal-60w"
        backdrop='static'
        >

        <Modal.Header closeButton>
          <Modal.Title id="checkinModal">{props.data.title}</Modal.Title>
        </Modal.Header>
    
        <Modal.Body className="show-grid" >
          
          <Container >
         <label for="appt">{props.data.body}</label>
<TimePicker onChange={handleTime} value={time} step="300" minTime="07:00" maxTime="18:00" disableClock={true} required/>

         </Container>
    
        </Modal.Body>
        
        <Modal.Footer>
            {/* have button or submit form (date input) */}
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <AlertDialog time={time} buttonText={props.data.buttonText} name={props.name} submit={handleSumbit}/>
         
        </Modal.Footer>

      </Modal>
    );
  
  }

  export default CheckInModal;