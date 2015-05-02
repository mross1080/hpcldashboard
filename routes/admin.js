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
		for(i in docs){
			console.log(docs[i].username)
		}
		res.render('admin', { users: docs, title: 'HPCL Administrator Dashboard' });

	})
  
};

