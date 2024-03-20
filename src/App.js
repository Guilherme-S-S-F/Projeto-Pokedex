import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Pokedex from "./Pages/Pokedex";
import Trainer from "./Pages/Trainer";
import NotFound from "./Pages/NotFound";
import { getPokemonById } from "./Components/Utils";
import CapturingPokemon from "./Pages/CapturingPokemon";

function App() {
  const [trainer, setTrainer] = useState({
    name: '',
    gender: false,
    pokemons: [],
    logged: false
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
      pokemons: [],
      logged: true
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login pokemonChosen={e => onPokemonChoosed(e)} setNewTrainer={setNewTrainer} trainer={trainer} />}/>
        <Route path="/pokedex" element= {<Pokedex trainer={trainer} pokemonClicked={e => onPokemonClicked(e)} />}/>
        <Route path="/Trainer" element= {<Trainer trainer={trainer}/>}/>
        <Route path="/Capturing" element={<CapturingPokemon />}/>
        <Route path="*" element= {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
