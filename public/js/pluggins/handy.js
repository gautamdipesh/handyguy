//File Upload validation
$('#submit_btn').click(function(){
      var file = $('input[type=file]#business_logo').val();
      var exts = ['png','gif'];//extensions
      //the file has any value?
      if ( file ) {
        // split file name at dot
        var get_ext = file.split('.');
        // reverse name to check extension
        get_ext = get_ext.reverse();
        // check file type is valid as given in 'exts' array
        if ( $.inArray ( get_ext[0].toLowerCase(), exts ) > -1 ){
        //Do Nothing
        } else {
          alert( 'Invalid file Extension for LOGO file!' );
        }
      }
    });

