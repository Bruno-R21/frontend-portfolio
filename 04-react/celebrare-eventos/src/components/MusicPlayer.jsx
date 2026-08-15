// MusicPlayer.jsx

import { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  const musicas = [
    {
      titulo: "Momento Especial",
      arquivo: "/musicas/musica-1.mp3",
    },
    {
      titulo: "Histórias e Memórias",
      arquivo: "/musicas/musica-2.mp3",
    },
    {
      titulo: "Celebre a Vida",
      arquivo: "/musicas/musica-3.mp3",
    },
  ];

  const [musicaAtual, setMusicaAtual] = useState(0);
  const [tocando, setTocando] = useState(false);

  const musica = musicas[musicaAtual];

  function tocarMusica() {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setTocando(true);
      })
      .catch(() => {
        setTocando(false);
      });
  }

  function pausarMusica() {
    if (!audioRef.current) return;

    audioRef.current.pause();

    setTocando(false);
  }

  function alternarMusica() {
    if (tocando) {
      pausarMusica();
    } else {
      tocarMusica();
    }
  }

  function proximaMusica() {
    const proxima =
      (musicaAtual + 1) % musicas.length;

    setMusicaAtual(proxima);
  }

  function musicaAnterior() {
    const anterior =
      (musicaAtual - 1 + musicas.length) % musicas.length;

    setMusicaAtual(anterior);
  }

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.load();

    if (tocando) {
      audioRef.current
        .play()
        .catch(() => {
          setTocando(false);
        });
    }
  }, [musicaAtual]);

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src={musica.arquivo}
        loop
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
      />

      <div className="music-info">

        <span className="music-label">
          Tocar música
        </span>

        <strong>
          ♫ {musica.titulo}
        </strong>

      </div>

      <button
        type="button"
        className="music-control"
        onClick={musicaAnterior}
        aria-label="Música anterior"
      >
        ‹
      </button>

      <button
        type="button"
        className="music-control music-play"
        onClick={alternarMusica}
        aria-label={
          tocando
            ? "Pausar música"
            : "Tocar música"
        }
      >
        {tocando ? "❚❚" : "▶"}
      </button>

      <button
        type="button"
        className="music-control"
        onClick={proximaMusica}
        aria-label="Próxima música"
      >
        ›
      </button>

    </div>
  );
}

export default MusicPlayer;