var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {
      burger_data: data
    });
  });
});

// post route -> back to index
router.post("/api/burgers", function(req, res) {
  var newBurger = req.body.burger_name
  burger.createOne(
    newBurger,function(data){
      res.redirect("/")
    } 
  )
});


// put route -> back to index

router.put("/api/burgers/:id", function(req, res) {
  var id =  req.params.id;

  burger.updateOne(id, function(result) {
    console.log(result)
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
