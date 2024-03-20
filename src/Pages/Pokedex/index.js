import './Pokedex.css';
import SearchButton from '../../Components/SearchButton';
import PokemonList from '../../Components/PokemonList';
import Header from '../../Components/Header';
import Title from '../../Components/Title';
import { useState } from 'react';
import { getPokemonsByName } from "../../Components/Utils";

export default function Pokedex({ pokemonList, setPokemons, pokemonClicked }) {
    const [search, setSearch] = useState('');

    const searchClick = (value) => {
        setSearch(value);
    }

    const onPokemonClicked = (e) => {
        pokemonClicked(e);
    }

    let pokemons = (search !== "") ? getPokemonsByName(search, pokemonList) : pokemonList;

    return (
        <section className='pokedex-page'>
            <Header buttonVisibility={true} />
            <div className='pokedex'>
                <Title text="Pokédex" />
                <SearchButton buttonClick={e => searchClick(e)} />
                <PokemonList buttonText={"Capturar"} setPokemons={setPokemons} pokemonList={pokemons} pokemonClicked={e => onPokemonClicked(e)} />
            </div>
        </section>
    );
}