import { useState } from "react";
import estilos from "./SearchBar.module.css"


function SearchBar({onSearch}){
    const [search, setSearch] = useState("");

    
  const handleSearch = () => {
    alert(`Buscando por: ${search}`);
    onSearch(search)
    setSearch("")
  };

    return(
        <div className={estilos.searchContainer}>
            <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
             <button className="search-button" onClick={handleSearch}>
                OK
            </button>
        </div>
    )
}

export default SearchBar