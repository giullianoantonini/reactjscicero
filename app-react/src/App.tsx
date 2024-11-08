import { useEffect, useState } from "react";
import "./App.scss";
import Titulo from "./Components/Título";
import Botao from "./Components/Botao";
import Placeholder from "./Components/Placeholder";

const App = () => {
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (numero !== 0) {
      console.log("Entrou no effect do número");
    }
  }, [numero]);

  useEffect(() => {
    if (nome !== "") {
      console.log("Entrou no effect do nome");
    }
  }, [nome]);

  return (
    <>
      <p>Você está logado como {nome}</p>
      <h1>{numero}</h1>
      <Titulo
        nome="ReactJS"
        data={new Date(2024, 11, 5)}
        descricao={`Curso introdutório ${numero}`}
      />
      <Placeholder>Eu sou o conteúdo children</Placeholder>
      <h1>Aula 03</h1>
      <h4>Bem vindo, {nome}</h4>
      <Botao
        label="-1"
        severity="primary"
        onClick={() => {
          setNumero(numero - 1);
        }}
      />
      <Botao
        label="+1"
        severity="warning"
        onClick={() => {
          setNumero(numero + 1);
        }}
      />
      <Botao
        label="Giulliano"
        severity="danger"
        onClick={() => setNome("Giulliano")}
      />
      <Botao label="Clique a" severity="secondary" />
    </>
  );
};

export default App;
