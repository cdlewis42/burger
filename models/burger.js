var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
     updateOne: function(cb){
         orm.updateOne("burgers", ["devoured", "id"], [true,id],function(res){
             cb(res)
         })
     },
     createOne: function(newBurger, cb){
         orm.createOne("burgers",["burger_name", "devoured"],[newBurger, false],function(res){
             cb(res)
         })
}
}

module.exports = burger;
