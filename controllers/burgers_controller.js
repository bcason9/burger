//set up dependencies

var express = require("express");
var burger = require("../models/burger");

var app = express();

//set up routes
app.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var resObj = {
      burgers: data
    };
    console.log(resObj);
    res.render("index", resObj);
      }
    );
});

app.post("/api/burgers", function(){
  burger.insertItem(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json({id: result.insertId})
    }
  );
});

app.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.updateItem({ devoured: req.body.devoured }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

app.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteItem(condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});





module.exports = app;
