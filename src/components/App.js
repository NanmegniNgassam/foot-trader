import { useState } from 'react';
import '../styles/App.css'
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import PlayerList from './PlayerList';
import FilterZone from './FilterZone';

function App() {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const [searchKeyWords, setSearchKeyWords] = useState('');
  const [orderCriteria, setOrderCriteria] = useState('--');
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(cart.length);

  return (
    <div className="App">
      <Banner 
        isShownMenu={isShownMenu} 
        setIsShownMenu={setIsShownMenu} 
        cartItemCount={cartItemCount}
      />
      <main className='main-layout'>
        <FilterZone 
          searchKeyWords={searchKeyWords} 
          setSearchKeyWords={setSearchKeyWords} 
          orderCriteria={orderCriteria} 
          setOrderCriteria={setOrderCriteria}
        />
        <PlayerList 
          searchKeyWords={searchKeyWords} 
          orderCriteria={orderCriteria} 
          cart={cart} 
          setCart={setCart} 
          setCartItemCount={setCartItemCount}
        />
        <Cart 
          isShownMenu={isShownMenu} 
          setIsShownMenu={setIsShownMenu} 
          cart={cart} 
          setCart={setCart} 
          cartItemCount={cartItemCount}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;