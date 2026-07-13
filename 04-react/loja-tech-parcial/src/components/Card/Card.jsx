import "./card.css";
import { useState } from "react";

export default function Card({nome, descricao, preco, imagem}) {
 
  const [aberto, setAberto] = useState(false); // Estado que controla se a descrição está visível
  return (
    <article className="card">
      <img
        className="card__img"
        src={imagem} // Usamos a props (propriedades) imagem aqui
        alt={nome} // Usamos a props (propriedades) nome aqui
        loading="lazy"
        />            
      
      <div className="card__body">

        <h3 className="card__title">{nome}</h3> 
        {aberto && (              /*Só aparece quando aberto for true*/  
        <p className="card__desc">{descricao}</p>
        )}
      </div>

      <div className="card__footer">
        
        <span className="card__price">R${preco}</span>

        <button 
        className="card__btn" onClick={() => setAberto(!aberto)}   //Trocou =>alert(`Ver mais:"${nome}`)} por setAberto( !aberto)}
        >
          {aberto ? "Ver menos" : "Ver mais"}         
        </button>
      </div>
    </article>
  );
}
