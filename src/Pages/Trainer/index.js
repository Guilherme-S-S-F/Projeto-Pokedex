import './Trainer.css';
import Header from '../../Components/Header';
import PokemonList from '../../Components/PokemonList';
import Title from '../../Components/Title';
import TrainerProfile from '../../Components/TrainerProfile';

export default function Trainer( { trainer } ) {

    return (
        <section className='trainer-page'>
            <Header buttonVisibility={true} />
            <div className='trainer-and-list'>
                <div className='trainer-page-profile'>
                    <Title text="Eu" />
                    <TrainerProfile trainer={trainer}/>
                </div>
                <div className='trainer-pokemon-list'>
                    <Title text="Meus Pokémons" />
                    <PokemonList buttonText={""} pokemonClicked={e => {}} onDoubleClick={false} pokemonList={trainer.pokemons} />
                </div>
            </div>
        </section>
    );
}