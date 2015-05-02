var mongoose = require("mongoose");

mongoose.connect('mongodb://cloudarchitect:bigdatainthecloud@ds031792.mongolab.com:31792/hpccdashboard'

,function(error){
	if(error){
		console.log(error);
	} else{
		console.log("Database Connected");

	}})