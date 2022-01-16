const {Router} = require('express');
const router = Router();


const bienvenida = (req, res) => {
    //console.log(req); 
    res.send('Bienvenido a nuestra a Aplicación');
};

const nómina = (req, res) => {
    const body = req.body;
    res.status(200).json({
        status: 'La nómina de todos los alumnos'});
        body
};

const insertar = (req, res) => {
    //console.log(req);    
    const body = req.body;
    res.status(200).json({
        status: 'Alumno insertado',
        body
    });
};

const borrar = (req, res) => {
    const body = req.body;
    res.status(200).json({
        status: 'Alumno eliminado',
        body
    });
};

const actualizar = (req, res) => {
    const body = req.body;
    res.status(200).json({
        status: 'Alumno actualizado',
        body
    });
};


module.exports = {
    bienvenida,
    nómina,
    insertar,
    borrar,
    actualizar,
};
/* ¡IMPORTANTE! El module.exports debe estar siempre en lineas posteriores 
a las funciones declaradas */