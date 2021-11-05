//functions
function test() { };
function testDos(): void { };
function testTres(): any { return 23; };
//darle un valor por defecto a un parametro es como decir
//que es opcional
function testCuatro(p: string, s: any, t = 10): string { return 'jo' + t };
function testSeis(p: string, s: any, t?: number): string { return p };
//como no se utiliza la opcionalidad quita la posibilidad
//de un valor por defecto
//function testSiete(p?= 12): void{}

function testSiete(p?: number): void{ }
//cuando no se cuantos parametros
function testOcho(mes: string, ...r: any[]): boolean{
    console.log(mes);
    console.log(r);
    return false;
}

//hacemos las llamadas
console.log(testTres());
testOcho('primero');
testOcho('segundo', 12, 12);
testOcho('tercero', 23, 'felix', false);