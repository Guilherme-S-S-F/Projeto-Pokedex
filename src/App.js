import Login from "./Pages/Login";
import Pokedex from "./Pages/Pokedex";
import Trainer from "./Pages/Trainer";
import NotFound from "./Pages/NotFound";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPokemonById, getPokemonList } from "./Components/Utils";

function App() {
  const [allPokemons, setPokemons] = useState(getPokemonList());

  const [trainer, setTrainer] = useState({
    name: '',
    gender: false,
    pokemons: []
  });

  const onPokemonClicked = (value) => {
    trainer.pokemons.push(getPokemonById(value));
    setTrainer(trainer)
    setPokemons(allPokemons.filter((pokemon) => {
      return pokemon.id === value ? null : pokemon;
    }));
  }

  const onPokemonChoosed = (value) => {
    trainer.pokemons = [];
    trainer.pokemons.push(getPokemonById(value));
    setTrainer(trainer);
  }

  function setNewTrainer(name, gender) {
    setTrainer({
      name: name.trimStart(),
      gender: gender,
      pokemons: []
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login pokemonChosen={e => onPokemonChoosed(e)} setNewTrainer={setNewTrainer} trainer={trainer} />} />
        <Route path="/pokedex" element={<Pokedex pokemonList={allPokemons} pokemonClicked={e => onPokemonClicked(e)} />} />
        <Route path="/trainer" element={<Trainer trainer={trainer} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
