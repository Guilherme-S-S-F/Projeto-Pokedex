import SearchButton from '../../Components/SearchButton';
import Banner from '../../Components/Banner';
import './Pokedex.css';
import PokemonList from '../../Components/PokemonList';
import { useState } from 'react';

export default function Pokedex() {

    const [search, setSearch] = useState('');

    const searchClick = (value) => {
        setSearch(value);
    };

    return (
        <section className='pokedex'>
            <Banner/>
            <SearchButton buttonClick={e => searchClick(e)}/>
            <PokemonList search={search} />
        </section>
    );
}