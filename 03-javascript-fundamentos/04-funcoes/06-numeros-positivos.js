
let numeros = [-5, 10, -3, 8, 0, -7, 15, 2];
let positivos = 0;
let negativos = 0;
let neutro = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        positivos++;
    } else if(numeros[i] < 0){
        negativos++;
    } else{
        neutro++;
    }
}

console.log("Positivos: ", positivos);
console.log("Negativos: ", negativos);
console.log("Neutro: ", neutro);


