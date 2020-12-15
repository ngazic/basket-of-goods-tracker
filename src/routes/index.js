const express = require("express");

const router = express.Router();
const mainController = require("../controllers/mainController");

// define the home page route
router.get("/", mainController.homePage);

// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

router
  .route("/create-todo")
  .get(mainController.createTodo)
  .post(mainController.createTodo);

module.exports = router;
