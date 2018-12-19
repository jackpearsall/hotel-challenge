const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, (err) => {
  if (err) {
    throw err;
  }

  app.listen(3000, () => {
    console.log('http://localhost:3000');
  });
});
