import SearchButton from '../../Components/SearchButton';
import Banner from '../../Components/Banner';
import './Pokedex.css';
import PokemonList from '../../Components/PokemonList';

export default function Pokedex() {
    return (
        <section className='pokedex'>
            <Banner/>
            <SearchButton/>
            <PokemonList />
        </section>
    );
}