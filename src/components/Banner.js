import logo from '../assets/images/ball.svg'
import logoCart from '../assets/images/négociation.png'
import '../styles/Banner.css'

function Banner() {
    const currentMonth = new Date().getMonth();
    const isTransfertWindowOpen = (currentMonth === 0) // Fenêtre de transfert hivernale
                                  || ((currentMonth >= 5) && (currentMonth <= 7)); // Période de mercato estivale
    const alertNotification = (isTransfertWindowOpen) ? "C'est le moment de redynamiser votre équipe !!!"
                                                      : "Le mercato c'est pour bientôt, préparez-vous !";

    return (
        <header className="shop-banner">
            <div className="img-container">
                <img src={logo} alt='Un ballon idéale pour représenter la passion'/>
            </div>
            <div className='text-content'>
                <h1>MERCATO React</h1>
                <span>{alertNotification}</span>
            </div>
            <div className='cart-icon'>
                <img src={logoCart} alt='Cliquez ici pour visualiser les joueurs de votre liste'/>
                <span className='cartItem-insight'>
                    4
                </span>
            </div>
        </header>
    );
}

export default Banner;