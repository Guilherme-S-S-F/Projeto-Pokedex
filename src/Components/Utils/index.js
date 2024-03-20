import pokemons from "./pokedex.json";
import types from "./pokemonTypes.json";

const domain = "http://localhost:3000/";

export function getDomain() {
    return domain;
}

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

export function getPokemonsByName(name, pokemonList) {
    return pokemonList.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(name.toLowerCase());
    });
}
