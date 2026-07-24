// App.Jsx (taskflow-projeto)

import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import TarefaForm from "./components/TarefaForm.jsx";
import TarefaCard from "./components/TarefaCard.jsx";

const API = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null);

  // ===== GET: buscar as tarefas quando a página abre (JÁ ESTÁ PRONTO) =====
  useEffect(() => {
    async function buscarTarefas() {
      try {
        const resposta = await fetch(`${API}?_limit=5`);
        const dados = await resposta.json();
        setTarefas(dados);
      } catch (e) {
        setErro("Não foi possível carregar as tarefas.");
      } finally {
        setCarregando(false);
      }
    }
    buscarTarefas();
  }, []);

  // ===== POST: criar uma nova tarefa =====
  // TODO (aula de hoje): enviar 'nova' para a API com method: "POST",
  // pegar a tarefa que o servidor devolve e colocá-la no início de 'tarefas'.
  async function handleCriar(nova) {
    const resposta = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nova),
    });
    const tarefaCriada = await resposta.json(); // o servidor devolve a tarefa com um id

    setTarefas([...tarefas, tarefaCriada]); // coloca a nova no início da lista }

    console.warn("handleCriar ainda não implementado ->", nova);
  }

  // ===== PUT: atualizar uma tarefa que já existe =====
  // TODO (aula de hoje): enviar 'dados' para a API em /posts/id com method: "PUT",
  // e substituir a tarefa correspondente dentro de 'tarefas'.
  async function handleAtualizar(id, dados) {
    await fetch(`${API}/${id}`, {  // repare nas crases ` ` e no /${id}
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, ...dados } : t))
    );

    setTarefaEmEdicao(null); // fecha o modo de edição
  
    console.warn("handleAtualizar ainda não implementado ->", id, dados);  // setTarefaEmEdicao(null);
  }

  // ===== DELETE: remover uma tarefa =====
  // TODO (aula de hoje): apagar a tarefa na API em /posts/id com method: "DELETE",
  // e remover essa tarefa de 'tarefas'.
  async function handleExcluir(id) {
    
    // if (!confirm("Deseja mesmo excluir esta tarefa?")) return;
    
    await fetch(`${API}/${id}`, {
        method: "DELETE", 
      });
       
    setTarefas(tarefas.filter((t) => t.id !== id)); // mantém só quem NÃO é o id apagado

    console.warn("handleExcluir ainda não implementado ->", id);
  }

  return (
    <>
      <Header />
      <main className="page">
        <TarefaForm
          tarefaEmEdicao={tarefaEmEdicao}
          onCriar={handleCriar}
          onAtualizar={handleAtualizar}
          onCancelar={() => setTarefaEmEdicao(null)}
        />
        
        <h2 className="título">
          
          {tarefas.length === 0 && "Nenhuma tarefa"}
          {tarefas.length === 1 && "1 tarefa"}
          {tarefas.length > 1 && `${tarefas.length}tarefas`}   
          
        </h2>

        {carregando && <div className="aviso">Carregando tarefas...</div>}
        {erro && <div className="aviso erro">{erro}</div>}

        {!carregando && !erro && (
          <div className="lista">
            {tarefas.map((tarefa) => (
              <TarefaCard
                key={tarefa.id}
                tarefa={tarefa}
                onEditar={setTarefaEmEdicao}
                onExcluir={handleExcluir}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
