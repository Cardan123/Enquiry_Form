const express = require('express') ;
const cors = require('cors') ;


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            mensajes : '/api/mensajes'
        }
        
        this.middleware();

        this.routes();

    }

    middleware(){
        this.app.use(cors());

        this.app.use(express.json());
    
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.mensajes,require('../routes/mensajes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }

}

module.exports = Server;