import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

export default function PokemonList({list}) {
    return (
        <section className="pokemon-list">
            <div className="container">
                {list.map((pokemon, index) => (
                <PokemonCard id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>))}
            </div>
        </section>
    );
}
