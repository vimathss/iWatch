import estilo from "./Header.module.css";
import logo from '../assets/iWatch - LogoText Branco.png'
import SearchBar from "./SearchBar";

function Header({onSearch}){
    return(
        <header className={estilo.barraHeader}>
        <div className={estilo.conteudoHeader}>
            <div className={estilo.imgLogo}>
                <img src={logo} />
            </div>
            <div className={estilo.searchContainer}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    </header>
    )    
}

export default Header;
