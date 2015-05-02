var mongoose = require("mongoose");
mongoose.model("User",{
	username: String,
	password: String,
	jobs: [],
	admin: Boolean
})