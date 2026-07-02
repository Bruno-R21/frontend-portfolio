
/*
function conversor(a,b,c,d){
    return a*(b/c)+d;

}  

console.log(conversor(26,9,5,32));   
*/


function conversor(celsius){
    return (celsius * 9 / 5) + 32;
}  
let temp = conversor(26);

console.log(temp, "Fº");

