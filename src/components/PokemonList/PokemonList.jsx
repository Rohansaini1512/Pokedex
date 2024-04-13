import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
import  axios  from "axios";
function PokemonList(){

    const [pokemonList , setPokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    async function pokemonDownload(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonResult = response.data.results;
        const pokemonPromise = await pokemonResult.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonPromise);
        console.log(pokemonData);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{
                id : pokemon.id,
                name : pokemon.name ,
                image :(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                type : pokemon.type
            }
        })
        console.log(res);
        setPokemonList(res);
        setIsLoading(false);
    }

    useEffect(() =>{
        pokemonDownload();
    },[]);
    console.log("Hello")
    return(
        <>
        <div>
            Pokemon List
        </div>
        {(isLoading) ? 'loading ... ' : pokemonList.map((p) => <Pokemon  name={p.name} image={p.image} id={p.id}/>)}
        </>
    );
}

export default PokemonList;