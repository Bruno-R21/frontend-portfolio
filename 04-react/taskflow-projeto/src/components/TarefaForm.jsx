import { useState, useEffect } from "react";

export default function TarefaForm({ tarefaEmEdicao, onCriar, onAtualizar, onCancelar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const editando = tarefaEmEdicao !== null;

  // Quando o usuário clica em "Editar" numa tarefa, preenchemos o formulário com ela.
  useEffect(() => {
    if (tarefaEmEdicao) {
      setTitulo(tarefaEmEdicao.title);
      setDescricao(tarefaEmEdicao.body);
    } else {
      setTitulo("");
      setDescricao("");
    }
  }, [tarefaEmEdicao]);

  function handleSalvar() {
    if (titulo.trim() === "") {
      alert("Digite um título para a tarefa.");
      return;
    }
    if (editando) {
      onAtualizar(tarefaEmEdicao.id, { title: titulo, body: descricao });
    } else {
      onCriar({ title: titulo, body: descricao });
    }
    setTitulo("");
    setDescricao("");
  }

  return (
    <div className="card-form">
      <h2>{editando ? "Editar tarefa" : "Nova tarefa"}</h2>

      <div className="field">
        <label>Título</label>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex.: Estudar React para a prova"
        />
      </div>

      <div className="field">
        <label>Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Detalhes da tarefa..."
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSalvar}>
          {editando ? "Salvar alterações" : "Adicionar tarefa"}
        </button>
        {editando && (
          <button className="btn btn-ghost" onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}
