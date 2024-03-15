import PokemonType from "../PokemonType";
import "./PokemonCard.css"

export default function PokemonCard() {
    return (
        <div className="pokemon-card">
            <img src="./images/001.png"/>
            <div>
                <h3>Pokemon</h3>
                <div className="types">
                    <PokemonType type="Grass" color="#0d892e" textColor="#fff"/>
                    <PokemonType type="Fire" color="#ff2032" textColor="#fff"/>
                </div>
            </div>
        </div>
    );
}