import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'
function Pokedex(){
    return(
        <div>
        <div className="pokedex-wrapper">
            <span id='pokedex-heading'>Pokedex</span>
            <Search />
        </div>
         <PokemonList />
            <div className='control'>
                <button>prev</button>
                <button>next</button>
            </div>
         </div>
    );
}

export default Pokedex;