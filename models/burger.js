//set up dependenies
var orm = require("../config/orm");

//set up models to use orm stuff
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertItem: function(cols, vals, cb) {
    orm.insertItem("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateItem: function(colVals, condition, cb) {
    orm.updateItem("burgers", colVals, condition, function(res) {
      cb(res);
    });
  },

  deleteItem: function(condition, cb) {
    orm.deleteItem("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;