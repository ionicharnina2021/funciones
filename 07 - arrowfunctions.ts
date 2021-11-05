//arrowfunctions
//en la funcion le decimos que el comportamiento que seguimos
//es el de settimeout 
//lo curioso de aqui es perder el cambio de scope o ambito
//de javascript
var messenger = {
    message: 'hola peque', start: function () {
        setTimeout(() => { alert(this.message); }, 2000);
    }
}

messenger.start;