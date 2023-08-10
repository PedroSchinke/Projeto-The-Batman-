import React from "react";
import './modals.css'
import AndySerkis from '../../assets/Andy Serkis.jpg'

function ModalAndy({ id = 'modal', onClose= () => {} }) {

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

                    <img className="modal-image" src={AndySerkis} alt="as"/>

                    <div className="text">

                        <h2>Andy Serkis (Alfred)</h2>

                        <p>Andy Serkis é um renomado ator britânico conhecido por suas habilidades excepcionais de captura de movimento e atuação. Ele ficou famoso por seus papéis em "O Senhor dos Anéis" (como Gollum), "Planeta dos Macacos" (como César), "King Kong", "Vingadores: Era de Ultron" e "Pantera Negra". Sua participação como o mordomo Alfred Pennyworth no filme "The Batman" acrescentou outra dimensão à sua carreira diversificada. Serkis é um talento único e inovador, aclamado por sua contribuição significativa para o mundo do cinema e da tecnologia.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalAndy;