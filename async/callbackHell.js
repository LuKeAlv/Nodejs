function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

//Una funcion que recibe como parametro otra funcion 
//Cuya accion de la funcion ya viene definida dentro de la funcion
//que se recibe como parametro
function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
}
// -- 
console.log('Iniciando...');
hola('Luis', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso Terminado')
    });
})
    // hablar(()=>{
    //     hablar(()=>{
    //         hablar(()=>{
    //             adios('Luis', function(){
    //                 console.log('Terminando...');
    //             });
    //         })
    //     });
    // });

