//Como podemos ver el generico no decide el tipo en compilaci�n
function cosa<T>(arg: T) {
    return arg;
}
alert(cosa<string>("ahora si"));
//pongamos lo mismo sin genericos
function cosas(arg) {
    return arg;
}
alert(cosas("asi tambien"));
//observa la diferencia entre TS y JS. El uso de 
//any es obligatorio para TS en la 2� forma pero no en la 1�
//no se si he dicho que puede retornarse una funcion
function nombre(aceptar:boolean) {
    var nombreA = 'novale';
    if (aceptar)
        return function (algo: boolean) {
            if (algo) return "cosa";
        }
    else
        return nombreA;
}
var valor = nombre(true);
var valord = nombre(false)
console.log(valor);
console.log(valord);
//no puede hacerse porque no existe la certeza de que retorne una 
//funcion e incluso JS no sabe que quieres decir
//console.log(valor(true));
