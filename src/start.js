const mongoose = require("mongoose");

// Import .env configuration
require("dotenv").config();

mongoose.connection.on("open", () => {
  console.log("Mongo DB connection established successfully");
});

mongoose.connection.on("error", () => {
  console.log("Eror establishing Mongo DB connection");
});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

// Start our app!
const app = require("./server");

const server = app.listen(app.get("port"), () => {
  console.log(`Gym tracker is listening on port: ${server.address().port}`);
});
