
let turma = [
    {nome: "Marcos", nota: 5.6},
    {nome: "Daniele", nota: 7.2},
    {nome: "Isabele", nota: 4.8},
    {nome: "Daniel", nota: 6.7},
    {nome: "Júia", nota: 9.1},
]
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

console.log("\n=============== BOLETIM ESCOLAR ===============\n");

for(let i = 0; i < turma.length; i++){

    console.log("Nome: ", turma[i].nome);
    console.log("Nota: ", turma[i].nota);

    if(turma[i].nota >= 7){
        console.log("Situação: Aprovado!");
        aprovados ++;
    }else if(turma[i].nota >= 5){
        console.log("Situação: Recuperação!");
        recuperacao ++;
    }else{
        console.log("Situação: Reprovado!");
        reprovados ++; 
    }       
}
console.log("\n*********************************************\n");
console.log("Total de aprovados: ", aprovados);  
console.log("Total de recuperação: ", recuperacao);
console.log("Total de reprovados: ", reprovados);
console.log("\n*********************************************");