interface TituloProps {
  nome?: string;
  children?: React.ReactNode;
}

const Titulo = ({ nome }: TituloProps) => {
  if (!nome) {
    return (
      <>
        <h1>Nenhum curso selecionado...</h1>
      </>
    );
  }
  return (
    <>
      <h1>Curso selecionado: {nome}</h1>
    </>
  );
};
export default Titulo;
