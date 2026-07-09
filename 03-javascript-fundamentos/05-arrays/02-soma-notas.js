
/* Crie um array notas =[8,7,5,9,6]. Use um for para somar todas as 
notas e mostrar o total no final.
*/

let notas = [8,7,5,9,6];
let soma = 0;


for(let i = 0; i < notas.length; i++){
    soma += notas[i]; 
      
}

console.log("A soma total é: ", soma);

