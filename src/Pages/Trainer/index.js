import { useEffect } from 'react';
import Header from '../../Components/Header';
import PokemonList from '../../Components/PokemonList';
import Title from '../../Components/Title';
import TrainerProfile from '../../Components/TrainerProfile';
import './Trainer.css';
import { useNavigate } from 'react-router-dom';

export default function Trainer( { trainer } ) {
    const nav = useNavigate();

     //If user is not logged redirect him to home
     useEffect( () => {
        if(!trainer.logged) {
            nav("/");
        }
    });

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
                    <PokemonList buttonText={""} pokemonClicked={e => {}} onDoubleClick={false} list={trainer.pokemons} />
                </div>
            </div>
        </section>
    );
}