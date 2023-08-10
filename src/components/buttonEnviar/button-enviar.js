import React from "react";
import './button-enviar.css'

function ButtonEnviar({onClick}) {

    return (

        <button className="button-enviar" onClick={onClick}>Enviar</button>
    )
}

export default ButtonEnviar;