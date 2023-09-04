const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port}`);
});

