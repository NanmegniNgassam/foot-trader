import playerList from '../datas/playerList';
import '../styles/PlayerList.css'
import PlayerItem from './PlayerItem';

function PlayerList() {

    return (
        <section className='list-layout'>
            <ul className="shopping-list">
                {playerList.map((player) => (
                    <PlayerItem player={player}/>
                ))}
            </ul>
        </section>
    );
}

export default PlayerList;