// DecoracaoFloral.jsx

function DecoracaoFloral({ imagem, classe }) {
  return (
    <img
      className={`floral ${classe}`}
      src={imagem}
      alt=""
      aria-hidden="true"
    />
  );
}

export default DecoracaoFloral;