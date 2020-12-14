var express = require("express");
var router = express.Router();
var mainController = require("../controllers/mainController");

// define the home page route
router.get("/", mainController.homePage);

// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

router
  .route("/create-todo")
  .get(mainController.createTodo)
  .post(mainController.createTodo);


module.exports = router;
