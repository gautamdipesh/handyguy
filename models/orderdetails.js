var mongoose = require('mongoose');

//This is the schema for the Users(Small client Owners) to enter details
// about what customers want. 
var OrderDetail = mongoose.Schema({
    user_id : String,
    Service : Array,
    add_service: String,
    add_service_amt: String,
    notes: String,
    service_date: String,
    order_pics: String
    }
);


// create the model for users and expose it to our app
module.exports = mongoose.model('OrderDetail', OrderDetail);