import '../styles/Cart.css'
import 'boxicons';
import CartItem from './CartItem';

function Cart({isShownMenu, setIsShownMenu, cart, setCart, cartItemCount}) {
    const listAmount = 187.2;

    return isShownMenu ? (
        <section className='cart-layout'>
            <div className='cart-header'>
                <box-icon name='x-circle' type='solid' color='#daa520' onClick={()=>(setIsShownMenu(!isShownMenu))}></box-icon>
                <span className='title'>LISTE DE NEGOCIATION</span>
                <span className='cart-summary'>Votre liste compte actuellement {cartItemCount} Joueur(s)</span>
            </div>
            <div className='cart-items'>
                {cart.map((cartItem) => (
                    <CartItem cartItem={cartItem} />
                ))}
            </div>
            <div className='cart-validation'>
                <span className='cart-summary'>Votre liste de négociation est estimée à {listAmount} millions d'€.</span>
                <span className='action-btn'>Vider la liste</span>
                <span className='action-btn submit'>Lancer les négociations</span>
            </div>
        </section>
    ) : null;
    /*{Ajouter un bouton vider la liste}*/

}

export default Cart;