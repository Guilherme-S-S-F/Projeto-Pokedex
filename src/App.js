import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<h1>Main Page</h1>}/>
        <Route path="/pokedex" element= {<h1>Pokedex</h1>}/>
        <Route path="*" element= {<h1>Não encontrado 404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
