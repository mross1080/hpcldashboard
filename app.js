
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var login = require('./routes/login')
var admin = require('./routes/admin')
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var passport = require('passport'), 
LocalStrategy = require('passport-local').Strategy;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//define login strategy
passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({username: username }, function(err, user) {
      if(err) {return done(err);}
      if (!user) {
        return done(null, false, {message: "Incorrect username."});
      }
      if (!user.validPassword(password)) {
        return done(null, false, {message: 'Incorrect password.'})
      }
      return done(null, user);
    });
  }
));
app.use(passport.initialize());



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/login', login.login)
app.get('/admin', admin.admin)
app.post('/changeadminstatus', user.changeadminstatus)

app.post('/login', 
  passport.authenticate('local', { successRedirect: '/', 
                                  failureRedirect: '/login', 
                                  failureFlash: true}));



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
