import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'
function Pokedex(){
    return(
        <div>
        <div className="pokedex-wrapper">
            
            <Search />
        </div>
         <PokemonList />
            
         </div>
    );
}

export default Pokedex;