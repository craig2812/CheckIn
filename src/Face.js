import React from 'react'
import css from "./Face.module.css"

function Face({name, id, src}) {
    return (
        <div >
            <img className={css.facesImage} src={`${src}`} alt="FaceOne" />
            <p>{name}</p>
        </div>
    )
}

export default Face
