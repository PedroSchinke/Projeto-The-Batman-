import Header from "../../components/header/header";
import './styles.css';
import TrailerContainer from "../../components/trailer-container/trailer-container";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {

    return (
        
        <>

            <Header/>

            <div id='banner'></div>

            <div className="trailer-sinopse">

                <div className="trailer-sinopse-span">TRAILER E SINOPSE</div>

            </div>

            <TrailerContainer />

            <div className="elenco">

                <div className="elenco-span">ELENCO</div>

            </div>

            <Cards />

            <Footer />

        </>
    )
}

export default Home;