import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {

    const navigate = useNavigate();

    function goToAccount() {
        navigate('/Trainer')
    }

    function goToPokedex() {
        navigate('/pokedex')
    }

    return (
        <header className="header">
            <img draggable={false} src='./images/pokemon-logo-4-1.png' />
            <img onClick={goToPokedex} draggable={false} src='./images/pokedex.png' />
            <img onClick={goToAccount} draggable={false} src='./images/account.png' />
        </header>
    );
}