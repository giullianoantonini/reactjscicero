import "./App.css";
import Titulo from "./Components/Título";

const App = () => {
  return (
    <>
      <Titulo
        nome="ReactJS"
        data={new Date(2024, 11, 5)}
        descricao="curso introdutório"
      />
      <Titulo
        nome="NodeJS"
        data={new Date(2024, 10, 25)}
        descricao="curso introdutório"
      />
      <Titulo
        nome="NodeJS"
        data={new Date(2024, 10, 25)}
        descricao="curso introdutório"
      >
        <hr />
        <p>Eu sou o conteúdo children</p>
        <hr />
      </Titulo>
    </>
  );
};

export default App;
