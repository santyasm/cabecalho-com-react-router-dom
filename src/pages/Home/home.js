import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/Diretores">Diretores</Link>
        </li>

        <li>
          <Link to="/Jogadores">Jogadores</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>

        <li>
          <Link to="/Registrar">Registrar</Link>
        </li>
      </ul>
    </>
  );
}
export default Home;
