import '../styles/Cart.css'
import 'boxicons';

function Cart({isShownMenu, setIsShownMenu}) {
    const cartItemCounter = 2;
    const listAmount = 187.2;

    return isShownMenu ? (
        <section className='cart-layout'>
            <div className='cart-header'>
                <box-icon name='x-circle' type='solid' color='#008000' onClick={()=>(setIsShownMenu(!isShownMenu))}></box-icon>
                <span className='title'>LISTE DE NEGOCIATION</span>
                <span className='cart-summary'>Votre liste compte actuellement {cartItemCounter} Joueur(s)</span>
            </div>
            <div className='cart-items'>
                <div className='cart-item'>

                </div>
            </div>
            <div className='cart-validation'>
                <span className='cart-summary'>Votre liste de négociation est estimée à {listAmount} millions d'€.</span>
                <span className='action-btn'>Lancer les négociations</span>
            </div>
        </section>
    ) : null;
    /*{Ajouter un bouton vider la liste}*/

}

export default Cart;