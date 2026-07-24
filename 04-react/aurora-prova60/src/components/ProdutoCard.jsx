function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProdutoCard({ produto, onEditar, onExcluir }) {
  return (
    <div className="produto">
      <div className="top">
        <div className="thumb">{produto.title.charAt(0).toUpperCase()}</div>
        <div>
          <h4 className="nome">{produto.title}</h4>
          <div className="preco">{formatarPreco(produto.preco)}</div>
        </div>
      </div>
      <p className="desc">{produto.body}</p>
      <div className="acoes">
        <button className="chip" onClick={() => onEditar(produto)}>Editar</button>
        <button className="chip remover" onClick={() => onExcluir(produto.id)}>Excluir</button>
      </div>
    </div>
  );
}
