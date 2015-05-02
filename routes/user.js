
/*
 * GET users listing.
 */
 var mongoose = require("mongoose");
var db = require('../db');
var jobSchema= require("../schemas/job")
Job = mongoose.model("Job")



exports.list = function(req, res){
  res.send("respond with a resource");
};