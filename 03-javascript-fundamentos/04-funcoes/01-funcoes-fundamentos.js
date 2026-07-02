// Função que exibe uma saudação no console

/*
function mostrarSaudacao() {
    let mensagem1 = "Olá! Seja be-vindo ao mundo da programação!";
    let mensagem2 = "Olá! Seja be-vindo ao mundo da programação!";
    console.log(mensagem1);
    console.log(mensagem2);
}

// Chamando a função
mostrarSaudacao();
mostrarSaudacao();

// Função com laço de repetição

function contaAteCinco(){
    for (let i = 1; i <= 5; i++){
    console.log(i);
  }
}

contaAteCinco();

// Alterando os parâmetros da função.

function saudacao(nome){
    console.log("Olá, ", nome, ", Seja bem-vindo!");
}
saudacao("Lucas");
saudacao("Maria");
saudacao("Ruth");

// Função usando parâmetros com soma.

function soma(a, b){
    console.log(a+b);
}
soma(5,7);
soma(10,8);    

// Função usando parâmetros de texto.

function MostraEnd(rua, numero, cidade){
    console.log("Rua: ", rua);
    console.log("Número: ", numero);
    console.log("Cidade: ", cidade);
}

MostraEnd("Silvio Pereira da Silva", 255, "Rio de Janeiro");

// Função usando o return.

function somar(a,b){
    return(a+b);
}
let resultado = somar(5,3);
console.log(resultado);

// Função usando o return com o quadrado.

function quadrado(num){
    return num * num;
}

console.log(quadrado(4));
console.log(quadrado(9));

// Função com estrutura condicional (if/else).

function verificarIdade(idade){
    if(idade >= 18){
        return "\nMaior de idade.";
    } else{
        return "\nMenor de idade.";
    }
}
console.log(verificarIdade(42));
console.log(verificarIdade(16));
console.log(verificarIdade(31));
console.log(verificarIdade(18));


// Metodos do arrays com funções

let frutas = ["banana", "uva"] // Inseri um elemento no inicio => .unshift()
frutas.unshift("mamão"); 

console.log(frutas); // [ 'mamão', 'banana', 'uva' ]

frutas.shift(); // Retira um elemento do inicio => .unshift()

console.log(frutas); // [ 'banana', 'uva' ]

console.log(frutas.indexOf("uva")); // Retorna a posição do elemento.

console.log(frutas.includes("maça")); // Retorna se o elmento existe no array. maça = false
console.log(frutas.includes("banana")); // Retorna se o elmento existe no array. banana = true
*/



// Função utilizando o laço de repetição for.

let frutas = ["banana", "uva"]

for(let i = 0; i < frutas.length; i++){ // array não utiliza "<=", apenas o "<".
    console.log(frutas[i]);
}


// Função utilizando o forEach

frutas.forEach(function(frutas){
    console.log(frutas);
})

