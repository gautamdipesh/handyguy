var mongoose = require('mongoose/');
var Schema = mongoose.Schema;
var UserDetail = new Schema({
	username : String,
	password : String,
	first_name : String,
	last_name : String
	},{
	collection : 'userInfo'}
);

var UserDetails = mongoose.model('userInfo', UserDetail);

module.exports = {
	userDetails : UserDetails
}
