var mongoose = require("mongoose");
mongoose.model("Job",{
	jobID: String,
	memRequested:  String,
	memUsed: String,
	directory: String,
	commandUsed: String,
	runTime: String,
	user: String
})