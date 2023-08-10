import React from "react";
import Video from '../../assets/Batman.mp4';
import './trailer-container.css';

function TrailerContainer() {

    return (

        <div id="trailer-container">

            <div className="content">

                <video controls className="trailer">

                    <source src={Video}/>
                    Seu navegador não possui suporte para videos

                </video>

                <div id="sinopse">

                    <p className="description">
                        Após a morte de seus pais, o jovem bilionário Bruce Wayne (Robert Pattinson) age como vigilante noturno em Gotham City. No entanto, uma série de crimes desafiará as suas habilidades heróicas.
                        Enquanto isso, o Charada (Paul Dano) decide fazer um jogo de gato e rato com Bruce e o comissário James Gordon (Jeffrey Wright). Mas Batman representa a justiça e não deixará o mal vencer essa batalha.
                    </p>

                    <button className="button">COMPRAR INGRESSO</button>

                </div>

            </div>

        </div>

    )
}

export default TrailerContainer;