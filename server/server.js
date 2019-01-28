const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

const server = require("http").createServer(app);

server.listen(port);
