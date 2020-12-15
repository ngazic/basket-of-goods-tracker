const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes/index.js");

require("dotenv").config();

const port = process.env.PORT || 3000;

// Set middlewares
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json()); // handle REST API call as json
app.use(express.urlencoded({ extended: true }));// handle form submit request

// Use routers
app.use(router);

//= ==========Set app properties=================

app.set("title", "Gym Tracker");
app.set("port", port);

// view engine setup
app.set("views", path.join(__dirname, "views"));
// app.set('views', './views') // specify the views directory
app.set("view engine", "pug"); // register the template engine

module.exports = app;
