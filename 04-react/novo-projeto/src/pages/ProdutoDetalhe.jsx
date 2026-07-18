// ProdutoDetalhe.jsx

import { useParams, useNavigate } from "react-router-dom";

const produtos = [
  { id: "1", nome: "Teclado Mecânico",descricao: "Switches lineares e RGB perkey."},
  { id: "2", nome: "Mouse Gamer", descricao: "Sensor de alta precisão." },
  { id: "3", nome: "Headset Gamer", descricao: "Áudio imersivo 7.1." },
  { id: "4", nome: "Cadeira Gamer", descricao: "Pistão anti-impacto e led RGB"}, 
];

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }
  return (
    <div>      
      <h1>{produto.nome}</h1> 
      <p>{produto.descricao}</p>
      <button onClick={() => navigate("/produtos")}>Voltar para a lista</button>
      <button onClick={() => navigate("/")} className="botao">Ir para o Inicio </button> 
    </div>
  );
}
