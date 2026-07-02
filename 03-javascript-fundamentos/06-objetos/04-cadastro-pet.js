
let pet = [
    {nome: "Ralf", especie: "Cachorro,", idade: 13, vacinado: true},
    {nome: "Mel", especie: "Gato,", idade: 8, vacinado: false},
    {nome: "Tiririca", especie: "Papagaio,", idade: 9, vacinado: true},    
]
    console.log("\n*************** CADASTRO PET - DADOS DO ANIMAL ***************\n");

for(let i = 0; i < pet.length; i++){
    console.log("Especie: ", pet[i].especie, "Idade: ", pet[i].idade, "anos.");
    if(pet[i].vacinado === true){        
        console.log("Parabéns! O(A) pet", pet[i].nome,", está com as vacinas em dia.\n");
    } else{
        console.log("Que vacilo, mané! O(A) pet", pet[i].nome,", não está com as vacinas em dia.\n");    
    }
}
console.log("\n===================================================================\n");

