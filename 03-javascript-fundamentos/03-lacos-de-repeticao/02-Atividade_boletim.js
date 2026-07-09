// Exercício integrador - Boletim escolar

let totalAlunos = 5;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;
let somaMedias = 0;
// let nota1, nota2;

console.log("\n============== BOLETIM ESCOLAR - TURMA FRONT-END ==============\n");

for (let i = 1; i <= totalAlunos; i++) {
    
// "Automatizando as notas 1 e 2."
   let nota1 = Math.round(Math.random()*10)
   let nota2 = Math.round(Math.random()*10)


   /*  if(i == 1){
        nota1 = 6, nota2 = 5; 
    } else if(i == 2){
        nota1 = 9, nota2 = 6.5;
    } else if(i == 3){
        nota1 = 4.5, nota2 = 5;
    } else if(i == 4){
        nota1 = 3, nota2 = 8;
    } else {
        nota1 = 3, nota2 = 4.2;
    }     
    */          
    let media = (nota1 + nota2) / 2;
    somaMedias += media;

    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
        aprovados++;
    } else if (media >= 5) {
        situacao = "Recuperação";
        recuperacao++;
    } else {
        situacao = "Reprovado";
        reprovados++;
    }

    console.log("Aluno:", i);
    console.log("1ª nota:", nota1, "2ª nota:", nota2);    
    console.log("Média:", media);
    console.log("Situação:", situacao);
    console.log("------------------------------------------");
}

let mediaGeral = somaMedias / totalAlunos;

console.log("Total de aprovados:", aprovados);
console.log("Total em recuperação:", recuperacao);
console.log("Total de reprovados:", reprovados);
console.log("Média geral da turma:", mediaGeral);
console.log("\n------------------------------------------\n");

if (mediaGeral >= 6) {
    console.log("Turma com bom desempenho!");
} else {
    console.log("Turma precisa de atenção!");
}
console.log("\n------------------------------------------\n");