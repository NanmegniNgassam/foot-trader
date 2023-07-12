import '../styles/Cart.css'
import 'boxicons';
import CartItem from './CartItem';

function Cart({isShownMenu, setIsShownMenu, cart, setCart, cartItemCount, setCartItemCount}) {
    const listAmount = cart.reduce((amount, currentItem) => (amount + currentItem.transfertAmount), 0);

    function emptyCart() {
        setCart([]);
        setCartItemCount(0);
    }

    return isShownMenu ? (
        <section className='cart-layout'>
            <div className='cart-header'>
                <box-icon name='x-circle' type='solid' color='#daa520' onClick={()=>(setIsShownMenu(!isShownMenu))}></box-icon>
                <span className='title'>LISTE DE NEGOCIATION</span>
                <span className='cart-summary'>Votre liste compte actuellement {cartItemCount} Joueur(s)</span>
            </div>
            <div className='cart-items'>
                {cart.map((cartItem) => (
                    <CartItem 
                        cartItem={cartItem} 
                        cart={cart}
                        setCart={setCart}
                        cartItemCount={cartItemCount}
                        setCartItemCount={setCartItemCount}
                    />
                ))}
            </div>
            <div className='cart-validation'>
                <span className='cart-summary'>Votre liste de négociation est estimée à {listAmount} millions d'€.</span>
                <span className='action-btn' onClick={() => emptyCart()}>Vider la liste</span>
                <span 
                    className='action-btn submit' 
                    onClick={() => {
                        alert('Le bureau de recrutement du club engage immédiatemment la procédure et vous tiendra au courant !');
                        emptyCart();
                    }}
                >
                    Lancer les négociations
                </span>
            </div>
        </section>
    ) : null;

}

export default Cart;