const express = require("express");
const cors = require("cors");
const dbConnection = require("../database/config");

class Server {
  // Constructor
  constructor() {
    this.app = express(); // Create an express application
    this.port = process.env.PORT; // Use environment variable PORT
    // Definition of paths
    this.paths = {
      mensajes: "/api/messages",
    };

    // connection to mongodb
    this.connectionDB();

    // Loading middleware
    this.middleware();

    // Loading routes
    this.routes();
  }

  async connectionDB() {
    // Connection with Database
    await dbConnection();
  }

  middleware() {
    // Loading cors
    this.app.use(cors());

    // Parse to JSON
    this.app.use(express.json());

    // Loading static files
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.mensajes, require("../routes/messages")); //import messages routes
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
