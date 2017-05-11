var connection = require("./connection.js");


var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function() {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    console.log(queryString);
    connection.query(, function(err, result) {
      console.log(result);
    });
  },
  updateOne: function() {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(, function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;