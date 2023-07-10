import { useState } from 'react';
import '../styles/App.css'
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import PlayerList from './PlayerList';

function App() {
  const [isShownMenu, setIsShownMenu] = useState(false);

  return (
    <div className="App">
      <Banner isShownMenu={isShownMenu} setIsShownMenu={setIsShownMenu} />
      <main className='main-layout'>
        <PlayerList />
        <Cart isShownMenu={isShownMenu} setIsShownMenu={setIsShownMenu} />
      </main>
      <Footer />
    </div>
  );
}

export default App;