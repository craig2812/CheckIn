import React, {useState} from 'react'
import css from "./Face.module.css"
import CheckInModal from "../Modal"

function Face({name, id, src}) {
const[checked, setChecked] = useState("Out");
const [modalShow, setModalShow] = React.useState(false);

let checkInData = {
    title: `Time to check in ${name}`,
    body:"What time is your shift starting today?",
    buttonText:"Check In"
}

let checkOutData = {
    title: `It's Checkout Time`,
    body:`Hope you've had a good day ${name}... What time did your shift finish today?`,
    buttonText:"Check Out"
}

function handleClick(){
    setModalShow(true)
    if (checked === "Out"){
    setChecked(checked === "In" ? "Out": "In")
                            return checked;
                        }
    setChecked(checked === "In" ? "Out": "In")
                        }

    return (
        <>
        <button onClick={handleClick} className={css[checked]}>
            <img className={css.image} src={`${src}`} alt="FaceOne" />
            <p>{name}</p>
        </button>

   <CheckInModal
            data={checked === "Out" ? checkOutData : checkInData }
            checked={checked}
            setChecked={setChecked}
            show={modalShow}
            name={name}
            onHide={() => setModalShow(false)}/>
        </>
    )
}

export default Face
