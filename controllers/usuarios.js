const {response, request} = require('express');


const usuariosGet = (req, res) => {
    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {
    //const id = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosPost =  (req, res) => {
    //REVISAR EN POSTMAN
    //const body = req.body;
    const {nombre, edad, apellido} = req.body; //desestructurar solo lo que necesito

    res.json({
        msg: 'post API - controlador', //, body (para ver todo el json)
        nombre,
        apellido,
        edad 
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
}