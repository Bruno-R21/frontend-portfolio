import { Link } from "react-router-dom";
import Styles from "./Produtos.module.css";

const produtos = [
  { id: "1", nome: "Teclado Mecãnico", descricao: "Switches lineares e RGB per-key."},
  { id: "2", nome: "Mouse Gamer", descricao: "Sensor de alta precisão."},
  { id: "3", nome: "Headset Gamer", descricao: "Audio imersivo 7.1."},
  { id: "4", nome: "Cadeira Gamer", descricao: "Pistão anti-impacto e led RGB"},
];

export default function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
        <li Key={produto.id} className={Styles.item}>
          <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

