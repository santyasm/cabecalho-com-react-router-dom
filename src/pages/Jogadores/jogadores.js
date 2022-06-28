import React from "react";
import { Link } from "react-router-dom";
import jogadores from "./arrayDeJogadores";

const Jogadores = () => {
  return (
    <>
      <h1>Jogadores</h1>
      <Link to="/">Voltar para Home</Link>
      <ul>
        {jogadores.map((jogador) => (
          <li key={jogador.id} style={{ margin: 12 }}>
            <Link
              to={`/jogador/:${jogador.id}`}
              state={{ idjogador: jogador.id }}
            >
              {jogador.nome}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Jogadores;
