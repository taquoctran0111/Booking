let Sequelize = require("sequelize");

let sequelize = new Sequelize("booking_app", "root", "123456", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;