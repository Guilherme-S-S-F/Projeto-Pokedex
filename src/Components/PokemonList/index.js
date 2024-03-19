import { useState } from "react";
import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

export default function PokemonList({list, pokemonClicked, onDoubleClick}) {
    const onPokemonClicked = (value) => {
        pokemonClicked(value);
    }

    return (
        <section className="pokemon-list">
            <div className="container">
                {list.map((pokemon, index) => (
                <PokemonCard onDoubleClick={onDoubleClick} key={pokemon.id} id={pokemon.id} pokemonClicked={e => onPokemonClicked(e)} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>))}
            </div>
        </section>
    );
}
