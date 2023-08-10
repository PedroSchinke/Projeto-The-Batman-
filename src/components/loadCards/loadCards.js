import React, {useState} from "react";
import './loadCards.css';
import ModalPaul from "../modals/modalPaul";
import ModalColin from "../modals/modalColin";
import ModalAndy from "../modals/modalAndy";

function LoadCards() {

    const [isModalRobertVisible, setIsModalRobertVisible] = useState(false)

    const [isModalZoeVisible, setIsModalZoeVisible] = useState(false)

    const [isModalJeffreyVisible, setIsModalJeffreyVisible] = useState(false)

    const [isLoadModalVisible, setIsLoadModalVisible] = useState(false)

    return (

        <>

        <div className={isLoadModalVisible ? "load-actor-cards-container" : "load-actor-cards-container-disabled"}>

            <div className="cards-content">

                <div onClick={() => setIsModalRobertVisible(true)} className="card banner4">Paul Dano - Charada</div>
                    {isModalRobertVisible ? (
                        <ModalPaul onClose={() => setIsModalRobertVisible(false)}/>
                    ) : null}

                <div onClick={() => setIsModalZoeVisible(true)} className="card banner5">Colin Farrel - Pinguim</div>
                    {isModalZoeVisible ? (
                        <ModalColin onClose={() => setIsModalZoeVisible(false)}/>
                    ) : null}

                <div onClick={() => setIsModalJeffreyVisible(true)} className="card banner6">Andy Serkis - Alfred</div>
                    {isModalJeffreyVisible ? (
                        <ModalAndy onClose={() => setIsModalJeffreyVisible(false)}/>
                    ) : null}
                
            </div>

        </div>

        <div className={isLoadModalVisible ? "load-disabled" : "load"}>

            <button onClick={() => setIsLoadModalVisible(true)} className="load-button">VER MAIS</button>

        </div>

        <div className={isLoadModalVisible ? "unload" : "unload-disabled"}>

            <button onClick={() => setIsLoadModalVisible(false)} className="unload-button">VER MENOS</button>

        </div>

        </>
    )}

export default LoadCards;