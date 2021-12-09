const http = require("http");
const express = require("express");
const cors = require("cors");
require("colors");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;

app.use(cors());
const UsersRepository = require("./repositories/users.pg");

const usersController = require("./controllers/users.controller");

const userRoutes = require("./routes/users.route");

const usersRepository = new UsersRepository();

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes(express, usersController(usersRepository)));

module.exports = app;
