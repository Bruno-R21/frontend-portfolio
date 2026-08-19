// PresenteModal.jsx

function PresenteModal({ presente, fecharModal }) {
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
      ========================================= */}

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

        <img
          src={presente.imagem}
          alt={presente.categoria}
        />

        {/* TÍTULO */}

        <h2>
          {presente.categoria}
        </h2>

        {/* ESPECIFICAÇÃO */}

        <p className="modal-especificacao">
          {presente.especificacao}
        </p>

        <p className="modal-subtitulo">
          Escolha uma das opções abaixo:
        </p>

        {/* =========================================
            LOJAS
        ========================================= */}

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
        ========================================= */}

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

