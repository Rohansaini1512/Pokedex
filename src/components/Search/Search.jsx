import './Search.css'
import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}){
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))

    return(
        <div className="Search-wrapper">
        <input
        id="pokemon-name-search"
            type="text"
            placeholder="Pokemon name.."
            onchange={debouncedCallback}
            />
        </div>
    );
}

export default Search;