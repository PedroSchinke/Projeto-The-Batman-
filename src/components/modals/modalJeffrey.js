import React from "react";
import './modals.css'
import JeffreyWright from '../../assets/Jeffrey-Wright.jpg'

function ModalJeffrey({ id = 'modal', onClose= () => {} }) {

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

                    <img className="modal-image" src={JeffreyWright} alt="jw"/>

                    <div className="text">

                        <h2>Jeffrey Wright (James Gordon)</h2>

                        <p>Jeffrey Wright é um talentoso ator norte-americano conhecido por sua notável carreira no cinema e na televisão. Ele brilhou em filmes como "007 - Cassino Royale", "Jogos Vorazes", "O Homem que Mudou o Jogo", "Basquiat" e "Angels in America". Sua participação como Comissário Gordon no filme "The Batman" acrescentou uma nova dimensão ao icônico personagem. Wright é elogiado por sua versatilidade e entrega atuações marcantes em cada projeto que realiza, consolidando-se como um dos atores mais respeitados e talentosos de sua geração.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalJeffrey;