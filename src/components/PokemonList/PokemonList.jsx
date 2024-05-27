import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon'
import './PokemonList.css'
import usePokemonList from '../../hooks/usePokemonList'
function PokemonList(){

    const{pokemonListState , setPokemonListState} = usePokemonList()
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