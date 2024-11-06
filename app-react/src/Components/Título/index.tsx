interface TituloProps {
  nome: string;
  data: Date;
  descricao?: string;
  children?: React.ReactNode;
}

const Titulo = ({ nome, data, descricao, children }: TituloProps) => {
  return (
    <>
      <h1>Curso de {nome}</h1>
      <h2>{data.toLocaleDateString()}</h2>
      {descricao}
      {children}
    </>
  );
};
export default Titulo;
