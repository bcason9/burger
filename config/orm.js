//set up dependencies
var connection = require("../config/connection");

//database query--value assignemd based on action
var dbQuery;

//orm setup
var orm = {
    selectAll: function(table, cb) {
      dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) throw err;
        
        cb(res);
      });
    },
    insertItem: function(table, cols, vals, cb) {
      dbQuery =
        "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + vals.length + ") ";
  
      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) throw err;
        
        cb(res);
      });
    },
    updateItem: function(table, colVals, condition, cb) {
      dbQuery = "UPDATE " + table + " SET " + colVals + " WHERE " + condition;
  
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) throw err;
        cb(res);
      });
    },
    deleteItem: function(table, condition, cb) {
      dbQuery = "DELETE FROM " + table + " WHERE " + condition;
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) throw err;
        
        cb(res);
      });
    }
  };
  module.exports = orm;