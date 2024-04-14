import './Pokemon.css'
function Pokemon({name , image}){
    return(
        <div className="pokemon">
            <div>{name}</div>
            <div className='pokemon-img'><img src={image} /></div>
            
        </div>
    );
}

export default Pokemon;