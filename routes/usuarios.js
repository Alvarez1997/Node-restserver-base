const {Router} = require('express'); //desestructurar 
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet); //estan definidos en usuarios.js controllers

router.put('/:id', usuariosPut); //:id viene de express server 

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;