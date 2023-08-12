const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbconnection");
const config=require("./config/config")

const app = express();

// database connection
connectDB()

// server create
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});