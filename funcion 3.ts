function addNumbers(...nums) {      
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)
//si usas rest no puede haber otros parametros
//function addTodo(...nums: any, nombre: string) { }
function addTodo(...varios) {
    var i;
    for (i in varios) {
        console.log(varios[i]);
    }
    //como seria con el for of?
}
addTodo(5, 6, true, "cosa", 3, 5.6, true, "locura");
//se puede poner el valor por defecto
function opcionales(primero: number, segundo: number = 9) {
    console.log("los valores son " + primero + " y " + segundo);
}
opcionales(80);
opcionales(8, 8);
//nunca podemos hacer opcional y default a la vez
//function cosaA(primerA?:number=9){}
