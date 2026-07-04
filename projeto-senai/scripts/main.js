/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá, Mundo!";

document.querySelector("html").addEventListener("click", function (){
    alert("Você clicou aqui!");
})

 DOM: Document Object Model

Document
HTML
    body

*/

const lista = document.querySelector("ul");
const item = document.createElement("li");  // cria <li> (ainda solto)

item.textContent = "jovem aprendiz";
lista.appendChild(item);                    // insere dentro da <ul>
/*
// item.remove(); // remove o elemento incluido


const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/Logo Oficial - Firjan.jpg"){
        myImage.setAttribute("src", "imagens/Logo-Looney-tunes.png");
    } else {
        myImage.setAttribute("src", "imagens/Logo Oficial - Firjan.jpg");
    }
}

const Botao = document.querySelector("#Botao");

Botao.addEventListener("click", () => {
    alert("Você clicou!");
})
*/

const myImage = document.querySelector("img");
const Botao = document.querySelector("#Botao");

Botao.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/Logo Oficial - Firjan.jpg"){
        myImage.setAttribute("src", "imagens/Logo-Looney-tunes.png");
    } else {
        myImage.setAttribute("src", "imagens/Logo Oficial - Firjan.jpg");
    }
}

let curtidas = 0;
let naoCurtidas = 0;
const btnCurtir = document.querySelector("#Curti");
const contador1 = document.querySelector("#contador1");
const btnNaoCurtir = document.querySelector("#naoCurti");
const contador2 = document.querySelector("#contador2");

btnCurtir.addEventListener("click", () => {
    curtidas++;
    contador1.textContent = curtidas;
})

btnNaoCurtir.addEventListener("click", () => {
    naoCurtidas++;
    contador2.textContent = naoCurtidas;
})


let myButton = document.querySelector("#nome");
let myHeading = document.querySelector("h2");

function setUsername() {
    const myName = prompt("Por favor, digite o seu nome:");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem-vindo ao SENAI, ${myName}`;
}

// Ao abrir a página: Já tem nome salvo?
if (!localStorage.getItem("name")) {
    setUsername();                     // não tem pergunta
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `Bem-vindo ao SENAI, ${storeName}`; // tem usa
}

// Botão permite trocar o nome a qualquer momento
myButton.onclick = () => {
    setUsername();
}




