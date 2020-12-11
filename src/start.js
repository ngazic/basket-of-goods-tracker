
// Start our app!
const app = require('./server');
const server = app.listen(app.get('port'), () => {
  console.log(`Gym tracker is listening on port: ${server.address().port}`);
});

