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
      link: "https://www.mercadolivre.com.br/p/MLB59181057?matt_tool=38524122&pdp_filters=item_id:MLB7127514466&ua=lt-16FUxWZ-CVLE9bxUlg3PY1A2eCbLIpaY-r8_alupInTU#origin=share&sid=share&wid=MLB7127514466&action=copy",
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      descricao: "Mouse com sensor óptico de alta precisão e iluminação ARGB - 12000 DPI.",
      preco: "199.98",
      imagem: imgMouse,
      link: "https://www.mercadolivre.com.br/p/MLB36132534?matt_tool=38524122&pdp_filters=item_id:MLB7159849034&ua=oO4ztAOupxZ3apu8iR-EzEzOgbVAVbahS6aDNPjOVnrJ5dg#origin=share&sid=share&wid=MLB7159849034&action=copy",
    },
    {
      id: 3,
      nome: "Cadeira Gamer",
      descricao: "Cadeira com design ergonômico, estofamento macio e regulagem de altura.",
      preco: "747.00",
      imagem: imgCadeira,
      link: "https://www.mercadolivre.com.br/p/MLB52362931?matt_tool=38524122&pdp_filters=item_id:MLB4122820869&ua=viy1r7HvBe4T8vAFt3FlbQe7SKv70pHla0FPhnRm1WI0haI#origin=share&sid=share&wid=MLB4122820869&action=copy",
    },
    {
      id: 4,
      nome: "Headset",
      descricao: "Headset com som surround 7.1 e microfone sem ruído.",
      preco: "389.00",
      imagem: imgHeadset,
      link: "https://www.mercadolivre.com.br/p/MLB35420730?matt_tool=38524122&pdp_filters=item_id:MLB6600934816&ua=C_uXq1p8yeAeSXM6GgNsGmc07gVdUoJiZgZaC0BtR8SXV5U#origin=share&sid=share&wid=MLB6600934816&action=copy",
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
                link={produto.link}
              />
          ))}
          
        </section>
      </main>
      
      <Footer />
    </>
  );
}
