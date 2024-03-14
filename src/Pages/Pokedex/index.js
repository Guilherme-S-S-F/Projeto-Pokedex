import SearchButton from '../../Components/SearchButton';
import Banner from '../../Components/Banner';
import './Pokedex.css';

export default function Pokedex() {
    return (
        <section className='pokedex'>
            <Banner/>
            <SearchButton/>
        </section>
    );
}