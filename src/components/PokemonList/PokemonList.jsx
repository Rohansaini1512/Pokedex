import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
import './PokemonList.css'
import  axios  from "axios";
function PokemonList(){

    const [pokemonList , setPokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    async function pokemonDownload(){
        // this downloads list of 20 pokemons
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

        // we get the array of pokemons from results
        const pokemonResult = response.data.results;

        // iterating over the array of pokemons and u8sing their url , to create an array of promises 
        // that will download those 20 pokemons
        const pokemonPromise = await pokemonResult.map((pokemon) => axios.get(pokemon.url));

        // passing that promisearray to axios.all
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
        <div className="pokemon-wrapper">
        {(isLoading) ? 'loading ... ' : pokemonList.map((p) => <Pokemon  name={p.name} image={p.image} id={p.id}/>)}
        </div>
        
        </>
    );
}

export default PokemonList;