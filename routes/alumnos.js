const {Router} = require('express');
const router = Router();
module.exports = router;

const {
    bienvenida,
    nómina,
    insertar,
    borrar,
    actualizar
} = require('../controllers/alumnos');



/* router.all('/', (req, res, next) =>{
    console.log('La petición paso primero por aquí');
    next();
}); */

router.get('/bienvenida', bienvenida);

router.get('/nómina', nómina);

router.post('/insertar', insertar);
    
router.delete('/borrar', borrar);

router.put('/actualizar', actualizar);
    

