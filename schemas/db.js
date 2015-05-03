


var mongoose = require("mongoose"), 
    bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10;
    exports.mongoose = mongoose;

mongoose.connect('mongodb://cloudarchitect:bigdatainthecloud@ds031792.mongolab.com:31792/hpccdashboard',
  function(error){
  	if(error){
  		console.log(error);
  	} else{
  		console.log("Database Connected");
  	}
  });

var Schema = mongoose.Schema, ObjectID = Schema.ObjectID;

//initialize the schema for the user object
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true,  },
  jobs: { type: [], required: true, unique: true },
  admin: { type: Boolean, required: true, unique: true },
  FileSys: { type: String, required: true, unique: true },
  quota: { type: String, required: true, unique: true },
  used: { type: String, required: true, unique: true },
  utilizationPercentage: { type: String, required: true, unique: true }
});

//mongoose pre middleware, ensures the passwords are always hashed in the database before saving automatically
userSchema.pre('save', function(next){
  var user = this;
  
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//encapsulates password verification into user model
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

var userModel = mongoose.model('User', userSchema);
exports.userModel = userModel;

//initialize the schema for a job
var jobSchema = new Schema({
  jobID: { type: String },
  memRequested:  { type: String },
  memUsed: { type: String },
  utime: { type: String },
  cpuUsed: { type: String },
  efficiency: { type: String },
  user: { type: String },
  maxMemory: { type: String },
  swap_used: { type: String }
});

var jobModel = mongoose.model('Job', jobSchema);
exports.jobModel = jobModel;

