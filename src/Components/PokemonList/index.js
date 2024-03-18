import PokemonCard from "../PokemonCard";
import { getPokemonList, getPokemonsByName } from "../Utils";
import "./PokemonList.css";

export default function PokemonList({search}) {
    let pokemons = (search !== "")? getPokemonsByName(search) :getPokemonList();
    

    return (
        <section className="pokemon-list">
            <div className="container">
                {pokemons.map((pokemon, index) => (
                <PokemonCard id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>))}
            </div>
        </section>
    );
}
