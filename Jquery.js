
$(function() {
    $('#signInForm').on('submit',function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username.trim()===''){
            // $('#textSignIN').show();
            $('#textSignIN').text("*Username must be filled");
        }
        else{
            $('#textSignIN').text("");
            // $('#textSignIN').hide();
        }
        const pass = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}/;
        if(password===''){
            $('#passwordSignIN').text("*Password missing");
        }
        else if (!pass.test(password)) {
            $('#passwordSignIN').text("*Strong passwrord (8 digit contain alphabet, numbers and special character ");
        } else {
            $('#passwordSignIN').text("");
        }
         

  });
});