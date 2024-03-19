import SearchButton from '../../Components/SearchButton';
import './Pokedex.css';
import PokemonList from '../../Components/PokemonList';
import { useState } from 'react';
import { getPokemonList, getPokemonsByName } from "../../Components/Utils";
import Header from '../../Components/Header';
import Title from '../../Components/Title';
import { useNavigate } from 'react-router-dom';

export default function Pokedex({ pokemonClicked }) {
    const [search, setSearch] = useState('');

    const searchClick = (value) => {
        setSearch(value);
    };

    const onPokemonClicked = (e) => {
        pokemonClicked(e);
    }

    let pokemons = (search !== "")? getPokemonsByName(search) : getPokemonList();    

    return (
        <section className='pokedex-page'>
            <Header buttonVisibility={true} />
            <div className='pokedex'>
                <Title text="Pokédex" />
                <SearchButton buttonClick={e => searchClick(e)} />
                <p className="help-text">(Para capturar um pokémon, clique duas vezes. Para ver os status, clique uma vez.)</p>
                <PokemonList buttonText={"Capturar"} list={pokemons} pokemonClicked={e => onPokemonClicked(e)} />
            </div>
        </section>
    );
}