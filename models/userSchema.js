const mongoose	= require('mongoose');
const bcrypt	= require('bcryptjs');
const config	= require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
	name		: {
		type		: String
	},
	email		: {
		type		: String,
		required	: true
	},
	username	: {
		type		: String,
		required	: true
	},
	password	: {
		type		: String,
		required	: true
	}
});

//User collections
const User = module.exports = mongoose.model('User', UserSchema);

//GET user by ID
module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

//GET user by username
module.exports.getUserByUsername = function(username,callback){
	const query = {username : username};
	User.findOne(query, callback);
}

//ADD user
module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newUser.password, salt, (err, hash)=>{
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		})
	});
}

//Compare password
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err,isMatch)=>{
		if (err) throw err;
		callback(null, isMatch); //isMatch return true while match
	});
}