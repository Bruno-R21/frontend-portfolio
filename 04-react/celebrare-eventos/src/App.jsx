// App.jsx
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <main className="convite">
      <Header />

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
          
            <p className="idade">40 ANOS</p>

            <p className="frase-principal">
              DE HISTÓRIAS, SONHOS E GRATIDÃO.
            </p>

            <p className="proximos-capitulos">
              E QUE VENHAM OS PRÓXIMOS CAPÍTULOS!
            </p>

            <h1>RACHEL</h1>

            <p className="celebre">CELEBRE A VIDA!</p>

          </div>

        </div>

      </section>
      
    </main>
  )
}

export default App
