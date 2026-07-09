/*
Crie um programa que para cada aluno, mostre o nome, a nota e a situação 
(Aprovado se a nota >= 7, recuperação entre 5 e 7, Reprovado se <5).
No final, mostre quantos foram aprovados, quantos estão em recuperação e 
quantos foram reprovados.
*/

let alunos=["João", "Maria", "Pedro", "Ana", "Carlos"];
let notas=[8,5,4,9,6];
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

console.log("\n************ Boletim Escolar ***********");

for(let i = 0; i < alunos.length; i++){
    
    console.log("Aluno: ", alunos[i]);  
    console.log("Nota: ",notas[i]);  
    
    let situacao;
    
    if(notas[i] >= 7){
        situacao = "Aprovado";
        aprovados ++; 
      } else if(notas[i] >= 5){
        situacao = "Recuperação";
        recuperacao ++;
      } else{
        situacao = "Reprovado";
        reprovados ++;        
      }
    
      console.log("Situação: ", situacao);
      console.log("**************************************")
    }    

console.log("\nTotal de aprovados:", aprovados);
console.log("Total em recuperação:", recuperacao);
console.log("Total de reprovados:", reprovados);
console.log("\n------------------------------------------\n");
