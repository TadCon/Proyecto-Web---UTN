// Servidor creado con Express
const express = require('express');
const app = express();
const Port = 3000;
const {connection} = require('./db/config');

//Middleware: connects and communicates the apps
app.use(express.json()); //this lines alouds express to read other archives
app.use(express.static('public'));
app.use('/api/alumnos', require('./routes/alumnos'))

/* app.use('/api/administrativos', require('./routes/administrativos'))
app.use('/api/calendario', require('./routes/calendario'))
app.use('/api/calificaciones', require('./routes/calificaciones'))
app.use('/api/cuotas', require('./routes/cuotas'))
app.use('/api/directivos', require('./routes/directivos'))
app.use('/api/docentes', require('./routes/docentes'))
app.use('/api/padres', require('./routes/padres')) */


//Port configuration
app.listen(Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
});

app.on('error', (err) => {
    console.log('Error en la ejecución del servidor: ${error}');
}); 

// Tarea
/* CLASE 20 HORA 02:01:44
continuar con la tarea a partir del punto 2
ver 2:03:00, revisión de los ejercicios */

app.get('/', (req, res) => {
/*     res.setHeader('Content-Type', 'text/html');
 */    res.end('<h1 style="color: blue; text-align: center; font-size: 40px;">Bienvenidos al servidor express</h1>')
});

let visitas = 0;
app.get('/visitas', (req, res) => {
    res.send('La cantidad de visitas es: ' + visitas++);
    console.log('2');
});

app.get('/fyh', (req, res) => {
    res.send(new Date());
    console.log('3');
});
//


