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

  return (
    <div className="App">
      <Banner isShownMenu={isShownMenu} setIsShownMenu={setIsShownMenu} />
      <main className='main-layout'>
        <FilterZone searchKeyWords={searchKeyWords} setSearchKeyWords={setSearchKeyWords} orderCriteria={orderCriteria} setOrderCriteria={setOrderCriteria}/>
        <PlayerList searchKeyWords={searchKeyWords} orderCriteria={orderCriteria} />
        <Cart isShownMenu={isShownMenu} setIsShownMenu={setIsShownMenu} />
      </main>
      <Footer />
    </div>
  );
}

export default App;