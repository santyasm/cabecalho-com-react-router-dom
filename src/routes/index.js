import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "../pages/Home/home";
import Diretores from "../pages/Diretores/diretores";
import Login from "../pages/Login/login";
import Registrar from "../pages/Registrar/registrar";
import Jogadores from "../pages/Jogadores/jogadores";
import Jogador from "../pages/Jogador/jogador";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diretores" element={<Diretores />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Jogadores" element={<Jogadores />} />
        <Route path="/Jogador/:id" element={<Jogador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
