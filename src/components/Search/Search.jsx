
import useDebounce from '../../hooks/useDebounce';
import './Search.css'
function Search({updateSearchTerm}){

    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))

    return(
        <div className="Search-wrapper">
            <input 
                type="text" 
                placeholder="Search Pokemon ..."
                id='Search'
                onChange={debouncedCallback}
            />
            
        </div>
    )

}

export default Search;