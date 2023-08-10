import React, {useState} from "react";
import './cards.css'
import ModalRobert from "../modals/modalRobert";
import ModalZoe from "../modals/modalZoe";
import ModalJeffrey from "../modals/modalJeffrey";
import LoadCards from "../loadCards/loadCards";

function Cards() {

    const [isModalRobertVisible, setIsModalRobertVisible] = useState(false)

    const [isModalZoeVisible, setIsModalZoeVisible] = useState(false)

    const [isModalJeffreyVisible, setIsModalJeffreyVisible] = useState(false)

    return (

        <>

        <div className="actor-cards-container">

            <div className="cards-content">

                <div onClick={() => setIsModalRobertVisible(true)} className="card banner1">Robert Pattinson - Batman</div>
                    {isModalRobertVisible ? (
                        <ModalRobert onClose={() => setIsModalRobertVisible(false)}/>
                    ) : null}

                <div onClick={() => setIsModalZoeVisible(true)} className="card banner2">Zoë Kravitz - Mulher Gato</div>
                    {isModalZoeVisible ? (
                        <ModalZoe onClose={() => setIsModalZoeVisible(false)}/>
                    ) : null}

                <div onClick={() => setIsModalJeffreyVisible(true)} className="card banner3">Jeffrey Wright - James Gordon</div>
                    {isModalJeffreyVisible ? (
                        <ModalJeffrey onClose={() => setIsModalJeffreyVisible(false)}/>
                    ) : null}
                
            </div>

        </div>

        <LoadCards/>

        </>
    )
}

export default Cards;