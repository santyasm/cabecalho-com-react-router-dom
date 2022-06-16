import React from "react";
import { Link } from "react-router-dom";

const Jogadores = () => {
  const jogadores = [
    { id: 1, nome: "Jogador 1" },
    { id: 2, nome: "Jogador 2" },
    { id: 3, nome: "Jogador 3" },
    { id: 4, nome: "Jogador 4" },
    { id: 5, nome: "Jogador 5" },
    { id: 6, nome: "Jogador 6" },
    { id: 7, nome: "Jogador 7" },
    { id: 8, nome: "Jogador 8" },
    { id: 9, nome: "Jogador 9" },
    { id: 10, nome: "Jogador 10" },
    { id: 11, nome: "Jogador 11" },
    { id: 12, nome: "Jogador 12" },
    { id: 13, nome: "Jogador 13" },
    { id: 14, nome: "Jogador 14" },
    { id: 15, nome: "Jogador 15" },
  ];
  return (
    <>
      <h1>Jogadores</h1>
      <Link to="/">Voltar para Home</Link>
      <ul>
        {jogadores.map((jogador) => (
          <li key={jogador.id} style={{ margin: 12 }}>
            {jogador.nome}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Jogadores;
