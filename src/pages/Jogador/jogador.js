import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Jogadores from "../Jogadores/arrayDeJogadores";

const Jogador = () => {
  const location = useLocation();
  const id = location.state.idjogador;
  const [jogadorAtual, setJogador] = useState("");
  useEffect(() => {
    console.log(id);

    Jogadores.map((jogador) => {
      if (jogador.id == id) {
        setJogador(jogador);
      }
    });
  });
  return (
    <>
      <h2>{jogadorAtual.nome}</h2>
    </>
  );
};

export default Jogador;
