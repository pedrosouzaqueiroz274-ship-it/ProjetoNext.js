type TituloProps = {
  texto: string;
};

export default function Titulo({ texto }: TituloProps) {
  return <h1>{texto}</h1>;
}