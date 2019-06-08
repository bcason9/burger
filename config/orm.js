//set up dependencies
var connection = require("../config/connection");


function makeQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}



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
        "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + makeQuestionMarks(vals.length) + ") ";
  
      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) throw err;
        
        cb(res);
      });
    },
    updateItem: function(table, colVals, condition, cb) {
      dbQuery = "UPDATE " + table + " SET " + objToSql(colVals) + " WHERE " + condition;
  
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