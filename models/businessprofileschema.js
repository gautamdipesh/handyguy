var mongoose = require('mongoose');

//This is the schema for the Users(Small Business Owners) to enter their 
var BusinessProfileSchema = mongoose.Schema({
    _id : String,
    business_name : String,
    business_tel : String,
    business_email: String,
    business_add1: String,
    business_add2: String,
    business_city: String,
    business_state: String,
    business_zip: Number,
    business_country: String,
    business_logo: String
    }
);


// create the model for users and expose it to our app
module.exports = mongoose.model('BusinessProfile', BusinessProfileSchema);