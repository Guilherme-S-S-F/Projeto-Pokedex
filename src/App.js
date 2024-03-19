import { BrowserRouter, Route, Routes, redirect, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Pokedex from "./Pages/Pokedex";
import Trainer from "./Pages/Trainer";
import NotFound from "./Pages/NotFound";
import { getDomain, getPokemonById } from "./Components/Utils";

function App() {

  const [trainer, setTrainer] = useState({
    name: '',
    gender: false,
    pokemons: []
  });

  const onPokemonClicked = (value) => {
    trainer.pokemons.push(getPokemonById(value));
    setTrainer(trainer);
    console.log(trainer.pokemons);
  }

  const onPokemonChoosed = (value) => {
    trainer.pokemons = [];
    trainer.pokemons.push(getPokemonById(value));
    setTrainer(trainer);
  }

  function setNewTrainer(name, gender) {
    setTrainer({
      name: name.trimStart(),
      gender:gender,
      pokemons: []
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login pokemonChosen={e => onPokemonChoosed(e)} setNewTrainer={setNewTrainer} trainer={trainer} />}/>
        <Route path="/pokedex" element= {<Pokedex pokemonClicked={e => onPokemonClicked(e)} />}/>
        <Route path="/Trainer" element= {<Trainer trainer={trainer}/>}/>
        <Route path="*" element= {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
