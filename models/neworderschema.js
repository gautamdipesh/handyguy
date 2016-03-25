var mongoose = require('mongoose');

//This is the schema for the Users(Small client Owners) to enter their 
var ClientProfile = mongoose.Schema({
    user_id : String,
    client_name : String,
    client_tel : String,
    client_email: String,
    client_add1: String,
    client_add2: String,
    client_city: String,
    client_state: String,
    client_zip: { type: Number, min: 0, max: 99999 },
    client_country: String,
    client_logo: String
    }
);


// create the model for users and expose it to our app
module.exports = mongoose.model('userclientInfo', ClientProfile);