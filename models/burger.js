var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb){
        orm.selectAll("burger_name", function(res){
            cb(res)
        })
    }
}

module.exports = burger;
