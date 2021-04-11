require('dotenv').config(); //.congig para que agarre toda mi config que tengo en .env y...
//...establesca mis variables de entorno 
const Server = require('./models/server');


const server = new Server();

server.listen();

 
