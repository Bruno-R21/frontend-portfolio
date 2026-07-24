export default function TarefaCard({ tarefa, onEditar, onExcluir }) {
  return (
    <div className="tarefa">
      <div className="conteudo">
        <h3>{tarefa.title}</h3>
        <p>{tarefa.body}</p>
      </div>
      <div className="acoes">
        <button className="icon-btn" onClick={() => onEditar(tarefa)}>
          Editar
        </button>
        <button className="icon-btn excluir" onClick={() => onExcluir(tarefa.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}
