function hola(nombre,micallback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        micallback();
    }, 1000);
}
function adios(nombre, otroCallback){
    setTimeout(()=>{
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}
console.log('Iniciando');
hola('Luis',function (){
    adios('Luis', function(){
        console.log('Terminando Proceso');
    })
});
