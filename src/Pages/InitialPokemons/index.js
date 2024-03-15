import PokemonCard from '../../Components/PokemonCard';
import { getPokemonById } from '../../Components/Utils';
import './InitialPokemons.css';

export default function InitialPokemons() {
    const initialPokemons = [
        getPokemonById(7), // Squirtle
        getPokemonById(1), // Bulbasaur
        getPokemonById(4)  // Charmander
    ]

    console.log(initialPokemons);

    return (
        <div className='three-pokemons'>
            <header><img src='./images/pokemon-logo-4-1.png' /></header>
            <h1>Escolha um Pokemon inicial:</h1>
            <section className='initial-choices'>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </section>
        </div>
    )
}