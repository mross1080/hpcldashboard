
/*
 * GET home page.
 */

var db = require('../schemas/db.js');
var User = db.userModel;
var job = db.jobModel;

exports.index = function(req, res){


	db.userModel.findOne({username: "zjiang"},function(err,docs){
		//console.log(docs.jobs);
    

		res.render('index', { user: docs, title: 'Your usage statistics' });

	})
};

