import React, {useState} from 'react'
import css from "./Face.module.css"

function Face({name, id, src}) {
const[checked, setChecked] = useState("Out");

function handleClick(){
   
    setChecked(checked === "In" ? "Out": "In")
}
    return (
        <button onClick={handleClick} className={css[checked]}>
            <img className={css.image} src={`${src}`} alt="FaceOne" />
            <p>{name}</p>
        </button>
    )
}

export default Face
