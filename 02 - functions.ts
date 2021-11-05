function nombreFuncion(uno: number, dos: number): number{
    return uno + dos;
}

console.log(nombreFuncion(3, 3));

function nombreMayor(uno: number, dos: number): number{
    if (uno == dos) {
        return uno;
    }   
    else {
        return dos;
    } 
}

console.log(nombreMayor(4, 5));