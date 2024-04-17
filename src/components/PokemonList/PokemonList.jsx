import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
import './PokemonList.css'
import  axios  from "axios";
function PokemonList(){

    const [pokemonList , setPokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    async function pokemonDownload(){
        setIsLoading(true);
        // this downloads list of 20 pokemons
        const response = await axios.get(pokedexUrl)

        // we get the array of pokemons from results
        const pokemonResult = response.data.results;
        console.log(response.data);
        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next)

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
    },[pokedexUrl]);
    console.log("Hello")
    return(
        <>
        <div className="pokemon-wrapper">
        {(isLoading) ? 'loading ... ' : pokemonList.map((p) => <Pokemon  name={p.name} image={p.image} id={p.id}/>)}
        </div>
        <div className='control'>
                <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>prev</button>
                <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>next</button>
        </div>
        </>
    );
}

export default PokemonList;