import { useState } from 'react';
import '../styles/PlayerItem.css';
import PlayerData from './PlayerData';

const PlayerItem = ({player, cart, setCart, setCartItemCount}) => {
    const [isCardClicked, setIsCardClicked] = useState(false);
    const [isListed, setIsListed] = useState(false); // Etat du cart sur sa présence ou non;
    const textAction = (isListed) ? 'Négociations en cours ...' : 'Lancer les négociations';

    function addToCart() {
        const currentPlayer = cart.find((cartItem) => cartItem.id === player.id);
        if(currentPlayer === undefined) {
            cart.push(
                {
                    id : player.id,
                    name: player.name, 
                    cover: player.cover, 
                    grade: player.grade, 
                    transfertAmount: player.transfertAmount, 
                    description: player.description
                }
            );
            setCart(cart);
        }
        setCartItemCount(cart.length);
    }

    return (
        <li className="playerItem" key={player.id} >
            
            <img src={player.cover} alt={player.description} />

            <div className="player-informations" >
                <p>
                    <span className='player-name title'>{player.name}</span>
                    <span 
                        className='player-grade title' 
                        style={(player.grade >= 90) ? {color : 'goldenrod'} : {color : '#00c900'}}
                    > 
                        {player.grade} 
                    </span>
                </p>

                <PlayerData player={player} isCardClicked={isCardClicked} setIsCardClicked={setIsCardClicked} />

                <p className='hint' onClick={() => setIsCardClicked(!isCardClicked)}>Cliquez ici pour plus d'informations</p>
                <span className='action-btn' onClick={() => addToCart()}> Lancer les négociations </span>
            </div>
        </li>
    );
}
 
export default PlayerItem;