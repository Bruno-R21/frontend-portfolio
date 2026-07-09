
/*
function validarLogin(usuario, senha){
    if(usuario === "admin" && senha === 1234){
        return true;
        } else{
        return false;
        } 
}
let resultado1 = validarLogin("abcd", 7269);

if(resultado1){
    console.log("Usuário e Senha: ", true);
    console.log("Login OK!");
   } else{
    console.log("Usuário e Senha: ", false);
    console.log("Acesso negado!");
   } 

   let resultado2 = validarLogin("admin", 1234);

   if(resultado2){
    console.log("Usuário e Senha: ", true);
    console.log("Login OK!");
   } else{
    console.log("Usuário e Senha: ", false);
    console.log("Acesso negado!");
   } 
   
   let resultado3 = validarLogin("casa", 1234);

   if(resultado3){
    console.log("Usuário e Senha: ", true);
    console.log("Login OK!");
   } else{
    console.log("Usuário e Senha: ", false);
    console.log("Acesso negado!");
   } 
   */

   function validarLogin(usuario, senha){
    return usuario === "admin" && senha === 1234
}
   if(validarLogin("abcd", 7269)){
   console.log("Login OK!");
   } else{
    console.log("Acesso negado!"); 
   }
    if(validarLogin("admin", 1234)){
   console.log("Login OK!");
   } else{
    console.log("Acesso negado!"); 
   } 
   if(validarLogin("casa", 1234)){
   console.log("Login OK!");
   } else{
    console.log("Acesso negado!"); 
   }




   
