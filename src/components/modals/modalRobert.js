import React from "react";
import './modals.css'
import RobertPattinson from '../../assets/Robert Pattinson.jpg'

function ModalRobert({ id = 'modal', onClose= () => {} }) {

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

                    <img className="modal-image" src={RobertPattinson} alt="rp"/>

                    <div className="text">

                        <h2>Robert Pattinson (Batman)</h2>

                        <p>Robert Pattinson é um talentoso ator britânico que ganhou fama mundial com o papel de Edward Cullen na saga "Crepúsculo". Além disso, se destacou em filmes como "Cosmópolis", "O Farol", "Bom Comportamento" e "Tenet". Sua participação altamente aguardada como o icônico Batman no filme "The Batman" tem gerado grande expectativa dos fãs. Pattinson é conhecido por sua versatilidade e escolha de projetos desafiadores, consolidando-se como uma das estrelas mais versáteis e respeitadas da indústria cinematográfica contemporânea. Sua interpretação do Cavaleiro das Trevas promete ser um marco em sua já impressionante carreira.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalRobert;