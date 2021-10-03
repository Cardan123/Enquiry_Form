// loading environment varibles
require("dotenv").config();

// import Server model
const Server = require("./models/server");

// initializing a server instance
const server = new Server();

// server start to listen requests
server.listen();
