/*
 * GET login page (accepts users and admins).
 */

exports.login = function(req, res){
  res.render('login', { title: 'HPCL Dashboard User Login' });
};

