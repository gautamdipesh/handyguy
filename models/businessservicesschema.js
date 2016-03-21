var mongoose = require('mongoose');

//This is the schema for the Services that the Small Business Owners enter 

var BusinessServices = mongoose.Schema({
    user_id : String,
    serviceName : String,
    serviceAmount: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('userBusinessServices', BusinessServices);