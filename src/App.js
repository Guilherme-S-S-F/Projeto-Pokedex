import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Pokedex from "./Pages/Pokedex";
import Trainer from "./Pages/Trainer";

function App() {

  const [trainer, setTrainer] = useState({
    name: '',
    gender: ''
  });

  function setNewTrainer(name, gender) {
    setTrainer({
      name: name.trimStart(),
      gender
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login setNewTrainer={setNewTrainer} trainer={trainer} />}/>
        <Route path="/pokedex" element= {<Pokedex />}/>
        <Route path="/Trainer" element= {<Trainer trainer={trainer}/>}/>
        <Route path="*" element= {<h1>Não encontrado 404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
