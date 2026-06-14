/*
Faça um programa que mostre duas notas de um aluno e calcule a média entre elas.

> Se média maior que 6.0 - "Aprovado"
> Se média menor que 6.0 - "Reprovado"

*/

let nota1 = 9.5, nota2 = 5.6

let media = (nota1 + nota2)/ 2

console.log("media: ", media)

if(media >= 8.0){
    console.log("Aprovado!")
}
else if(media < 5.0){
    console.log("Reprovado!")
}
else{
    console.log("Em recuperação!")
}


