import pokemons from "./pokedex.json";
import types from "./pokemonTypes.json";


export function getPokemonType(type) {
    return types.find((e) => {return e.type === type})
}

export function getPokemonList() {
    return pokemons;
}

export function getPokemonById(id) {
    return pokemons.filter((pokemon) => {
        return pokemon.id === id;
    })[0];
}

export function getPokemonsByName(name) {
    return pokemons.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(name.toLowerCase());
    });
}

