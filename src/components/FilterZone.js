import '../styles/FilterZone.css';
import playerList from '../datas/playerList';

const FilterZone = ({searchKeyWords, setSearchKeyWords, orderCriteria, setOrderCriteria}) => {
    let categories = Object.keys(playerList.at(0));
    const notAllowedCategories = ['id','nationality','position','cover','contractYear','description'];
    categories = categories.filter((category) => (!notAllowedCategories.includes(category)));

    return (
        <div className='container'>
            <div className='filter-zone'>
                <input type="text" onChange={(e) => setSearchKeyWords(e.target.value.toLowerCase())} placeholder="Entrez le nom d'un joueur" value={searchKeyWords} />
                <select value={orderCriteria} onChange={(e) => setOrderCriteria(e.target.value)}> 
                    <option value='--'> Select a category to order </option>
                    {categories.map((category) => (
                            <option value={category}> {category} </option>
                    ))} 
                </select>
            </div>
        </div>
    );
}

export default FilterZone;