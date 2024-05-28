import { useEffect, useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'
import PokemonDetails from '../PokemonDetails/PokemonDetails';
function Pokedex(){
    const [searchTerm , setSearchTerm] = useState('');

    // useEffect(()=>{

    // },[searchTerm])
    return(
        <div>
        <div className="pokedex-wrapper">
            
            <Search updateSearchTerm={setSearchTerm}/>
            {searchTerm}
        </div>
         {(!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
            
         </div>
    );
}

export default Pokedex;