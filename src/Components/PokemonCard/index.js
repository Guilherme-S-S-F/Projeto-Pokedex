import PokemonType from "../PokemonType";
import "./PokemonCard.css"

export default function PokemonCard() {
    return (
        <div className="pokemon-card">
            <img src="./images/001.png"/>
            <div>
                <div className="basic-info">
                    <h3>Pokemon</h3>
                    <div className="types">
                        <PokemonType type="Grass" color="#0d892e" textColor="#fff"/>
                        <PokemonType type="Fire" color="#ff2032" textColor="#fff"/>                    
                    </div>
                </div>
                <div className="info">
                    <p>Attack 40.0</p>
                    <p>Defense 100.0</p>
                    <p>Speed 20.0</p>
                </div>
            </div>
        </div>
    );
}