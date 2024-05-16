import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Automoveis, Hero } from "./components"
import Descricao from "./pages/Descricao";
import Editar from "./pages/Editar";
import Cadastrar from "./pages/Cadastrar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<Automoveis />} />
          <Route path="/cadastrar" element={<Cadastrar />} /> 
          <Route path="/descricao/:id" element={<Descricao />} />
          <Route path="/editar/:id" element={<Editar />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
