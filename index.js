const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const Port = 3000;



app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/api/registros', require('./routes/registros'))


//Configuración del motor de plantillas handlebars (hbs)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
});

app.on('error', (err) => {
    console.log('Error en la ejecución del servidor: ${error}');
}); 