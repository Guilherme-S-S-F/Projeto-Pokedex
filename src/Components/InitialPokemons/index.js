import './InitialPokemons.css';
import Header from '../Header';
import PokemonCard from '../PokemonCard';
import Title from '../Title';
import { useState } from 'react';
import { getPokemonById } from '../Utils';
import { Link } from 'react-router-dom';

export default function InitialPokemons({ pokemonChosen }) {
    const initialPokemons = [
        getPokemonById(7), // Squirtle
        getPokemonById(1), // Bulbasaur
        getPokemonById(4)  // Charmander
    ]

    const [chosen, setChosen] = useState(-1);

    const onPokemonClick = (value) => {
        setChosen(value);
        pokemonChosen(value);
    }

    console.log(initialPokemons);

    return (
        <div className='three-pokemons'>
            <Header buttonVisibility={false} />
            <Title text="Escolha um pokémon inicial: " />
            <section className='initial-choices'>
                {initialPokemons.map((pokemon) =>
                    <PokemonCard buttonText={"Escolher"} chosen={(chosen === pokemon.id)} key={pokemon.id}
                     pokemonClicked={e => onPokemonClick(e)} id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type} />
                )}
            </section>
            <Link to="/Trainer"><button className='button-continue' disabled={(chosen === -1)}>Continuar</button></Link>
        </div>
    )
}