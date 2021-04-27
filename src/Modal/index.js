import React, {useState} from "react"
import { Modal, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css"
import AlertDialog from "../Alert"
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment from 'moment';




function CheckInModal(props) {

  let timestamp = moment()
  let timestampTime = moment().format("LT")
  let timestampDate = moment().format('LLLL')
  let timestampDayDate = moment().format('dddd, LL'); 

    const [shiftStart, setShiftStart] = useState("Oh wait you need to select a time")
    const [shiftEnd, setShiftEnd] = useState("Oh wait you need to select a time")
    // const [time, timeChange] = useState("Oh wait you need to select a time");
    const [timestampIn, setTimeStampIn] = useState("00:00")
    const [timestampOut, setTimeStampOut] = useState("00:00")

    function handleTime(v){
      // timeChange(v)
      handleTimeSubmit(v)
    }


    function handleTimeSubmit(v){
    props.checked === "In" ? setShiftStart(v) : setShiftEnd(v)
    }



  function handleSumbit(){
     if (props.checked === "Out") //meaning was In before click - thus checking In 
     {
        setTimeStampIn(timestamp)
         props.onHide()
         console.log(`${props.name} left HDN at ${timestampDate}`)
         console.log(`${props.name} ended their shift at ${shiftEnd} on ${timestampDayDate}`)
         return timestampIn, shiftEnd}
     
     else{
      setTimeStampOut(timestamp)
        props.onHide()
        console.log(`${props.name} entered HDN at ${timestampDate}`)
        console.log(`${props.name} started their shift at ${shiftStart} on ${timestampDayDate}`)
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

        <Modal.Header closeButton className="header">
          <Modal.Title id="checkinModal">{props.data.title}</Modal.Title>
        </Modal.Header>
    
        <Modal.Body className="body" >
          
          <Container >
            
         <label for="appt">{props.data.body}</label>
<TimePicker  placeholder="Select Time"
        use12Hours
        showSecond={false}
        allowEmpty={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={e => handleTime(e.format('LT'))}
        minuteStep={5}
        // defaultValue={moment()}
        />

         </Container>
      
    
        </Modal.Body>
        
        <Modal.Footer className="footer" >
            {/* have button or submit form (date input) */}
          <Button variant="secondary" onClick={handleCancel} style={{backgroundColor: "#ec5c63"}}>Cancel</Button>
          {/* Alert pops up when Check IN is clicked to double confirm */}
          <AlertDialog time={props.checked === "In" ? shiftStart : shiftEnd} buttonText={props.data.buttonText} checkedInOut={props.checked} name={props.name} submit={handleSumbit}/>
         
        </Modal.Footer>

      </Modal>
    );
  
  }

  export default CheckInModal;