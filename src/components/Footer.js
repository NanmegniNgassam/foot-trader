import pisoft from '../assets/images/pisoft.png';
import openClassRoom from '../assets/images/Logo_OpenClassrooms.png';
import coursera from '../assets/images/coursera_logo.png'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className='about-section'>
                <span className='title'>MES SINCERES REMERCIEMENTS ENVERS</span>
                <div className='promotions'>
                    <a href='https://www.pisoftlite.com/'>
                        <img src={pisoft} alt='Une entreprise très connu dans le monde du développement informatique'/>
                        <p>pisoft Lite</p>
                    </a>
                    <a href='https://openclassrooms.com/'>
                        <img src={openClassRoom} alt="La meilleure plateforme de MOOC, connu pour ses excellents profs et méthodes"/>
                        <p>OpenClassRoom</p>
                    </a>
                    <a href='https://www.coursera.org/'>
                        <img src={coursera} alt='Another educationnal reference, particularly known in computer sciences'/>
                        <p>Coursera</p>
                    </a>
                </div>
                <a className='title' href='https://gilles.nanmegni.pisoftlite.com/'>Consulter mon port-folio</a>
            </div>

            <hr />
            <div className='copyright'>
                <span>@copyright pisoft lite 2023 by blacKoder</span>
            </div>
        </footer>
    );
}

export default Footer;