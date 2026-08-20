// Galeria.jsx

import { useEffect, useState } from "react";

function Galeria() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(5);

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

  /* =========================================
     QUANTIDADE DE FOTOS POR TELA
     ========================================= */

  useEffect(() => {
    function atualizarQuantidade() {
      const largura = window.innerWidth;

      if (largura <= 600) {
        setQuantidadeVisivel(1);
      } else if (largura <= 900) {
        setQuantidadeVisivel(3);
      } else {
        setQuantidadeVisivel(4);
      }
    }

    atualizarQuantidade();

    window.addEventListener("resize", atualizarQuantidade);

    return () => {
      window.removeEventListener("resize", atualizarQuantidade);
    };
  }, []);

  /* =========================================
     PRÓXIMA FOTO
     anda apenas UMA posição
     ========================================= */

  function proximaFoto() {
    setIndiceAtual((indice) => {
      return (indice + 1) % fotos.length;
    });
  }

  /* =========================================
     FOTO ANTERIOR
     anda apenas UMA posição
     ========================================= */

  function fotoAnterior() {
    setIndiceAtual((indice) => {
      return (indice - 1 + fotos.length) % fotos.length;
    });
  }

  /* =========================================
     FOTOS VISÍVEIS
     carrossel circular
     ========================================= */

  const fotosVisiveis = Array.from(
    { length: quantidadeVisivel },
    (_, deslocamento) => {
      const indice =
        (indiceAtual + deslocamento) % fotos.length;

      return fotos[indice];
    }
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
          aria-label="Foto anterior"
        >
          ‹
        </button>

        <div
          className="galeria-grid"
          style={{
            gridTemplateColumns: `repeat(${quantidadeVisivel}, minmax(0, 1fr))`,
          }}
        >

          {fotosVisiveis.map((foto, posicao) => (
            <img
              key={`${foto.id}-${posicao}`}
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
          aria-label="Próxima foto"
        >
          ›
        </button>

      </div>

      {/* INDICADORES */}

      <div className="galeria-indicadores">

        {fotos.map((foto, indice) => (
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

