var csv = require("fast-csv");
var mongoose = require("mongoose");
mongoose.model("Job",{
	jobID: String,
	memRequested:  String,
	memUsed: String,
	utime: String,
	cpuUsed: String,
	efficiency: String,
	user:String,
	maxMemory: String,
	swap_used: String
})




userInfo = []
Job = mongoose.model("Job")
// User = mongoose.model("User")
var Schema = mongoose.Schema, ObjectID = Schema.ObjectID;

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

var User = mongoose.model('User', userSchema);



mongoose.connect('mongodb://cloudarchitect:bigdatainthecloud@ds031792.mongolab.com:31792/hpccdashboard'

,function(error){
	if(error){
		console.log(error);
	} else{
// 		console.log("Database Connected");
	// 	Job.remove({},function(err){
	// 	console.log("Collection Removed")
	// })
	// Job.find({},function(err,docs){
	// 	console.log(docs)
	// })

	// User({
	// 	username: "ypark",
	// 	password: "password",
	// 	admin: false,
	// 	jobs: docs
	// })
	users = ["ypark", "zjiang"]
	// function seeJobs()

	User.remove({},function(err,docs){
		console.log("collection remobved")
	})


//   mongoose.connection.collections['User'].drop( function(err) {
//     console.log('collection dropped');
// });
  // User.dropIndex()

	// console.log(Job.where("user",""))
//  //  for(i in users){
//  //  	console.log(users[i])

   // seedUsers(users[0])


  

}

})



function seedUsers(username){
  	Job.where("user",username).find(function(err,docs){
			User({
		username: username,
		password: "password",
		admin: false,
  FileSys: "nethome",
  quota: "256000",
  used: "187494",
  utilizationPercentage: '73',
		jobs: docs
	}).save( function( err, doc, count ){
					  	if(err){
					  		console.log(err);
					  	} else{

					  	 console.log(doc);
					    }
					  });
		})
  }


function seedJobs(){

		 csv
 			.fromPath("job.report.sample.csv")
 			.on("data", function(data){

 				Job({
 						jobID: data[0],
						memRequested:  data[49],
						memUsed: data[46],
						utime: data[53],
						cpuUsed: data[52],
						efficiency: data[55],
							swap_used: data[47],
						user: data[6],
			     jobName: data[29],
			     maxMemory: data[48]
 				}).save( function( err, doc, count ){
					  	if(err){
					  		console.log(err);
					  	} else{

					  	 console.log(doc);
					    }
					  });
		   
 				})
 				.on("end", function(){
     				console.log("done");
 				});


	}
