import "./card.css";
import teclado from '../../assets/teclado.jpg'

export default function Card({nome, descricao, preco, imagem}) {
  return (
    <article className="card">
      <img
        className="card__img"
        src={imagem} // Usamos a prop imagem aqui
        alt={nome} // Usamos a prop nome aqui
        loading="lazy"
        />            
      
      <div className="card__body">
        <h3 className="card__title">{nome}</h3> 
        <p className="card__desc">{descricao}</p>
      </div>

      <div className="card__footer">
        <span className="card__price">R${preco}</span>
        <button 
        className="card__btn" onClick={() => alert(`Ver mais:"${nome}`)}
        >
          Ver mais
        </button>
      </div>
    </article>
  );
}
