/*
 * GET admin page.
 */

 var mongoose = require("mongoose");
var db = require('../db');
var jobSchema= require("../schemas/job")
Job = mongoose.model("Job")



exports.admin = function(req, res){

	Job.find({},function(err,docs){
		// res.render('admin', { jobs: docs, title: 'HPCL Administrator Dashboard' });
		console.log(docs)
	})
  
};