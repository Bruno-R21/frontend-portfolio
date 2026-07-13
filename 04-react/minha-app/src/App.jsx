/* function MeuBotao() {

  return (
    <button>O Messi é foda!</button>    
  );
}
 
 Chamando a função App no REACT. 

function App(){
  return (
    <div>
      <h1>Bem-vindo</h1>
      <MeuBotao />
    </div>
  );
}

export default App

 <MeuBotao> é um componente do REACT, diferente das <tags>, 
é por padrão iniciar com letra maíuscula.   


import './styles.css'

function MyButton() {
  return (
    
    <button className='botao'>ENTRAR</button>
  )  
}

function Formulario() {
  return (
    <div className="Formulario">
      <input type="text" placeholder="Nome Cadastrado"/>
      <input type="email" placeholder="E-mail Cadastrado"/>
      <MyButton />
    </div> 
  )
}

function Text() {
  return (
    <p className='textoPrincipal'>Nubank, a escolha certa para o seu investimento!</p>
  )
}

function App(){
  return (
    <div className="Pagina-principal">
      <h2 className='Cabecalho'>Seja bem-vindo ao</h2> 
      <h1 className="Nubank">NUBANK</h1>     
      <Formulario />
      <Text />
    </div>

  );
}

export default App


function Contador() {
  let numero = 0;

  function incrementar() {
    numero+=3;
    console.log(numero);
  }

  return (
    <div>
      <p>{numero}</p>
      <button onClick={incrementar}>Click aqui + F12</button>
    </div>
  );
}

import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero+1);
  }
  
  function decrementar() {
    setNumero(numero-1);
  }

  function resetar() {
    useState(0);
  }

  return (
    <div>
      <p>{numero}</p>
      <button onClick={incrementar}>INCREMENTAR</button>
      <button onClick={decrementar}>DECREMENTAR</button>
      <button onClick={resetar}>RESETAR</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}
export default App;

import './styles.css'
import { useState } from "react";

function TrocaNome() {
  const [nome, setNome] = useState("Maria");
  
  function trocarNome() {
    if (nome === "Maria") {
      setNome("João");
    } else {
      setNome("Maria");
    }
  }

  return (
    <div className='Trocar'>
      <p>{nome}</p> 
      <button className='Butt' onClick={trocarNome}>TROCAR</button>     
    </div>
    
  );
}

//Function Raiz, não deixa de existir

function App() {
  return (
    <div>
      <TrocaNome />
    </div>
  );
}
export default App;



import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);
 
  // Adicionando o if (numero > 0), o decremento só vai pegar números positivos.
  function decrementar() {
    if (numero > 0) {
    setNumero(numero-1);
  }
}

    return (
    <div>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>INCREMENTAR</button>
      <button onClick={decrementar}>DECREMENTAR</button>
      <button onClick={()=> setNumero(0)}>RESETAR</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}
export default App;

//Cria uma estrutura de objetos com o paramêtro (props)
dentro do <div>.

function Card(props) {
  return (
    <div className="card">
      <h3>{props.nome}</h3>
      <p>R${props.preco}</p>
    </div>
  );
}

function App (){
  return (
    <div>
      <Card nome="Teclado Mecanico" preco={399.90} />
      <Card nome="Mouse Gamer" preco={249.90} />
    </div>
  );
}

export default App;
*/

// Explicação do Map

/* const numeros = [1,2,3,4,5];

const dobro = numeros.map(function(numero) {
  return numero * 2;
});

console.log(dobro); // saída [2,4,6,8,10]
console.log(numeros); // saída [1,2,3,4,5]

*/



/* 
Diminui a estrutura de objetos, pois {nome, preco}
já está dentro do paramêtro do CARDs e o return está com map.
*/

function Card({nome, preco}) {
  return (
    <div className="Card">
       <h3>{nome}</h3>
       <p>R$ {preco}</p>  
    </div>
  );
}

function App (){
  const produtos= [    
     { nome: "Teclado Mecânico", preco: 399.90 },
     { nome: "Mouse Gamer", preco: 249.90 },
     { nome: "Headset Gamer", preco: 399.90 },      
    ]

    return (
      <div className="grid">
        {produtos.map((produto, index) => (
          <Card key={index} nome={produto.nome} preco={produto.preco} />
        ))}
      </div>
    )
  } 


