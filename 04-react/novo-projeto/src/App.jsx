// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Ajuda from "./pages/Ajuda";
import Produtos from "./pages/Produtos";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import NotFound from "./pages/NotFound";
import Usuarios from "./pages/Usuarios";
import UsuarioDetalhe from "./pages/UsuarioDetalhe";

export default function App() {
  return (
    <BrowserRouter>      
      <nav>        
        <Link to="/">Início</Link> 
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link> 
        <Link to="/ajuda">Ajuda</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/Usuarios">Usuários</Link>
      </nav>

      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalhe />} />

      </Routes>
    </BrowserRouter>
  );
}
