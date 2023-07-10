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
                <span>
                    Vitesse : <strong style={(player.speed >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}>{player.speed}</strong> 
                </span>
            </p>
            <p>
                <span>
                    Précision : <strong style={(player.precision >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}>{player.precision}</strong> 
                </span>
                <span>
                    Passe : <strong style={(player.pass >= 90) ? {color : 'goldenrod'}: {color : '#00c900'}}>{player.pass}</strong> 
                </span>
            </p>
        </div>
    );
}
 
export default PlayerData;