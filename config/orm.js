let connection = require("../config/connection.js");

const orm = {
  selectAll: function(cb) {
    const query = "SELECT * FROM burgers";
    connection.query(query, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function(burger, cb) {
    const query =
      "INSERT INTO burgers (burgers_name, devoured) VALUES (?, FALSE)";
    connection.query(query, burger, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function(burgerID, cb) {
    const query = "";
  }
};

module.export = orm;
