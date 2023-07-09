import '../styles/PlayerData.css'

const PlayerData = ({player, isCardClicked, setIsCardClicked}) => {
    return (!isCardClicked) ? (
        <div className='data-first-face'>
            <p>
                <span>{player.age} ans</span>
                <span>{player.currentClub}</span>
                <span> <img src={player.nationality} alt={player.description} /></span>
            </p>
            <p>
                <span>{player.position.join(' ')}</span>
                <span>{player.transfertAmount} M€</span>
            </p>
        </div>
    ) : (
        <div className='data-first-face data-second-face'>
            <p>
                <span>Taille : {player.height} cm</span>
                <span>Poids : {player.weight} kg</span>
            </p>
            <p>
                <span>Pied fort : {(player.strongFoot === 'R') ? 'Droit' : 'Gauche'}</span>
                <span
                    style={(player.speed >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}
                >
                    Vitesse : {player.speed} 
                </span>
            </p>
            <p>
                <span
                    style={(player.precision >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}
                >
                    Précision : {player.precision} 
                </span>
                <span
                    style={(player.pass >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}
                >
                    Passe : {player.pass} 
                </span>
            </p>
        </div>
    );
}
 
export default PlayerData;