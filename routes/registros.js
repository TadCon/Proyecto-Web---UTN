

/*  
    Responde a la Ruta /api/registros
*/
const { Router } = require('express');
const router = Router();
const { 
    inicio,
    all,
    mostrarFormulario,
    createRegistro,
} = require('../controllers/registros');


router.get('/', inicio);
router.get('/todos', all);
router.get('/ingresar', mostrarFormulario);
router.post('/ingresar', createRegistro);


module.exports = router;





