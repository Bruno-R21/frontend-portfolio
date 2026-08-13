// PresenteModal.jsx

function PresenteModal({ presente, fecharModal }) {
  if (!presente) {
    return null;
  }

  const endereco = `
Rachel
Rua ______________________
Número: ______
Bairro: ___________________
Cidade: ___________________
CEP: ______________________
`;

  function copiarEndereco() {
    navigator.clipboard.writeText(endereco);

    alert("Endereço copiado!");
  }

  return (
    <div className="modal-overlay">

      <div className="presente-modal">

        <button
          className="fechar-modal"
          onClick={fecharModal}
        >
          ×
        </button>

        <img
          src={presente.imagem}
          alt={presente.nome}
        />

        <h2>{presente.nome}</h2>

        <p className="modal-subtitulo">
          Onde você deseja comprar?
        </p>

        <div className="modal-lojas">

          {presente.lojas.map((loja) => (

            <a
              key={loja.nome}
              href={loja.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🛒 {loja.nome}
            </a>

          ))}

        </div>

        <div className="endereco-entrega">

          <h3>📦 Endereço para entrega</h3>

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