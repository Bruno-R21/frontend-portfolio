// Galeria.jsx

import { useState } from "react";

function Galeria() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const fotos = [
    {
      id: 1,
      src: "/imagens/galeria-1.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 2,
      src: "/imagens/galeria-2.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 3,
      src: "/imagens/galeria-3.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 4,
      src: "/imagens/galeria-4.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 5,
      src: "/imagens/galeria-5.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 6,
      src: "/imagens/galeria-6.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 7,
      src: "/imagens/galeria-7.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 8,
      src: "/imagens/galeria-8.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 9,
      src: "/imagens/galeria-9.jpg",
      alt: "Momento da Rachel",
    },
    {
      id: 10,
      src: "/imagens/galeria-10.jpg",
      alt: "Momento da Rachel",
    },
  ];

  const quantidadeVisivel = 5;

  function proximaFoto() {
    setIndiceAtual((indice) => {
      if (indice >= fotos.length - quantidadeVisivel) {
        return 0;
      }

      return indice + 1;
    });
  }

  function fotoAnterior() {
    setIndiceAtual((indice) => {
      if (indice <= 0) {
        return fotos.length - quantidadeVisivel;
      }

      return indice - 1;
    });
  }

  const fotosVisiveis = fotos.slice(
    indiceAtual,
    indiceAtual + quantidadeVisivel
  );

  return (
    <section id="galeria" className="secao galeria">

      <div className="titulo-secao">
        <span>────</span>

        <h2>GALERIA DE MOMENTOS ♥</h2>

        <span>────</span>
      </div>

      <div className="galeria-carrossel">

        <button
          type="button"
          className="galeria-seta"
          onClick={fotoAnterior}
          aria-label="Fotos anteriores"
        >
          ‹
        </button>

        <div className="galeria-grid">

          {fotosVisiveis.map((foto) => (
            <img
              key={foto.id}
              src={foto.src}
              alt={foto.alt}
              onClick={() => setFotoSelecionada(foto)}
            />
          ))}

        </div>

        <button
          type="button"
          className="galeria-seta"
          onClick={proximaFoto}
          aria-label="Próximas fotos"
        >
          ›
        </button>

      </div>

      <div className="galeria-indicadores">

        {fotos.slice(0, 6).map((foto, indice) => (
          <span
            key={foto.id}
            className={
              indice === indiceAtual
                ? "indicador ativo"
                : "indicador"
            }
          />
        ))}

      </div>

      {/* =========================================
          FOTO AMPLIADA
          ========================================= */}

      {fotoSelecionada && (
        <div
          className="galeria-modal"
          onClick={() => setFotoSelecionada(null)}
        >

          <button
            type="button"
            className="fechar-galeria"
            onClick={() => setFotoSelecionada(null)}
            aria-label="Fechar imagem"
          >
            ×
          </button>

          <img
            src={fotoSelecionada.src}
            alt={fotoSelecionada.alt}
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
}

export default Galeria;