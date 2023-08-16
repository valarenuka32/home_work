const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config=require("./config/config");


const app = express();

// database connection
connectDB()

app.use("/v1",routes);

// server create
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});