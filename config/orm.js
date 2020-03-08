let connection = require("../config/connection.js");

const orm = {
  selectAll: function(table, cb) {
    const query = "SELECT * FROM ??";
    connection.query(query, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function(table, column, value, boolean, cb) {
    const query = "INSERT INTO ?? SET ?? = ?";
    connection.query(query, [table, column, value, boolean], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function(table, column, value, id, cb) {
    const query = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(query, [table, column, value, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};
// orm.updateOne("burgers", "burger_name", "bacon burger", 3, cb => {
//   console.log(cb);
// });

module.exports = orm;
