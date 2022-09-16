const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config('./config.env');

const app = require('./app').default.default;

// database connection
const DB = process.env.DATABASE_REMOTE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then((con) => {
  console.log('Connected with', con.connection.db.namespace.toUpperCase());
});


// run server
const port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log('App Running At Port', port);
});
