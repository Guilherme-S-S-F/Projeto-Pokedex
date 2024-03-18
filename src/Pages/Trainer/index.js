import Header from '../../Components/Header';
import PokemonList from '../../Components/PokemonList';
import TrainerProfile from '../../Components/TrainerProfile';
import { getPokemonList, getPokemonsByName } from '../../Components/Utils';
import './Trainer.css';

export default function Trainer( { trainer } ) {

    let pokemons = getPokemonList();

    return (
        <section className='trainer-page'>
            <Header />
            <div className='trainer-and-list'>
                <div className='trainer-page-profile'>
                    <h2>Eu</h2>
                    <TrainerProfile trainer={trainer}/>
                </div>
                <div className='trainer-pokemon-list'>
                    <h1>Meus Pokémons</h1>
                    <PokemonList list={pokemons} />
                </div>
            </div>
        </section>
    );
}