import SearchButton from '../../Components/SearchButton';
import Banner from '../../Components/Banner';
import './Pokedex.css';
import PokemonList from '../../Components/PokemonList';
import { useState } from 'react';
import { getPokemonList, getPokemonsByName } from "../../Components/Utils";

export default function Pokedex() {

    const [search, setSearch] = useState('');

    const searchClick = (value) => {
        setSearch(value);
    };

    let pokemons = (search !== "")? getPokemonsByName(search) : getPokemonList();    

    return (
        <section className='pokedex'>
            <Banner/>
            <SearchButton buttonClick={e => searchClick(e)}/>
            <PokemonList list={pokemons} />
        </section>
    );
}