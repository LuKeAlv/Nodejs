function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3+z;
}

function sRA(cb){
    setTimeout(function(){
        try{
            return 3+z;
        }catch(err){
            console.error('Error en asincronca');
            cb(err);
        }
    });
}

try{
    // otraFuncion();
    sRA(function(err){
        console.log(err.message);
    });
//Sirve para encapsular un error y que no se rompa la aplicacion
}catch(err){
    console.error('Ta jodido');
    console.error(err.message);
}