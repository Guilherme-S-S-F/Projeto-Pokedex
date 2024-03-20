import "./PokemonList.css";
import PokemonCard from "../PokemonCard";

export default function PokemonList({ pokemonList, pokemonClicked, buttonText}) {
    const onPokemonClicked = (value) => {
        pokemonClicked(value);
    }

    return (
        <section className="pokemon-list">
            <div className="container">
                {pokemonList.map((pokemon, index) => (
                <PokemonCard buttonText={buttonText} key={pokemon.id} id={pokemon.id} pokemonClicked={e => onPokemonClicked(e)} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>))}
            </div>
        </section>
    );
}
