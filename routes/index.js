
/*
 * GET home page.
 */

exports.index = function(req, res){

	User.findOne({username: "zjiang"},function(err,docs){
		console.log(docs.jobs)

		res.render('index', { user: docs, title: 'Your usage statistics' });

	})
};

