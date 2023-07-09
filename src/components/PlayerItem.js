import { useState } from 'react';
import '../styles/PlayerItem.css';
import PlayerData from './PlayerData';

const PlayerItem = ({player}) => {
    const [isCardClicked, setIsCardClicked] = useState(false);
    const [isListed, setIsListed] = useState(false); // Etat du cart sur sa présence ou non;
    const textAction = (isListed) ? 'Négociations en cours ...' : 'Lancer les négociations';

    return (
        <li className="playerItem" key={player.id} onClick={() => setIsCardClicked(!isCardClicked)}>
            
            <img src={player.cover} alt={player.description} />

            <div className="player-informations">
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

                <p className='hint' >Cliquez sur la carte pour plus d'informations</p>
                <span className='action-btn' onClick={() => setIsListed(true)}> {textAction} </span>
            </div>
        </li>
    );
}
 
export default PlayerItem;