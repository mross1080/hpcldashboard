/*
 * GET admin page.
 */

var db = require('../schemas/db.js');
var Job = db.jobModel;
var User = db.userModel;

exports.admin = function(req, res){

	User.find({},function(err,docs){
		console.log(docs)
		for(i in docs){
			console.log(docs[i].username)
		}
		res.render('admin', { users: docs, title: 'HPCL Administrator Dashboard' });

	})
  
};

