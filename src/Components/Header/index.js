import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ buttonVisibility }) {

    return (
        <header className="header">
            <img draggable={false} src='./images/pokemon-logo-4-1.png' alt="Logo do Pokémon" />
            {buttonVisibility ? <>
                <Link to="/pokedex"><img className="header-pokedex" draggable={false} src='./images/pokedex.png' alt="Pokedex" /></Link>
                <Link to="/trainer"><img className="header-account" draggable={false} src='./images/account.png' alt="Conta" /></Link>
            </>
                : null}
        </header>
    );
}