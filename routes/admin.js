/*
 * GET admin page.
 */

exports.admin = function(req, res){
  res.render('admin', { title: 'HPCL Administrator Dashboard' });
};