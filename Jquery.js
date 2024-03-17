
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
            $('#passwordSignIN').text("*Weak passwrord (8 digit contain alphabet, numbers and special character ");
        } else {
            $('#passwordSignIN').text("");
        }
         });
         $('#signUpForm').on('submit',function(e) {
            e.preventDefault();
            var fullName = $('#fullName').val();
            var email = $('#email').val();
            var username = $('#usernameSignUp').val();
            var password = $('#passwordSignUp').val();
            var confirmPassword = $('#confirmPassword').val();
            var age = $('#age').val();
            var address = $('#address').val();
            
            if (fullName.trim() === '') {
                $('#textSignUP').text("*Name must be filled");
            } else {
                $('#textSignUP').text("");
            }
            var em = /^\s*[a-zA-Z0-9\.]+[@]+[a-z]+[\.]+[a-z]{3}/;
            if(email===''){
                $('#emailSignUP').text('*Email is required');
            }
            else if (!em.test(email)) {
                $('#emailSignUP').text('*Write in email format');
            } else {
                $('#emailSignUP').text('');
            }
            if (username.trim()===''){
                // $('#textSignIN').show();
                $('#textUSignUP').text("*Username must be filled");
            }
            else{
                $('#textUSignUP').text("");
                // $('#textSignIN').hide();
            }
            const pass = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}/;
            if(password===''){
                $('#passSignUP').text("*Password missing");
            }
            else if (!pass.test(password)) {
                $('#passSignUP').text("*Weak passwrord (8 digit contain alphabet, numbers and special character ");
            } else {
                $('#passSignUP').text("");
            }
            if (password !== confirmPassword) {
                $('#conSignUP').text('*Password does not match');
            } else {
                $('#conSignUP').text('');
            }
            var ag = /^[0-9]{2}$/;
            if(age===''){
                $('#ageSignUP').text('*age is required');
            }
            else if (!ag.test(age)) {
                $('#ageSignUP').text('*WRONG INPUT (age must be between 0-99');
            } else {
                $('#ageSignUP').text('');
            }
            if (address.trim() === '') {
                $('#addrSignUP').text('*address is required');
            } else {
                $('#addrSignUP').text('');
            }
             });
});