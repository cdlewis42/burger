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
  burger.createOne(newBurger,function(data){
      res.redirect("/")
    } 
  )
});


// put route -> back to index

router.put("/api/burgers/:id", function(req, res) {
  var id =  req.params.id;

  burger.updateOne(id, function(result) {
    console.log(result)
    res.sendStatus(200)
  });
});


module.exports = router;
