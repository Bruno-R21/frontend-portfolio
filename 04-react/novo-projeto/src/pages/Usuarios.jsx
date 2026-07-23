import { useState, useEffect } from "react"; // importando duas funções - useState (renderização) - useEffect (controla para rodar uma única vez)
import { Link } from "react-router-dom";

export default function Usuarios() {
  // Exportando a função para ser usado em outros arquivos
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Abrindo o método
    async function buscarUsuarios() {
      try {
        // Bloco de tentativa
        const resposta = await fetch(
          // await fica aguardando a resposta retornar e o código continua funcionando
          "https://jsonplaceholder.typicode.com/users"
        );
        const dados = await resposta.json(); //
        setUsuarios(dados);
      } catch (e) {
        setErro("Não foi possível carregar os usuários.");
      } finally {
        setCarregando(false);
      }
    }
    buscarUsuarios();
  }, []);
  if (carregando) {
    return <p>Carregando...</p>;
  }
  if (erro) {
    return <p>{erro}</p>;
  }
  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <Link to={`/usuarios/${usuario.id}`}>{usuario.name}</Link>
          </li>
        ))}
      </ul>
      "
    </div>
  );
}
