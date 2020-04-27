var mysql = require("mysql")
require("dotenv").config()

var connection;
//Database is JawsDB on Heroku

//Database is local
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.username,
  password: process.env.password,
  database: "burgers_db"
});
}



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
