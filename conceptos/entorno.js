//Configuracion de variables de entorno de Node.js
//Las varaibles de NODE se ponen en mayusculas ya que son de entorno
let nombre = process.env.NOMBRE || 'Kike';
let web = process.env.WEB || 'Kike_Imi';
console.log(`Hola ${nombre}`);
console.log(`Mi pagina es ${web}`);