// App.jsx

import "./App.css";

import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Presentes from "./components/Presentes";
import Galeria from "./components/Galeria";

function App() {   

  return (
    <main className="convite">
      <Header />      

      {/* ==============================
          CAPA / HERO
      ============================== */}

      <section id="inicio" className="capa">
        <div className="hero">
          <div className="hero-foto">
            <div className="moldura-foto">
              <img
                src="/imagens/foto-principal.jpg"
                alt="Rachel - 40 anos"
                className="foto-principal"
              />
            </div>
          </div>

          <div className="hero-conteudo">
            <p className="idade">40</p>
            <p className="anos">anos</p>

            <p className="frase-principal">DE HISTÓRIAS, SONHOS E GRATIDÃO.</p>

            <p className="proximos-capitulos">
              E QUE VENHAM OS PRÓXIMOS CAPÍTULOS!
            </p>

            <h1>RACHEL</h1>

            <p className="celebre">CELEBRE A VIDA!</p>
          </div>
        </div>
      </section>

      {/* ==============================
          CONTADOR
      ============================== */}

      <audio id="musica-festa" src="/musicas/rachel.mp3" loop />

      {/* ==============================
          CONTADOR
      ============================== */}

      <Countdown />

      {/* ==============================
          PRESENTES
      ============================== */}

      <Presentes />

      {/* ==============================
          MENSAGEM
      ============================== */}

      <section id="mensagem" className="mensagem-secao">
        <div className="mensagem-foto">
          <img src="/imagens/foto-mensagem.jpg" alt="Rachel" />
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

      <section id="local" className="informacoes">
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

          <div>
            <span>👥</span>
            <h3>CONFIRME SUA PRESENÇA</h3>
            <a
              href="https://wa.me/5521972206008?text=Olá!%20Confirmo%20minha%20presença%20na%20festa%20da%20Rachel."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              Confirmar Presença
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
