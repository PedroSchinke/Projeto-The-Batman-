import React from "react";
import './modals.css'
import PaulDano from '../../assets/Paul Dano.jpg'

function ModalPaul({ id = 'modal', onClose= () => {} }) {

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

                    <img className="modal-image" src={PaulDano} alt="pd"/>

                    <div className="text">

                        <h2>Paul Dano (Charada)</h2>

                        <p>Paul Dano é um talentoso ator norte-americano, conhecido por suas atuações intensas e emocionais. Ele se destacou em filmes como "Pequena Miss Sunshine", "Sangue Negro", "Os Suspeitos", "12 Anos de Escravidão" e "Swiss Army Man". Sua participação como o vilão Charada no filme "The Batman" promete ser um dos destaques da produção. Dano é elogiado por sua habilidade em dar vida a personagens complexos, trazendo profundidade e autenticidade a cada papel. Sua presença no universo de Batman promete trazer uma nova perspectiva ao icônico antagonista.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalPaul;