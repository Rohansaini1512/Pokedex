import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PokemonDetails(){
    const { id } = useParams(); // Destructuring to get the id parameter
    const [pokemon , setPokemon] = useState({});

    async function  pokemonDownload(){
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default, // Accessing the correct path for the image
                height: response.data.height,
                weight: response.data.weight,
                types: response.data.types.map((t) => t.type.name) // Correcting the key name to match the state
            });
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
    }

    useEffect(()=>{
        pokemonDownload();
    }, [id]); // Adding id to dependency array so the effect re-runs when the id changes

    return(
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">Name: {pokemon.name}</div>
            <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} /> {/* Adding alt attribute */}
            <div className="pokemon-height">Height: {pokemon.height}</div>
            <div className="pokemon-weight">Weight: {pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((type) => <div key={type}>{type}</div>)}
            </div>
        </div>
    );
}

export default PokemonDetails;
