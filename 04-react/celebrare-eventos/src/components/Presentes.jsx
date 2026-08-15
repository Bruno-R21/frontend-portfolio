// Presentes.jsx

import { useState } from "react";
import presentes from "../data/presentes";
import PresenteModal from "./PresenteModal";

function Presentes() {
  const [presenteSelecionado, setPresenteSelecionado] = useState(null);

  return (
    <section id="presentes" className="secao presentes">

      <div className="titulo-secao">
        <span>────</span>

        <h2>🎁 LISTA DE PRESENTES 🎁</h2>

        <span>────</span>
      </div>

      {/* =========================================
          MENSAGEM DA LISTA
      ========================================= */}

      <div className="mensagem-presentes">

        <strong>
          Sua presença já é o nosso maior presente!
        </strong>

        <p>
          Caso queira nos presentear, selecionamos
          algumas sugestões com carinho.
        </p>
        

      </div>

      {/* =========================================
          CARDS DOS PRESENTES
      ========================================= */}

      <div className="presentes-grid">

        {presentes.map((presente) => (

          <article
            className="presente-card"
            key={presente.id}
          >

            <img
              src={presente.imagem}
              alt={presente.categoria}
            />

            <h3>
              {presente.categoria}
            </h3>
            

            <button
              className="detalhes-presente"
              onClick={() =>
                setPresenteSelecionado(presente)
              }
            >
              🎁 Ver opções
            </button>

          </article>

        ))}

      </div>

      {/* =========================================
          MODAL
      ========================================= */}

      <PresenteModal
        presente={presenteSelecionado}
        fecharModal={() =>
          setPresenteSelecionado(null)
        }
      />

    </section>
  );
}

export default Presentes;


/* import { useState } from "react";
import presentes from "../data/presentes";
import PresenteModal from "./PresenteModal";

function Presentes() {
  const [presenteSelecionado, setPresenteSelecionado] = useState(null);
  return (
    <section id="presentes" className="secao presentes">
      <div className="titulo-secao">
        <span>────</span>

        <h2>🎁 LISTA DE PRESENTES 🎁</h2>

        <span>────</span>
      </div>

      <div className="mensagem-presentes">
        <strong>Sua presença já é o nosso maior presente!</strong>

        <p>
          Caso queira nos presentear, selecionamos algumas sugestões com
          carinho.
        </p>
      </div>

      <div className="presentes-grid">
        {presentes.map((presente) => (
          <article className="presente-card" key={presente.id}>
            <img src={presente.imagem} alt={presente.nome} />

            <h3>{presente.nome}</h3>

            <p className="presente-descricao">{presente.descricao}</p>

            <div className="lojas">
              {presente.lojas.map((loja) => (
                <a
                  key={loja.nome}
                  href={loja.link}
                  className="comprar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🛒 {loja.nome}
                </a>
              ))}
            </div>

            <button
              className="detalhes-presente"
              onClick={() => setPresenteSelecionado(presente)}
            >
              🎁 Ver detalhes
            </button>

            {/* <p>{presente.valor}</p>

                  <span className="loja">
                    {presente.loja}
                  </span>

                  <a
                    herf={presente.link}
                    className="comprar"
                  >
                    🛒 Comprar
                  </a>
                 */
          /*</article>
        ))}
      </div>

      <button className="ver-presentes">Ver todos os presentes 🎁</button>

      <PresenteModal
        presente={presenteSelecionado}
        fecharModal={() => setPresenteSelecionado(null)}
      />
      
    </section>
  );
}

export default Presentes;
*/