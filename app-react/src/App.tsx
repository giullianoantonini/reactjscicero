import "./App.css";

function App() {
  const welcome = <h1>Bem vindo ao curso!</h1>;
  const gostando = true;
  const numero = 2;
  const cursos = ["HTML", "CSS", "JS"];

  // Continuamos daqui amanhã

  return (
    // React Fragment
    <>
      {/* Código HTML */}
      <div>
        <h1>Aula 01</h1>
        {welcome}
        <h2>Introdução ao React</h2>
        {gostando ? "Estou  curtindo" : <h3>NÃO CURTI</h3>}
        <p className={numero % 2 ? "impar" : "par"}>{numero}</p>
        {gostando && (
          <div>
            <h3>Estou curtindo muito</h3>
          </div>
        )}
        {cursos.map((curso) => {
          return <p>{curso}</p>;
        })}
      </div>
    </>
  );
}

export default App;
