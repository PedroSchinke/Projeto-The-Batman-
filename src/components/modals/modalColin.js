import React from "react";
import './modals.css'
import ColinFarrel from '../../assets/Colin Farrel.jpg'

function ModalColin({ id = 'modal', onClose= () => {} }) {

    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (

        <div className='modal' id={id} onClick={handleOutSideClick}>
        
            <div className="modal-content" id="modal-content">

                <div className="close">

                    <button className="close-button" onClick={onClose}>Fechar</button>

                </div>

                <div className="img-text">

                    <img className="modal-image" src={ColinFarrel} alt="cf"/>

                    <div className="text">

                        <h2>Colin Farrel (Pinguim)</h2>

                        <p>Colin Farrell é um talentoso ator irlandês, conhecido por sua versatilidade e presença marcante nas telas. Ele conquistou reconhecimento em filmes como "Tigerland", "Na Mira do Chefe", "Sangue Negro", "O Vingador do Futuro" e "Em Bruges - Tiros em Bruges". Sua participação como o vilão Pinguim no filme "The Batman" promete trazer uma interpretação única e intrigante ao personagem. Farrell é elogiado por sua habilidade em dar vida a personagens complexos, tornando-se uma figura notável no mundo do cinema. Sua atuação no universo de Batman tem sido amplamente aguardada pelos fãs.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalColin;