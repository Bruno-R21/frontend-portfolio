import "./styles/global.css";

import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import imgTeclado from "./assets/teclado.jpg";
import imgMouse from "./assets/mouse.jpg";
import imgCadeira from "./assets/cadeira.jpg";
import imgHeadset from "./assets/headset.jpg";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h2 className="section-title">Destaques</h2>
        <section className="grid">
          <Card // Card Produto Teclado
            nome="Teclado Mecânico"
            descricao="Teclado Mecânico 60% com leds ARGB."
            preco="299.90"
            imagem={imgTeclado}
          />

          <Card // Card Produto Mouse
            nome="Mouse Gamer"
            descricao="Mouse com iluminação ARGB - 12000 DPI."
            preco="199.90"
            imagem={imgMouse}
          />

          <Card // Card Produto Cadeira Gamer 
            nome="Cadeira Gamer"
            descricao="Design ergonômico, estofamento macio e regulagem de altura."
            preco="599.90"
            imagem={imgCadeira}
          />

          <Card // Card Produto Headset 
            nome="Headset"
            descricao="Som surround 7.1 e micorfone sem ruído."
            preco="99.90"
            imagem={imgHeadset}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
