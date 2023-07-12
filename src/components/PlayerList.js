import playerList from '../datas/playerList';
import '../styles/PlayerList.css'
import PlayerItem from './PlayerItem';

function PlayerList({searchKeyWords, orderCriteria, cart, setCart, setCartItemCount}) {
    let playerSelected = playerList.filter((player) => ((player.name.toLowerCase()).includes(searchKeyWords)));
    function compareCriteria(itemA, itemB) {
        if(typeof(playerList.at(0)[orderCriteria]) === 'string') {
            const nameA = itemA[orderCriteria].toLowerCase();
            const nameB = itemB[orderCriteria].toLowerCase();

            if(nameA > nameB) { return (1) } else { return (-1)}
        } else {
            return (-(itemA[orderCriteria] - itemB[orderCriteria]));
        }
    }
    playerSelected = playerSelected.sort(compareCriteria);

    return (playerSelected.length > 0) ? (
        <section className='list-layout'>
            <ul className="shopping-list">
                {playerSelected.map((player) => (
                    <PlayerItem 
                        player={player} 
                        cart={cart} 
                        setCart={setCart} 
                        setCartItemCount={setCartItemCount}
                    />
                ))}
            </ul>
        </section>
    ) : (
        <section className='list-layout'>
            <p className="title no-found">Aucun joueur ne correspond à vos critères</p>
        </section> 
    );
}

export default PlayerList;