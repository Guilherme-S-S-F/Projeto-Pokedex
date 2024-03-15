import PokemonType from "../PokemonType";
import "./PokemonCard.css"

export default function PokemonCard() {
    return (
        <div className="pokemon-card">
            <img src="./images/001.png"/>
            <div>
                <h3>Pokemon</h3>
                <PokemonType type="Grass" color="#ff2032" textColor="#fff"/>
            </div>
        </div>
    );
}