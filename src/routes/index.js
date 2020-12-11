var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

// define the home page route
router.get('/', mainController.homePage);
// router.get('/', (req, res) => {
//   res.render('index', {title: 'my title', message: 'my message'})
// });


// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})


module.exports = router;