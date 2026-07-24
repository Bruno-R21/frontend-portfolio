import { useState, useEffect } from "react";

export default function ProdutoForm({ produtoEmEdicao, onCriar, onAtualizar, onCancelar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const editando = produtoEmEdicao !== null;

  useEffect(() => {
    if (produtoEmEdicao) {
      setNome(produtoEmEdicao.title);
      setPreco(produtoEmEdicao.preco);
      setDescricao(produtoEmEdicao.body);
    } else {
      setNome("");
      setPreco("");
      setDescricao("");
    }
  }, [produtoEmEdicao]);

  function handleSalvar() {
    if (nome.trim() === "") {
      alert("Digite o nome do produto.");
      return;
    }
    const dados = { title: nome, body: descricao, preco: Number(preco) };
    if (editando) {
      onAtualizar(produtoEmEdicao.id, dados);
    } else {
      onCriar(dados);
    }
    setNome("");
    setPreco("");
    setDescricao("");
  }

  return (
    <div className="form-card">
      <h2>{editando ? "Editar produto" : "Novo produto"}</h2>

      <div className="grid-2">
        <div className="field">
          <label>Nome do produto</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex.: Fone de ouvido sem fio" />
        </div>
        <div className="field">
          <label>Preço (R$)</label>
          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="0,00" />
        </div>
      </div>

      <div className="field">
        <label>Descrição</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Detalhes do produto..." />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSalvar}>
          {editando ? "Salvar alterações" : "Cadastrar produto"}
        </button>
        {editando && <button className="btn btn-ghost" onClick={onCancelar}>Cancelar</button>}
      </div>
    </div>
  );
}
