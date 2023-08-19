const express = require("express");
const http = require("http");
const fs = require("fs");
const { connectDB } = require("./db/dbconnection");
const bodyParser = require("body-parser")
const routes = require("./routes/v1");
const config = require("./config/config");

const app = express();

// database connection
connectDB()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// route namespace
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});
// server create
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`server is started PORT NO : ${config.port}`);
});