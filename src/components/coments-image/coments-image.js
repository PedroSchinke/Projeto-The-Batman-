import React from "react";
import './coments-image.css';
import ButtonEnviar from "../buttonEnviar/button-enviar";

function ComentsImage() {

    function evento() {
        alert('Sua mensagem foi enviada!')
      }

    return (

        <div className="comments-image">

            <div className="text-form">

                <div className="text">Tem algum comentário sobre o filme ou sugestão para nosso site? Comente aqui!</div>

                <form action="./Comentarios.html" className="form">

                    <label className="writing" htmlFor="text">Nome completo</label>
                    <input className="input" style={{ display: "block"}} id="text" type="text" name="nome"/>

                    <label className="writing" htmlFor="email">Email</label>
                    <input className="input email1" style={{ display: "block"}} id="email" type="email" name="email" placeholder="email válido"/>

                    <label className="writing" htmlFor="textarea">Envie sua mensagem:</label>
                    <textarea className="input" style={{ display: "block"}} name="mensagem" id="textarea" rows="5"></textarea>

                    <ButtonEnviar onClick={() => evento()} />

                </form>

            </div>

            <div className="image"></div>

        </div>
    )
}

export default ComentsImage;