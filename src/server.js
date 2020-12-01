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


module.exports = app;
