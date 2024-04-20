import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
import './PokemonList.css'
import  axios  from "axios";
function PokemonList(){

    // const [pokemonList , setPokemonList] = useState([]);
    // const [isLoading , setIsLoading] = useState(true);

    // const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    // const [nextUrl, setNextUrl] = useState('');
    // const [prevUrl, setPrevUrl] = useState('');

    const [pokemonListState , setPokemonListState] = useState({
        pokemonList: [],
        isLoading : true,
        pokedexUrl : 'https://pokeapi.co/api/v2/pokemon',
        nextUrl : '',
        prevUrl : ''
    });

    async function pokemonDownload(){
        // setIsLoading(true);
        setPokemonListState((state)=>({...state, isLoading : true}))
        // this downloads list of 20 pokemons
        const response = await axios.get(pokemonListState.pokedexUrl)

        // we get the array of pokemons from results
        const pokemonResult = response.data.results;
        console.log(response.data);
        // setPrevUrl(response.data.previous);
        console.log("Rohan");
        setPokemonListState((state)=>({
            ...state , 
            prevUrl:response.data.previous , 
            nextUrl:response.data.next
        }))
        // setNextUrl(response.data.next)

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
        // setPokemonList(res);
        setPokemonListState((state)=>({
            ...state, 
            pokemonList:res , 
            isLoading:false
        }))
        // setIsLoading(false);
    }

    useEffect(() =>{
        pokemonDownload();
    },[pokemonListState.pokedexUrl]);
    console.log("Hello")
    return(
        <>
        <div className="pokemon-wrapper">
        {(pokemonListState.isLoading) ? 'loading ... ' : pokemonListState.pokemonList.map((p) => <Pokemon  name={p.name} image={p.image} id={p.id}/>)}
        </div>
        <div className='control'>
                <button disabled={pokemonListState.prevUrl == null} onClick={() => setPokemonListState({...pokemonListState , pokedexUrl:pokemonListState.prevUrl})}>prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => setPokemonListState({...pokemonListState , pokedexUrl:pokemonListState.nextUrl})}>next</button>
        </div>
        </>
    );
}

export default PokemonList;