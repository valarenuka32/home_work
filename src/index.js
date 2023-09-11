const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
const config = require("./config/config");
const routes = require("./routes");
const { connectDB } = require("./db/dbconnection");

// Database connection
connectDB()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// route namespace
app.use("/v1", routes);
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port}`);
});

