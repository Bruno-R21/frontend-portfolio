import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UsuarioDetalhe() {

  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarUsuario() {

      const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const dados = await resposta.json();
      
      setUsuario(dados);
      setCarregando(false);
    }
    buscarUsuario();
  }, [id]);

  if (carregando) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h1>{usuario.name}</h1>
      <p>{usuario.email}</p>
    </div>
  );
}
