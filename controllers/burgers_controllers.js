const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.devour(req.params.id, function(result) {
    res.send("");
  });
});

module.exports = router;
