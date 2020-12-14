const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  title: String,
  body: String,
  date: {type: Date, default: Date.now}
});


const toDoModel = mongoose.model('ToDo', toDoSchema);
module.exports = toDoModel;