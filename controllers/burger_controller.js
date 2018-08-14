var express = require("express")
var burger = require("../models/burger.js")
// var connection = require("../config/connection.js")
var router = express.Router()

// Create routes
// ----------------------------------------------------
// Index Redirect



// router.get("/", function (req, res) {
//   console.log("home path: " + res)
//     res.render("index");
//   });
  
  
  // Index Page (render all burgers to DOM)
  router.get("/", function (req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {burgers: data};
        res.render('index', hbsObject);
    });
  });
  
  
  // Create a New Burger
  router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('index');
    });
  });
  
  
  // Devour a Burger
  router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('index');
    });
  });
  // ----------------------------------------------------
  
  
  // Export routes
  module.exports = router;