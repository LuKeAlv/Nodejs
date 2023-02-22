const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        //Leido
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No he podido escribirlo', err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, function(err){
        if(err){
            console.log('Archivo no encontrado');
        }else{
            console.log('Eliminado correctamente');
        }
    })
}
//dirname es una instruccion de unix. Espera que su primer argumento
//sea el nombre de un fichero del sistema operativo
//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo1.txt', 'Soy un cacahuate', console.log);
borrar(__dirname + '/archivo1.txt',console.log);