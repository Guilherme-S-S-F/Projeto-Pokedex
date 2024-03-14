import pokemons from "./pokedex.json";

export function pokemonList() {
    return pokemons;
}

export function getPokemonById(id) {
    return pokemons.filter((pokemon) => {
        return pokemon.id === id;
    })[0];
}

export function getPokemonsByName(name) {
    return pokemons.filter((pokemon) => {
        return pokemon.name.english.includes(name);
    });
}