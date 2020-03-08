let orm = require("../config/orm");
let burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(value, cb) {
    orm.insertOne("burgers", "burger_name", value, false, function(res) {
      cb(res);
    });
  },
  devour: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, id, function(res) {
      cb(res);
    });
  }
};
burger.all(results => {
  console.log(results);
});
module.exports = burger;
