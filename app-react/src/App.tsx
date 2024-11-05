import "./App.css";

function App() {
  const welcome = <h1>Bem vindo ao curso!</h1>;
  const gostando = true;
  // Continuamos daqui amanhã

  return (
    // React Fragment
    <>
      {/* Código HTML */}
      <div>
        <h1>Aula 01</h1>
        {welcome}
        <h2>Introdução ao React</h2>
      </div>
      {gostando}
    </>
  );
}

export default App;
