var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb){
        orm.selectAll("burger_name", function(res){
            cb(res)
        })
    },
     updateOne: function(cb){
         orm.updateOne("burgers", "burger_name", "id", function(res){
             cb(res)
         })
     },
     createOne: function(cb){
         orm.createOne("burgers","burger_name", "devoured",function(res){
             cb(res)
         })
}
}

module.exports = burger;
