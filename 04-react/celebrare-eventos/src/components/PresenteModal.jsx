// PresenteModal.jsx

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { garantirUsuarioAnonimo } from "../lib/auth";

function PresenteModal({ presente, fecharModal }) {
  const [usuario, setUsuario] = useState(null);
  const [escolhidos, setEscolhidos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [processando, setProcessando] = useState(null);

  const endereco = `Rachel da Rocha Neri
Rua General Silvio Pereira da Silva, 255 - Casa 5
Curicica - Rio de Janeiro/RJ
CEP: 22780-510`;

  /* =========================================
     CARREGAR USUÁRIO + PRESENTES ESCOLHIDOS
     ========================================= */

  useEffect(() => {
    if (!presente) {
      return;
    }

    async function carregarDados() {
      try {
        setCarregando(true);

        const usuarioAtual = await garantirUsuarioAnonimo();

        setUsuario(usuarioAtual);

        const { data, error } = await supabase
          .from("presentes_escolhidos")
          .select("id, presente_id, opcao_nome, usuario_id")
          .eq("presente_id", presente.id);

        if (error) {
          throw error;
        }

        setEscolhidos(data || []);
      } catch (erro) {
        console.error("Erro ao carregar presentes escolhidos:", erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, [presente]);

  if (!presente) {
    return null;
  }

  /* =========================================
     COPIAR ENDEREÇO
     ========================================= */

  async function copiarEndereco() {
    try {
      await navigator.clipboard.writeText(endereco);

      alert("Endereço copiado!");
    } catch {
      alert("Não foi possível copiar o endereço automaticamente.");
    }
  }

  /* =========================================
     MARCAR COMO COMPRADO
     ========================================= */

  async function marcarComoComprado(opcao) {
    if (!usuario) {
      return;
    }

    const confirmou = window.confirm(
      "Você já comprou este presente?\n\n" +
        "Marque somente depois de finalizar a compra na loja.",
    );

    if (!confirmou) {
      return;
    }

    try {
      setProcessando(opcao.nome);

      const { error } = await supabase.from("presentes_escolhidos").insert({
        presente_id: presente.id,
        opcao_nome: opcao.nome,
        usuario_id: usuario.id,
      });

      if (error) {
        /*
          23505 = violação da restrição UNIQUE.
          Isso significa que outra pessoa marcou
          esse presente antes.
        */
        if (error.code === "23505") {
          alert("Este presente acabou de ser escolhido por outro convidado.");

          await atualizarEscolhidos();

          return;
        }

        throw error;
      }

      await atualizarEscolhidos();

      alert("Presente marcado como escolhido!");
    } catch (erro) {
      console.error("Erro ao marcar presente:", erro);

      alert("Não foi possível marcar o presente. Tente novamente.");
    } finally {
      setProcessando(null);
    }
  }

  /* =========================================
     DESFAZER ESCOLHA
     ========================================= */

  async function desfazerEscolha(opcao) {
    if (!usuario) {
      return;
    }

    const confirmou = window.confirm(
      `Deseja liberar novamente "${opcao.nome}"?`,
    );

    if (!confirmou) {
      return;
    }

    try {
      setProcessando(opcao.nome);

      const { error } = await supabase
        .from("presentes_escolhidos")
        .delete()
        .eq("presente_id", presente.id)
        .eq("opcao_nome", opcao.nome)
        .eq("usuario_id", usuario.id);

      if (error) {
        throw error;
      }

      await atualizarEscolhidos();

      alert("Presente liberado novamente.");
    } catch (erro) {
      console.error("Erro ao desfazer escolha:", erro);

      alert("Não foi possível desfazer a escolha.");
    } finally {
      setProcessando(null);
    }
  }

  /* =========================================
     ATUALIZAR LISTA
     ========================================= */

  async function atualizarEscolhidos() {
    const { data, error } = await supabase
      .from("presentes_escolhidos")
      .select("id, presente_id, opcao_nome, usuario_id")
      .eq("presente_id", presente.id);

    if (error) {
      console.error("Erro ao atualizar presentes:", error);

      return;
    }

    setEscolhidos(data || []);
  }

  /* =========================================
     VERIFICAR STATUS DE UMA OPÇÃO
     ========================================= */

  function verificarEscolha(opcao) {
    return escolhidos.find((item) => item.opcao_nome === opcao.nome);
  }

  /* =========================================
     AGRUPAR OPÇÕES POR LOJA
     ========================================= */

  const lojas = {};

  presente.opcoes.forEach((opcao) => {
    if (!lojas[opcao.loja]) {
      lojas[opcao.loja] = [];
    }

    lojas[opcao.loja].push(opcao);
  });

  return (
    <div className="modal-overlay">
      <div className="presente-modal">
        {/* FECHAR */}

        <button
          className="fechar-modal"
          onClick={fecharModal}
          aria-label="Fechar"
        >
          ×
        </button>

        {/* IMAGEM */}

        <img src={presente.imagem} alt={presente.categoria} />

        {/* TÍTULO */}

        <h2>{presente.categoria}</h2>

        {/* ESPECIFICAÇÃO */}

        <p className="modal-especificacao">{presente.especificacao}</p>

        <p className="modal-subtitulo">Escolha uma das opções abaixo:</p>

        {/* =========================================
            LOJAS
        ========================================= */}

        <div className="opcoes-lojas">
          {carregando ? (
            <p className="carregando-presentes">
              Verificando disponibilidade...
            </p>
          ) : (
            Object.entries(lojas).map(([nomeLoja, opcoes]) => (
              <div className="grupo-loja" key={nomeLoja}>
                <h3>{nomeLoja}</h3>

                <div className="opcoes-produtos">
                  {opcoes.map((opcao) => {
                    const escolha = verificarEscolha(opcao);

                    const foiEscolhido = Boolean(escolha);

                    const foiEscolhidoPorMim =
                      escolha?.usuario_id === usuario?.id;

                    const estaProcessando = processando === opcao.nome;

                    return (
                      <div
                        className={`opcao-presente ${
                          foiEscolhido ? "opcao-escolhida" : ""
                        }`}
                        key={opcao.nome}
                      >
                        {/* DISPONÍVEL */}

                        {!foiEscolhido && (
                          <>
                            <a
                              href={opcao.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-loja"
                            >
                              🛍️ {opcao.nome}
                            </a>

                            <button
                              type="button"
                              className="marcar-presente"
                              onClick={() => marcarComoComprado(opcao)}
                              disabled={estaProcessando}
                            >
                              {estaProcessando ? "Salvando..." : "✓ Já comprei"}
                            </button>
                          </>
                        )}

                        {/* ESCOLHIDO POR MIM */}

                        {foiEscolhidoPorMim && (
                          <>
                            <div className="status-presente status-meu">
                              ✓ Você escolheu este presente
                            </div>

                            <button
                              type="button"
                              className="desfazer-presente"
                              onClick={() => desfazerEscolha(opcao)}
                              disabled={estaProcessando}
                            >
                              {estaProcessando ? "Aguarde..." : "Desfazer"}
                            </button>
                          </>
                        )}

                        {/* ESCOLHIDO POR OUTRA PESSOA */}

                        {foiEscolhido && !foiEscolhidoPorMim && (
                          <div className="status-presente">✓ Já escolhido</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* =========================================
            ENDEREÇO
        ========================================= */}

        <div className="endereco-entrega">
          <h3>📦 Endereço para entrega</h3>

          <p>{endereco}</p>

          <button onClick={copiarEndereco} className="copiar-endereco">
            📋 Copiar endereço
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresenteModal;

{
  /* function PresenteModal({ presente, fecharModal }) {
  if (!presente) {
    return null;
  }

 const endereco = `Rachel da Rocha Neri
Rua General Silvio Pereira da Silva, 255 - Casa 5
Curicica - Rio de Janeiro/RJ
CEP: 22780-510`; 

  function copiarEndereco() {
    navigator.clipboard.writeText(endereco);

    alert("Endereço copiado!");
  }

  {/* =========================================
      AGRUPAR OPÇÕES POR LOJA
      ========================================= */
}

{
  /* const lojas = {};

  presente.opcoes.forEach((opcao) => {
    if (!lojas[opcao.loja]) {
      lojas[opcao.loja] = [];
    }

    lojas[opcao.loja].push(opcao);
  });

  return (
    <div className="modal-overlay">

      <div className="presente-modal">

        {/* FECHAR */
}

{
  /*  <button
          className="fechar-modal"
          onClick={fecharModal}
          aria-label="Fechar"
        >
          ×
        </button>

        {/* IMAGEM */
}

{
  /*} <img
          src={presente.imagem}
          alt={presente.categoria}
        />

        {/* TÍTULO */
}

{
  /*  <h2>
          {presente.categoria}
        </h2>

        {/* ESPECIFICAÇÃO *

        <p className="modal-especificacao">
          {presente.especificacao}
        </p>

        <p className="modal-subtitulo">
          Escolha uma das opções abaixo:
        </p>

        {/* =========================================
            LOJAS
        ========================================= 

        <div className="opcoes-lojas">

          {Object.entries(lojas).map(
            ([nomeLoja, opcoes]) => (

              <div
                className="grupo-loja"
                key={nomeLoja}
              >

                <h3>
                  {nomeLoja}
                </h3>

                <div className="opcoes-produtos">

                  {opcoes.map((opcao) => (

                    <a
                      key={opcao.nome}
                      href={opcao.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {opcao.nome}
                    </a>

                  ))}

                </div>

              </div>

            )
          )}

        </div>

        {/* =========================================
            ENDEREÇO
        ========================================= 

        <div className="endereco-entrega">

          <h3>
            📦 Endereço para entrega
          </h3>

          <p>
            {endereco}
          </p>

          <button
            onClick={copiarEndereco}
            className="copiar-endereco"
          >
            📋 Copiar endereço
          </button>

        </div>

      </div>

    </div>
  );
}

export default PresenteModal;
*/
}
