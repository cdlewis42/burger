
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb){
    var queryString = "SELECT * FROM ??"
    connection.query(queryString,[tableInput], function(err,result){
      if (err) throw err
      cb(result)
    })
  },
  updateOne: function(table, columnName, condition, cb){
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?"
    connection.query(queryString,[table,columnName, condition], function(err,result){
      if (err) throw err
      cb(result)
    })
  },
  createOne: function(tableInput, columnName, value, cb){
    var queryString = "INSERT INTO ?? (??) VALUES(??)"
    connection.query(queryString,[tableInput,columnName, value], function(err,result){
      if (err) throw err
      cb(result)
    })
  }
}

module.exports = orm;
