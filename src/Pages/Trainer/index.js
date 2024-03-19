import Header from '../../Components/Header';
import PokemonList from '../../Components/PokemonList';
import TrainerProfile from '../../Components/TrainerProfile';
import { getPokemonList } from '../../Components/Utils';
import './Trainer.css';

export default function Trainer( { goToPokedex, trainer } ) {

    return (
        <section className='trainer-page'>
            <Header buttonVisibility={true} />
            <div className='trainer-and-list'>
                <div className='trainer-page-profile'>
                    <h2>Eu</h2>
                    <TrainerProfile trainer={trainer}/>
                </div>
                <div className='trainer-pokemon-list'>
                    <h1>Meus Pokémons</h1>
                    <PokemonList list={trainer.pokemons} />
                </div>
            </div>
        </section>
    );
}