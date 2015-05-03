/**
 * Module dependencies.
 */
var db = require('./schemas/db.js'),
    express = require('express'),
    http= require('http'),
    app = express(),
    authentication = require('./authentication.js'),
    routes = require('./routes');
    user = require('./routes/user');
    login = require('./routes/login')
    admin = require('./routes/admin')
    path = require('path');
    passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;

//necessary to configure express
app.configure(function(){
// all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.session({secret: 'big data in the cloud'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//setup routes
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/login', login.loginGet)
app.post('/login', login.loginPost);
app.get('/admin', admin.admin)
app.post('/changeadminstatus', user.changeadminstatus)

//begin server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// app.listen(3000, function(){
//   console.log("Express server listening on port 1337");
// });

