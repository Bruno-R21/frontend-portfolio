
let carrinho = [
    {nome: "Macarrão", preco: 3.50, quantidade: 10},
    {nome: "Arroz", preco: 4.15, quantidade: 15},
    {nome: "Feijão", preco: 5.99, quantidade: 7},
    {nome: "Café", preco: 24.50, quantidade: 5},
    {nome: "Fubá", preco: 2.99, quantidade: 20},
]

function calcularSubtotal(preco, quantidade){
    return preco * quantidade;
}

let total = 0;

carrinho.forEach(function(item){
    let subtotal = calcularSubtotal(item.preco, item.quantidade); 
    console.log(item.nome, "x", item.quantidade, "= R$", subtotal);
    total += subtotal; 
});

console.log("Total Original: R$", total);

let valorFinal = total;

if(total > 500){
    let desconto = total * 0.10;
    valorFinal = total - desconto;
    console.log("Desconto de 10%: R$", desconto);
    }

    console.log("Valor final: R$ ", valorFinal);

    