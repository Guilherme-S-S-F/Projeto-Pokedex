import SearchButton from '../../Components/SearchButton';
import Banner from '../../Components/Banner';
import './Pokedex.css';
import PokemonList from '../../Components/PokemonList';
import { useState } from 'react';
import { getPokemonList, getPokemonsByName } from "../../Components/Utils";

export default function Pokedex({pokemonClicked}) {

    const [search, setSearch] = useState('');

    const searchClick = (value) => {
        setSearch(value);
    };

    const onPokemonClicked = (e) => {
        pokemonClicked(e);
    }

    let pokemons = (search !== "")? getPokemonsByName(search) : getPokemonList();    

    return (
        <section className='pokedex'>
            <Banner/>
            <SearchButton buttonClick={e => searchClick(e)}/>
            <PokemonList list={pokemons} pokemonClicked={e => onPokemonClicked(e)} />
        </section>
    );
}