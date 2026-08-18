// App.jsx

import "./App.css";

import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Presentes from "./components/Presentes";
import Galeria from "./components/Galeria";
import DecoracaoFloral from "./components/DecoracaoFloral";

const flores = {
  superiorEsquerdo: "/imagens/flores/floral-canto-superior-esquerdo.png",

  superiorDireito: "/imagens/flores/floral-canto-superior-direito.png",

  inferiorEsquerdo: "/imagens/flores/floral-canto-inferior-esquerdo.png",

  inferiorDireito: "/imagens/flores/floral-canto-inferior-direito.png",
};

function App() {
  return (
    <main className="convite">
      <DecoracaoFloral
        imagem={flores.superiorEsquerdo}
        classe="floral-superior-esquerdo"
      />

      <DecoracaoFloral
        imagem={flores.superiorDireito}
        classe="floral-superior-direito"
      />

      <DecoracaoFloral
        imagem={flores.inferiorEsquerdo}
        classe="floral-inferior-esquerdo"
      />

      <DecoracaoFloral
        imagem={flores.inferiorDireito}
        classe="floral-inferior-direito"
      />

      <Header />

      {/* ==============================
          CAPA / HERO
      ============================== */}

      <section id="home" className="capa">
        <div className="hero">
          {/* FOTO */}

          <div className="hero-foto">
            <div className="moldura-foto">
              <img src="/imagens/foto-principal.jpg" alt="Rachel" />
            </div>

            <img
              className="floral-foto-principal"
              src="/imagens/flores/floral-foto-principal.png"
              alt=""
              aria-hidden="true"
            />
          </div>

          {/* CONTEÚDO */}

          <div className="hero-conteudo">
            <div className="idade">
              <span className="numero">40</span>

              <span className="anos">anos</span>
            </div>

            <p className="frase-principal">DE HISTÓRIAS, SONHOS E GRATIDÃO.</p>

            <p className="proximos-capitulos">
              E QUE VENHAM OS PRÓXIMOS CAPÍTULOS!
            </p>

            <h1>RACHEL</h1>

            <div className="celebre">
              <span></span>

              <p>CELEBRE A VIDA!</p>

              <span></span>
            </div>
          </div>
        </div>
      </section>

      <audio id="musica-festa" src="/musicas/rachel.mp3" loop />

      {/* ==============================
          CONTADOR
      ============================== */}

      <Countdown />

      {/* ==============================
          PRESENTES
      ============================== */}

      <section className="secao-decorada">
        <DecoracaoFloral
          imagem={flores.superiorEsquerdo}
          classe="floral-lateral-esquerda"
        />

        <Presentes />

        <DecoracaoFloral
          imagem={flores.inferiorDireito}
          classe="floral-lateral-direita"
        />
      </section>

      {/* ==============================
          MENSAGEM
      ============================== */}

      <section id="mensagem" className="mensagem-secao secao-decorada">
        <div className="mensagem-foto">
          <img
            className="foto-mensagem-principal"
            src="/imagens/foto-mensagem.jpg"
            alt="Rachel"
          />

          <img
            className="floral-foto-mensagem"
            src="/imagens/flores/floral-mensagem.png"
            alt=""
            aria-hidden="true"
          />          

        </div>

        <div className="mensagem-conteudo">
          <h2>♥ &nbsp; MENSAGEM DA ANIVERSARIANTE</h2>

          <p>
            Cada pessoa que faz parte da minha vida tem um lugar especial no meu
            coração.
          </p>

          <p>Obrigada por caminharem comigo até aqui. 💕</p>

          <p>Conto com sua presença para celebrar esse momento tão especial!</p>
        </div>
      </section>

      {/* ==============================
          GALERIA
      ============================== */}

      <Galeria />

      {/* ==============================
          INFORMAÇÕES DA FESTA
      ============================== */}

      <section id="local" className="informacoes secao-decorada">
        <div className="titulo-secao">
          <span>────</span>

          <h2>INFORMAÇÕES DA FESTA ♥</h2>

          <span>────</span>
        </div>

        <div className="informacoes-grid">
          <div>
            <span>📅</span>

            <h3>DATA</h3>

            <p>06/09/2026</p>

            <small>Domingo</small>
          </div>

          <div>
            <span>🕐</span>

            <h3>HORÁRIO</h3>

            <p>13:00</p>
          </div>

          <div className="info-card">
            <span>📍</span>

            <h3>LOCAL</h3>

            <p>
              Rua Sapoti, Lote 18 - Quadra 57
              <br />
              Curicica - Rio de Janeiro
            </p>

            <a
              href="https://maps.google.com/?q=Rua+Sapoti+Curicica+RJ"
              target="_blank"
              rel="noreferrer"
              className="btn-mapa"
            >
              🗺️ Abrir Mapa
            </a>
          </div>

          <div className="info-card confirmacao-card">

  <span className="confirmacao-icone">💌</span>

  <h3>SUA PRESENÇA É ESPECIAL</h3>

  <p className="confirmacao-prazo">
    Confirme sua presença até <strong>25/08/2026</strong>.
  </p>

  <a
    href="https://wa.me/5521972206008?text=Olá!%20Confirmo%20minha%20presença%20na%20festa%20da%20Rachel."
    target="_blank"
    rel="noreferrer"
    className="btn-whatsapp"
  >
    <img
      src="/imagens/whatsapp.png"
      alt=""
      aria-hidden="true"
    />

    <span>Confirmar presença</span>
  </a>

</div>
        </div>
      </section>

      {/* ==============================
          RODAPÉ
      ============================== */}

      <footer>
        <p>Obrigado por fazer parte dessa história!</p>

        <p>Rachel 40 anos — Celebra a vida!</p>
      </footer>
    </main>
  );
}

export default App;
