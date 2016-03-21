var mongoose = require('mongoose');

//This is the schema for the Users(Small Business Owners) to enter their 
var BusinessProfile = mongoose.Schema({
    user_id : String,
    business_name : String,
    business_tel : String,
    business_email: String,
    business_add1: String,
    business_add2: String,
    business_city: String,
    business_state: String,
    business_zip: { type: Number, min: 0, max: 99999 },
    business_country: String,
    business_logo: String
    }
);


// create the model for users and expose it to our app
module.exports = mongoose.model('userBusinessInfo', BusinessProfile);