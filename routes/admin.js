/*
 * GET admin page.
 */

var mongoose = require("mongoose");
var db = require('../db');
var jobSchema= require("../schemas/job")
var userSchema = require("../schemas/user")
Job = mongoose.model("Job")
User = mongoose.model("User")



exports.admin = function(req, res){

	User.find({},function(err,docs){
		console.log(docs)
	})

  console.log(userInfo)


	// Job.find({}},function(err,docs){
	// 	res.render('admin', { jobs: docs, title: 'HPCL Administrator Dashboard' });
	// 	console.log(docs)
	// })
  
};

