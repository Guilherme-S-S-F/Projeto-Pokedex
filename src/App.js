import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";

function App() {

  const [trainerName, setTrainerName] = useState('');

  function setNewName(newName) {
    setTrainerName(newName)
    console.log(trainerName);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login setNewName={setNewName} trainerName={trainerName}/>}/>
        <Route path="/pokedex" element= {<h1>Pokedex</h1>}/>
        <Route path="*" element= {<h1>Não encontrado 404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
