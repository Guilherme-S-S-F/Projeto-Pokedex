import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

export default function PokemonList() {
    return (
        <section className="pokemon-list">
            <div className="container">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        </section>
    );
}
