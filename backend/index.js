const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const jsonParser = bodyParser.json()

const app = express()
const PORT = 8797

let options = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "booking_app"
};

let sessionStore = new MySQLStore(options);

app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: true,
  saveUninitialized: false
}));

app.use(morgan("dev"))
app.use(bodyParser.json())
// app.use(expressValidator())


app.use("/hotels", require("./src/hotels/hotelControllers.js"))
app.use("/travels", require("./src/travels/travelControllers.js"))

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
})

module.exports = app;  