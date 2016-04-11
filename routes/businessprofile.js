// =====================================
// Business PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
var BusinessProfile = require ('../models/businessprofileschema.js');

module.exports = function(isLoggedIn, app, passport) {

  app.get('/businessprofile', isLoggedIn, function(req, res) {
        res.render('businessprofile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

  app.post('/businessprofile', isLoggedIn, function(req, res){
  	var bs = new BusinessProfile();

  	//setting attributes
  	bs._id = req.user._id;
  	bs.business_name = req.body.business_name;
    bs.business_tel = req.body.business_tel;
    bs.business_email = req.body.business_email;
    bs.business_add1 = req.body.business_add1;
    bs.business_add2 = req.body.business_add2;
    bs.business_city = req.body.business_city;
    bs.business_state = req.body.business_state;
    bs.business_zip = req.body.business_zip;
    bs.business_country = req.body.business_country;
    bs.business_logo = req.body.business_logo;
    bs.save(function(err, bs){
    	if(err) throw err;
    });
    res.redirect('/businessservices');
});
};

// app.post('/businessprofile', function (req, res){
//   var form = new formidable.IncomingForm();
//   form.parse(req, function(err, fields, files) {
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.write('received businessprofile:\n\n');
//     res.end(util.inspect({fields: fields, files: files}));
//   });

//   form.on('end', function(fields, files) {
//     /* Temporary location of our uploaded file */
//     var temp_path = this.openedFiles[0].path;
//     /* The file name of the uploaded file */
//     var file_name = this.openedFiles[0].name;
//     /* Location where we want to copy the uploaded file */
//     var new_location = '../public/img/';

//     fs.copy(temp_path, new_location + file_name, function(err) {  
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("success!")
//       }
//     });
//   });
// });

// Show the upload form 
// app.get('/businessprofile', function (req, res){
//   res.writeHead(200, {'Content-Type': 'text/html' });
//   var form = '<form action="/businessprofile" enctype="multipart/form-data" method="post">Add a title: <input name="title" type="text" /><br><br><input multiple="multiple" name="businessprofile" type="file" /><br><br><input type="submit" value="Upload" /></form>';
//   res.end(form); 
// }); 
// }
