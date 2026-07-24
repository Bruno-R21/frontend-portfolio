import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import ProdutoForm from "./components/ProdutoForm.jsx";
import ProdutoCard from "./components/ProdutoCard.jsx";

const API = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);

  // ===== GET: buscar os produtos quando a página abre (JÁ ESTÁ PRONTO) =====
  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch(`${API}?_limit=6`);
        const dados = await resposta.json();
        // A API de treino não tem preço, então geramos um para cada produto:
        const comPreco = dados.map((p) => ({
          ...p,
          preco: Number(((p.id * 37.9) % 380 + 29.9).toFixed(2)),
        }));
        setProdutos(comPreco);
      } catch (e) {
        setErro("Não foi possível carregar os produtos.");
      } finally {
        setCarregando(false);
      }
    }
    buscarProdutos();
  }, []);

  // ===== POST: cadastrar um novo produto =====
  // TODO (prova): enviar 'novo' para a API com method: "POST",
  // pegar o produto que o servidor devolve e colocá-lo no início de 'produtos'.
  async function handleCriar(novo) {
    const resposta = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo),
    }); 
    
    const produtoCriado = await resposta.json(); 

    setProdutos([ produtoCriado, ...produtos]); 
    console.warn("handleCriar ainda não implementado ->", novo);
  }

  // ===== PUT: atualizar um produto que já existe =====
  // TODO (prova): enviar 'dados' para a API em /posts/id com method: "PUT",
  // e substituir o produto correspondente dentro de 'produtos'.
  async function handleAtualizar(id, dados) {
    await fetch(`${API}/${id}`, {

    method: "PUT",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(dados),
    });

    setProdutos(
      produtos.map((t) => (t.id === id ? { ...t, ...dados } : t))    
    );
    console.warn("handleAtualizar ainda não implementado ->", id, dados);
    setProdutoEmEdicao(null);
  }

  // ===== DELETE: remover um produto =====
  // TODO (prova): apagar o produto na API em /posts/id com method: "DELETE",
  // e remover esse produto de 'produtos'.
  async function handleExcluir(id) {    
    if (!confirm("Deseja excluir o Produto selecionado?")) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setProdutos(produtos.filter((t) => t.id !== id));     
    }
   

  return (
    <>
      <Header />
      <main className="wrap">
        <ProdutoForm
          produtoEmEdicao={produtoEmEdicao}
          onCriar={handleCriar}
          onAtualizar={handleAtualizar}
          onCancelar={() => setProdutoEmEdicao(null)}
        />

        <div className="section-head">
          <h3>Catálogo</h3>
          <span className="count">{produtos.length} produtos</span>
        </div>

        {carregando && <div className="aviso">Carregando produtos...</div>}
        {erro && <div className="aviso erro">{erro}</div>}

        {!carregando && !erro && (
          <div className="grid">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                onEditar={setProdutoEmEdicao}
                onExcluir={handleExcluir}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
