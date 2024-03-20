import './Pokedex.css';
import SearchButton from '../../Components/SearchButton';
import PokemonList from '../../Components/PokemonList';
import { useEffect, useState } from 'react';
import {  getPokemonsByName } from "../../Components/Utils";
import Header from '../../Components/Header';
import Title from '../../Components/Title';
import { useNavigate } from 'react-router-dom';

export default function Pokedex({trainer, pokemonList,  setPokemons, pokemonClicked }) {
    const [search, setSearch] = useState('');
    const nav = useNavigate();

    //If user is not logged redirect him to home
    useEffect( () => {
        if(!trainer.logged) {
            nav("/");
        }
    });

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