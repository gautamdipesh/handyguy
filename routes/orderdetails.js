// =====================================
// New Order SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
var BusinessServices = require ('../models/businessservicesschema.js');
var OrderDetails = require('../models/orderdetails.js');



module.exports = function(isLoggedIn, app, passport) {



  app.get('/orderdetails', isLoggedIn, function(req, res) {

    var services = [];
    BusinessServices.find({'user_id' : req.user.id}, function(err, businessServ){
      console.log("the business businessServ is")
      console.log(businessServ);
      res.render('orderdetails.ejs', {
            user : req.user, // get the user out of session and pass to template
            services : businessServ
        });

    });
  });

  app.post('/orderdetails', isLoggedIn, function(req, res){
    console.log(req.body);
    var services = [];
    // if(req.body){
    //  for (var key in req.body){
    //     if(key.indexOf("__") !== -1){
    //       if ()
    //       var s_key = key.split("__")[1]
    //     }
    //  }
    // }

  	// var bs = new orderdetails();

  	// //setting attributes
  	// bs.user_id = req.user._id;
  	// bs.client_name = req.body.client_name;
   //  bs.client_tel = req.body.client_tel;
   //  bs.client_email = req.body.client_email;
   //  bs.client_add1 = req.body.client_add1;
   //  bs.client_add2 = req.body.client_add2;
   //  bs.client_city = req.body.client_city;
   //  bs.client_state = req.body.client_state;
   //  bs.client_zip = req.body.client_zip;
   //  bs.client_country = req.body.client_country;

   //  bs.save(function(err, clientProfile){
   //  	if (err)
   //                      throw err;
   //  });
    res.redirect('/');
  });
};
