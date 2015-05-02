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
