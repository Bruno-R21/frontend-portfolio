import "./styles/global.css";

import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import imgTeclado from "./assets/teclado.jpg";
import imgMouse from "./assets/mouse.jpg";
import imgCadeira from "./assets/cadeira.jpg";
import imgHeadset from "./assets/headset.jpg";

export default function App() {

  const produtos = [
    {
      id: 1,
      nome: "Teclado Mecânico",
      descricao:"Teclado Mecânico 60%, com switches azuis e leds ARGB.",
      preco:"299.90",
      imagem: imgTeclado,
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      descricao: "Mouse com sensor óptico de alta precisão e iluminação ARGB - 12000 DPI.",
      preco: "199.90",
      imagem: imgMouse,
    },
    {
      id: 3,
      nome: "Cadeira Gamer",
      descricao: "Cadeira com design ergonômico, estofamento macio e regulagem de altura.",
      preco: "599.90",
      imagem: imgCadeira,
    },
    {
      id: 4,
      nome: "Headset",
      descricao: "Headset com som surround 7.1 e microfone sem ruído.",
      preco: "99.90",
      imagem: imgHeadset,
    },
  ]

  return (
    <>
      <NavBar />
      <main className="container">
        <h2 className="section-title">Destaques</h2>

        <section className="grid">

          {produtos.map((produto) => (
             <Card
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem}
              />
          ))}
          
        </section>
      </main>
      
      <Footer />
    </>
  );
}
