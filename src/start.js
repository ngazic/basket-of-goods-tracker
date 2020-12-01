console.log('YOU STARTED ME');
console.log('this works');

// Start our app!
const app = require('./server');
const server = app.listen(app.get('port'), () => {
  console.log(`Gym tracker is listening on port: ${server.address().port}`);
});

