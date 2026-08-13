// App.jsx
import "./App.css";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Presentes from "./components/Presentes";

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
      
      <Countdown />           

     {/* ==============================
          PRESENTES
      ============================== */}  

      <Presentes />

      {/* <section id="presentes" className="secao presentes">

        <div className="titulo-secao">
          <span>────</span>
          <h2>🎁 LISTA DE PRESENTES 🎁</h2>
          <span>────</span>
        </div>

        <div className="presentes-grid">

          <article className="presente-card">

            <img 
              src="/imagens/airfryer.jpg"
              alt="Air Fryer"
            />

            <h3>Air Fryer</h3>

            <p>R$ 299,90</p>

            <span className="loja">Mercado Livre</span>

            <a href="#" className="comprar">
              🛒 Comprar
            </a>

          </article>


          <article className="presente-card">

            <img
              src="/imagens/cafeteira.jpg"
              alt="Cafeteira Nespresso"
            />

            <h3>Cafeteira Nespresso</h3>

            <p>R$ 489,90</p>

            <span className="loja">Shopee</span>

            <a href="#" className="comprar">
              🛒 Comprar
            </a>

          </article>


          <article className="presente-card">

            <img
              src="/imagens/jogo-tacas.jpg"
              alt="Jogo de Taças"
            />

            <h3>Jogo de Taças</h3>

            <p>R$ 159,90</p>

            <span className="loja">Mercado Livre</span>

            <a href="#" className="comprar">
              🛒 Comprar
            </a>

          </article>


          <article className="presente-card">

            <img
              src="/imagens/jogo-cama.jpg"
              alt="Jogo de Cama King"
            />

            <h3>Jogo de Cama King</h3>

            <p>R$ 259,90</p>

            <span className="loja">Americanas</span>

            <a href="#" className="comprar">
              🛒 Comprar
            </a>

          </article>

        </div>

        <button className="ver-presentes">
          Ver todos os presentes 🎁
        </button>

      </section>
    */}

      {/* ==============================
          MENSAGEM
      ============================== */}

      <section id="mensagem" className="mensagem-secao">

        <div className="mensagem-foto">

          <img
            src="/imagens/foto-mensagem.jpg"
            alt="Rachel"
          />

        </div>

        <div className="mensagem-conteudo">

          <h2>♥ &nbsp; MENSAGEM DA ANIVERSARIANTE</h2>

          <p>
            Cada pessoa que faz parte da minha vida tem um
            lugar especial no meu coração.
          </p>

          <p>
            Obrigada por caminharem comigo até aqui. 💕
          </p>

          <p>
            Conto com sua presença para celebrar esse
            momento tão especial!
          </p>

        </div>

      </section>


      {/* ==============================
          GALERIA
      ============================== */}

      <section id="galeria" className="secao galeria">

        <div className="titulo-secao">

          <span>────</span>

          <h2>GALERIA DE MOMENTOS ♥</h2>

          <span>────</span>

        </div>

        <div className="galeria-grid">

          <img src="/imagens/galeria-1.jpg" alt="Momento da Rachel" />
          <img src="/imagens/galeria-2.jpg" alt="Momento da Rachel" />
          <img src="/imagens/galeria-3.jpg" alt="Momento da Rachel" />
          <img src="/imagens/galeria-4.jpg" alt="Momento da Rachel" />
          <img src="/imagens/galeria-5.jpg" alt="Momento da Rachel" />

        </div>

        <button className="ver-fotos">
          Ver mais fotos 📷
        </button>

      </section>


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

          <div>
            <span>📍</span>
            <h3>LOCAL</h3>
            <p>
              Rua Sapoti, L18 Q57
              <br />
              Curicica
            </p>
          </div>

          <div>
            <span>👥</span>
            <h3>CONFIRME SUA PRESENÇA</h3>
            <button>WhatsApp</button>
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

