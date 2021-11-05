// una funcion que retorna una funcion fatarrow
function elige(opcion: boolean) {
    if (opcion)
        return (letrero?) => console.log(letrero);
    else return () => console.log("nada");    
}
var verdadera = elige(true);
var falsa = elige(false);
verdadera("dime");
falsa();