// database connection configuration


//REVISAR ULTIMOS 15 MINTUOS DE LA CLASE 20


// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'pwi',
  password: 'La casa está en orden'
});

connection.connect(function (err) {
    if(err){
        console.log('Error en el intento de la conexión a DB');
        console.log('El error está en: ' + err.stack)
        return;
    }
    console.log('La conexión fue exitosa');
});

//connection.end();

module.exports = connection;