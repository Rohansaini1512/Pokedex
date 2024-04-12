import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'
function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <span id='pokedex-heading'>Pokedex</span>
            <Search />
            <PokemonList />
        </div>
    );
}

export default Pokedex;