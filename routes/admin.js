/*
 * GET admin page.
 */

Job = mon

exports.admin = function(req, res){

	Job.find({},function(err,docs){
		res.render('admin', { jobs: docs, title: 'HPCL Administrator Dashboard' });

	})
  
};