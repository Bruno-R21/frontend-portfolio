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








