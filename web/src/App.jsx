import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Automoveis, Hero } from "./components"
import Descricao from "./pages/Descricao";
import Editar from "./pages/Editar";
import Cadastrar from "./pages/Cadastrar";
import DenseAppBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <DenseAppBar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cadastrar" element={<Cadastrar />} /> 
          <Route path="/lista" element={<Automoveis />} /> 
          <Route path="/descricao/:id" element={<Descricao />} />
          <Route path="/editar/:id" element={<Editar />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
