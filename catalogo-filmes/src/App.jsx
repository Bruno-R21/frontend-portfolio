
import "./styles/global.css";

import NavBar from "./components/NavBar/NavBar";
import Filme from "./components/Filme/Filme";
import Footer from "./components/Footer/Footer";

import vingadores from "./assets/vingadores.jpeg";
import toyStory from "./assets/Toy_story.jpeg";
import oHobbit from "./assets/O_Hobbit.jpeg";


export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h2 className="section-title">Em Cartaz</h2>
        <section className="grid">
          <Filme 
            titulo="Vingadores: Ultimato"
            sinopse="Após Thanos dizimar metade das criaturas vivas no universo em Vingadores: Guerra Infinita, os heróis sobreviventes estão em ruínas. Sofrendo com a dor da perda, os Vingadores remanescentes reúnem-se para bolar o plano final: viajar no tempo através do Reino Quântico para recuperar as Joias do Infinito, desfazer o caos causado pelo Titã Louco e restaurar a ordem no universo, a um custo altíssimo."
            nota="⭐ 8.4/10"
            poster={vingadores}
            lancamento= "true"     
          />
          <Filme 
            titulo="Toy Story 5"
            sinopse="A trama se passa dois anos após o quarto filme e coloca a turma cara a cara com uma nova ameaça existencial: a tecnologia. Agora com 8 anos de idade, Bonnie ganha o seu primeiro tablet, chamado Lilypad. Rapidamente hipnotizada pelo aparelho digital, a menina passa a ignorar seus antigos companheiros. Liderados por Jessie (com o suporte de Buzz Lightyear e o retorno do veterano Woody), os brinquedos tradicionais precisam bolar um plano para resgatar Bonnie do isolamento das telas e provar que a amizade real é insubstituível."
            nota="⭐ 7,5/10"
            poster={toyStory}
            lancamento= "false"     
          />
          <Filme 
            titulo="O Hobbit: Uma Jornada Inesperada"
            sinopse="A história acompanha o pacato hobbit Bilbo Bolseiro, que leva uma vida tranquila no Condado até ser convocado pelo mago Gandalf, o Cinzento. Ele se junta a uma companhia de treze anões liderados pelo lendário guerreiro Thorin Escudo de Carvalho. A missão do grupo é cruzar a Terra-média em uma jornada épica e perigosa até a Montanha Solitária para recuperar o antigo reino dos anões e seu tesouro, que foram tomados pelo temível dragão Smaug. No caminho, Bilbo acaba se perdendo nos túneis sob as Montanhas Sombrias, onde encontra a criatura Gollum e adquire um anel aparentemente simples que mudará o destino de todo o mundo."
            nota="⭐ 7,8/10"
            poster={oHobbit}
            lancamento= "true"     
          />
          
        </section>
      </main>
      <Footer />
    </>
  );
}


