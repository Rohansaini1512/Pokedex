
import './Search.css'
function Search({updateSearchTerm}){

    

    return(
        <div className="Search-wrapper">
            <input 
                type="text" 
                placeholder="Search Pokemon ..."
                id='Search'
                onChange={(e) => updateSearchTerm(e.target.value)}
            />
            
        </div>
    )

}

export default Search;