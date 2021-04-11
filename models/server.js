const express = require('express');
const cors = require('cors');


class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Middlewares: funciones que añaden otras funcionalidades a mi webserver
        this.middlewares(); //como esta primero que rutas se muestra como principal
        
        //rutas de mi aplicacion
        this.rutas();
    }

    middlewares() {
        //paquete CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() ); //que guarde cualquier info que venga en post, put o delete

        //se que es un middleware cuando se usa el .use()
        //Directorio Publico
        this.app.use(express.static('public'));

    }

    rutas() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto:", process.env.PORT);
        })
    }
}


module.exports = Server;