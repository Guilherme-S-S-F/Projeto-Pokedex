import Header from '../../Components/Header';
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
            <Header buttonVisibility={false} />
            <h1>Escolha um Pokemon inicial:</h1>
            <section className='initial-choices'>
                {initialPokemons.map((pokemon) =>
                    <PokemonCard id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>
                )}
            </section>
        </div>
    )
}