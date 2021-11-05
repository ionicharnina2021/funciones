//recursividad en funcion nominal
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));      // outputs 720 
//funciona anonima recursiva 
var recu: any;
// Si no se ponen los parentesis no se agrupa todo para poder ejecutarlo
// la forma es (l que haga falta)()
(recu = function () { 
    var x = "Hello anonimo!!";  
        console.log(x)
 })()
//aunque es una trampita si queremos
//que se llame muchas veces
var recu: any;
(recu = function (limite) { 
    var x = "Hello!!";   
    limite--;   
    if (limite > 0) {
        recu(limite)      
        console.log(x)
    }    
})(4)   