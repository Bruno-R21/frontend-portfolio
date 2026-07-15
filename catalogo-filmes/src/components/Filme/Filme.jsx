import "./filme.css";
import { useState } from "react";
import Selo from "./Selo.jsx";

export default function Filme({titulo, sinopse, nota, poster, lancamento}) {

  const [visivel, setVisivel] = useState(false);
  const alternarSinopse = () => setVisivel(!visivel);

  return (
    <article className="filme-card">      
      <div className="filme-poster-wrap">
        <img className="filme-poster" 
        src={poster} 
        alt={titulo} 
        loading="lazy"
        />
        <span className="filme-selo">{lancamento}</span> 
      </div>

      <div className="filme-body">
        <h3 className="filme-titulo">{titulo}</h3>
        <p className="filme-nota">{nota}</p>

        <div className="filme-horarios">
          <span className="horario">14:30</span>
          <span className="horario">17:00</span>
          <span className="horario">19:30</span>
          <span className="horario">22:00</span>
        </div>

        {visivel &&<p className="filme-sinopse">{sinopse}</p>}

        <button className="filme-btn" onClick={() => setVisivel(!visivel)}
          >
          {visivel ? "Ocultar sinopse" : "Ver sinopse"}
        </button>
      </div>
    </article>
  );
}

