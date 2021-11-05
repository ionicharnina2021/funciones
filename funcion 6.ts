var foo = (x: number) => 10 + x;
console.log(foo(100))      //outputs 110 
//Aunque puede haber mas de una sentencia en el cuerpo
var foos = (x: number) => {
    x = 10 + x;
    console.log(x);
}
foos(100)
//En este caso podemos ver como el par�metro no tiene un tipo concreto
//en la definicion
var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(12) 
func("Tom")
//Se omite el parentesis de los parametros
var display = x=> { 
   console.log("The function got "+x) 
} 
display(12)
//la que menos simbolos tiene
var minima = a => console.log(a);
minima(8);