//dependencies
var mysql = require("mysql");

//connection info
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

  //connect to db
  connection.connect(function(err) {
      if (err) throw err;

      console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;