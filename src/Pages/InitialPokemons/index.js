import { useState } from 'react';
import Header from '../../Components/Header';
import PokemonCard from '../../Components/PokemonCard';
import Title from '../../Components/Title';
import { getPokemonById } from '../../Components/Utils';
import './InitialPokemons.css';
import { Link } from 'react-router-dom';

export default function InitialPokemons({pokemonChosen}) {
    const initialPokemons = [
        getPokemonById(7), // Squirtle
        getPokemonById(1), // Bulbasaur
        getPokemonById(4)  // Charmander
    ]

    console.log(initialPokemons);

    return (
        <div className='three-pokemons'>
            <Header buttonVisibility={false} />
            <Title text="Escolha um Pokemon inicial:" />
            <section className='initial-choices'>
                {initialPokemons.map((pokemon) =>
                    <PokemonCard chosen={(chosen === pokemon.id)} pokemonClicked={e => onPokemonClick(e)} key={pokemon.id} id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>
                )}
            </section>
            <Link to="/Trainer"><button className='button-continue' disabled={(chosen === -1)}>Continuar</button></Link>
        </div>
    )
}