
var msg = function() { 
   return "hello world";  
} 
console.log(msg())
var res = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(res(12, 2)) 
var ress = function (a, b) {
   return a * b;
};
console.log(ress(12, 2));
//funcion constructor para JS permitia en TS
var myFunction = new Function("a", "b", "return a * b"); 
//var myFunction = new Function("a", "b", "{console.log('pongo lineas');return a * b;}"); 
var x = myFunction(4, 3); 
console.log(x);
