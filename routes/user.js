
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

exports.changeadminstatus = function(req,res){
	console.log(req.body)
	User.findOne({username: req.body.user},function(err,user){
		console.log(user)
		if(req.body.privlige == 'grant'){
			user.admin = true;
		} else if (req.body.privlige == 'remove'){
		  user.admin = false;
	}

		user.save(function (err) {
        if(err) {
            console.error('ERROR!');
        } else{
        	res.redirect("admin")
        }
    });
	})
	
}