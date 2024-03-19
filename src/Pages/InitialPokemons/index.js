import Header from '../../Components/Header';
import PokemonCard from '../../Components/PokemonCard';
import Title from '../../Components/Title';
import { getPokemonById } from '../../Components/Utils';
import './InitialPokemons.css';

export default function InitialPokemons() {
    const initialPokemons = [
        getPokemonById(7), // Squirtle
        getPokemonById(1), // Bulbasaur
        getPokemonById(4)  // Charmander
    ]

    return (
        <div className='three-pokemons'>
            <Header buttonVisibility={false} />
            <Title text="Escolha um Pokemon inicial:" />
            <section className='initial-choices'>
                {initialPokemons.map((pokemon) =>
                    <PokemonCard key={pokemon.id} id={pokemon.id} base={pokemon.base} name={pokemon.name.english} types={pokemon.type}/>
                )}
            </section>
        </div>
    )
}