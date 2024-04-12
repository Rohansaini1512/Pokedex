import { useEffect } from "react";
import  axios  from "axios";
function PokemonList(){

    async function pokemonDownload(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(response.data);
    }

    useEffect(() =>{
        pokemonDownload();
    },[]);
    console.log("Hello")
    return(
        <div>
            Pokemon List
        </div>
    )
}

export default PokemonList;