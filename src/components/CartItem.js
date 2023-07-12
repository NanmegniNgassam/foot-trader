import '../styles/CartItem.css'

const CartItem = ({cartItem, cart, setCart, cartItemCount, setCartItemCount}) => {

    function removeItem() {
        const remainingItems = cart.filter((item) => (item.id !== cartItem.id));
        setCart(remainingItems);
        setCartItemCount(cartItemCount - 1);
    }

    return (
        <div className='cart-item'>
            <div className="img-container">
                <img src={cartItem.cover} alt={cartItem.description}  />
            </div>
            <div style={{color: 'black'}} className="text-content">
                <p className="title" >{cartItem.name}</p>
                <p>
                    <span 
                        style={(cartItem.grade >= 90) ? {color : 'goldenrod'} : {color : '#00c900'}}
                        className='grade'
                    > 
                        {cartItem.grade}
                    </span>
                    {' _ '}
                    <span> {cartItem.transfertAmount} M€ </span>
                </p>
            </div>

            <box-icon name='x-circle' type='solid' color='crimson' onClick={() => removeItem()} ></box-icon>
        </div>
    );
}
 
export default CartItem;