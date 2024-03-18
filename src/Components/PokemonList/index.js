import PokemonCard from "../PokemonCard";
import { getPokemonById } from "../Utils";
import "./PokemonList.css";

export default function PokemonList({list, pokemonClicked}) {
    const onPokemonClicked = (value) => {
        pokemonClicked(value);
    }
    return (
        <section className="pokemon-list">
            <div className="container">
                {list.map((pokemon, index) => (
                <PokemonCard id={pokemon.id} pokemonClicked={e => onPokemonClicked(e)} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>))}
            </div>
        </section>
    );
}
