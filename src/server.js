var express = require("express");
var cors = require("cors");
var app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;

//Set middlewares
app.use(cors());
app.use(express.json());

//Set app properties
app.set("title", "Gym Tracker");
app.set('port', port);

app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine

app.get("/", (req, res) => {
  console.log("requesting app ");
  // res.end("hello from my first node app");
  res.json(
    JSON.stringify({
      gaza: "my name is gaza",
      msg: "thank you for learning node ",
    })
  );
});

app.get("/index", (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});


module.exports = app;
