/*
 * login page (accepts users and admins).
 */
var passport = require('passport');

exports.loginGet = function(req, res) {
  res.render('login', { user: req.user, message: req.session.messages});
};

exports.loginPost = function(req, res, next) {
  res.redirect('/')
  // passport.authenticate('local', function(err, user, info) {
  //   if (err) { return next(err) }
  //   if (!user) {
  //     req.session.messages =  [info.message];
  //     return res.redirect('/login')
  //   }
  //   req.logIn(user, function(err) {
  //     if (err) { return next(err); }
  //     return res.redirect('/');
  //   });
  // })(req, res, next);
};





























// var mongoose = require("mongoose");
// var db = require('../db');
// var userSchema = require("../schemas/user")
// var User = mongoose.model("User")
// var passport = require("passport");

// exports.loginGet = function(req, res){
//   if(req.user){
//     // already logged in
//     res.redirect('/');
//   } else {
//     // not logged in, show the login form, remember to pass the message
//     // for displaying when error happens
//     res.render('login', { title: 'HPCL Dashboard User Login' });
//     // and then remember to clear the message
//     //req.session.messages = null;
//   }
// };

// exports.loginPost = function(req, res, next) {
//   // ask passport to authenticate
//   passport.authenticate('local', function(err, user, info) {
//     if (err) {
//       // if error happens
//       return next(err);
//     }
    
//     if (!user) {
//       // if authentication fail, get the error message that we set
//       // from previous (info.message) step, assign it into to
//       // req.session and redirect to the login page again to display
//       //req.session.messages = info.message;
//       return res.redirect('/login');
//     }

//     // if everything's OK
//     req.logIn(user, function(err) {
//       if (err) {
//         //req.session.messages = "Error";
//         console.log("Error");
//         return next(err);
//       }

//       // set the message
//       //req.session.messages = "Login successfully";
//       console.log('Login successfully');
//       return res.redirect('/');
//     });
    
//   })(req, res, next);
// };

