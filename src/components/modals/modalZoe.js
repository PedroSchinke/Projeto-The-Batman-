import React from "react";
import './modals.css'
import ZoeKravitz from '../../assets/Zoe Kravitz.jpg'

function ModalZoe({ id = 'modal', onClose= () => {} }) {

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

                    <img className="modal-image" src={ZoeKravitz} alt="zk"/>

                    <div className="text">

                        <h2>Zoë Kravitz (Mulher Gato)</h2>

                        <p>Zoë Kravitz é uma talentosa atriz norte-americana que se destacou por seus papéis em filmes e séries de TV. Ela ganhou reconhecimento por atuações em "Divergente", "Mad Max: Estrada da Fúria", "Animais Fantásticos: Os Crimes de Grindelwald", "Big Little Lies" e "High Fidelity". Sua participação como Mulher-Gato no filme "The Batman" trouxe uma nova abordagem ao icônico personagem, e sua performance foi amplamente elogiada. Kravitz é admirada pela sua versatilidade, beleza e talento, consolidando-se como uma das promissoras estrelas de Hollywood.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ModalZoe;