import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Pokedex from "./Pages/Pokedex";
import Trainer from "./Pages/Trainer";
import NotFound from "./Pages/NotFound";

function App() {

  const [trainer, setTrainer] = useState({
    name: '',
    gender: false
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
        <Route path="*" element= {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
