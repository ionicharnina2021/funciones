var array = [6, 5, 2, 8, 4, 9];
array.forEach(element => {
    var found = array.find(cosa => cosa > element);
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
    var found2 = array.findIndex(cosa => cosa === element);
    console.log(element + " " + found + " " + found2);
});  
// El find solo funciona con es2015
// https://johnpapa.net/es5-es2015-typescript//
// http://www.aprendiendonodejs.com/2012/03/que-es-un-polyfill.html
//Es el nuevo nombre de es6