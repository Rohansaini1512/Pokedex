import usePokemonDetails from "../../hooks/usePokemonDetail";
import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonList from "../../hooks/usePokemonList";


function PokemonDetails({ pokemonName }){
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id , pokemonName);
    return(
        <div className="pokemon-detail-wrapper">
            <img className="pokemon-detail-image" src="{pokemon.image}" alt="" />
            <div className="pokemon-detail-name">name: <span>{pokemon.name}</span></div>
            <div className="pokemon-detail-name">Height: {pokemon.height}</div>
            <div className="pokemon-detail-name">Weight: {pokemon.weight}</div>
            <div className="pokemon-detail-types">
                {pokemon.types && pokemon.types.map((t) =><div key={t}> {t} </div>)}
            </div>
            {pokemon.types && pokemon.similarPokemon &&
            <div>
                More {pokemon.types[0]}type pokemons
                <ul>
                {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div>
}
        </div>
    );
}

export default PokemonDetails;