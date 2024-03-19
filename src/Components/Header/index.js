import { Link } from "react-router-dom";
import "./Header.css";

export default function Header( { buttonVisibility } ) {

    return (
        <header className="header">
            <img draggable={false} src='./images/pokemon-logo-4-1.png' />
            {buttonVisibility ? <>
                <Link to="/pokedex"><img className="header-pokedex" draggable={false} src='./images/pokedex.png' /></Link>
                <Link to="/Trainer"><img className="header-account" draggable={false} src='./images/account.png' /></Link>
            </>
            : null}
        </header>
    );
}