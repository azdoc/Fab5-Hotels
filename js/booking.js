$(function(){
   var $bookingform= $("#booking");// get form object using id
   if($bookingform.length){  //check length of the form object
       $bookingform.validate({
           rules:{
               first_name:{
                   required:true
               },
               last_name:{
                required:true
            },
            phone:{
                required:true
            },
            country:{
                required:true
            },
            address:{
                required:true
            },
            city:{
                required:true
            },
            zip:{
                required:true
            },
            emailraj:{
                required:true,
                emailraj:true
            },
            password:{
                required:true
                
            },
            password_confirmation:{
                required:true,
                equalTo:'#password'
            }
            
           },
           messages:{
               first_name:{
                   required:"Please enter your first name!",
                   
               },
               last_name:{
                required:"Please enter your last name!"
            },
            phone:{
                required:"Please enter your phone number!"
            },
            country:{
                required:"Please enter your country!"
            },
            address:{
                required:"Please enter your address!"
            },
            city:{
                required:"Please enter your city name!"
            },
            zip:{
                required:"Please enter your zip code!"
            },
            emailraj:{
                required:"Please enter your email address!",
                emailraj:"Please enter valid email address!"
            },
            password:{
                required:"Please enter your password!"
                
            },
            password_confirmation:{
                required:"Please re-enter your password!",
                equalTo:'Please enter same password!'
            },
           }
       });
       
   }

   //use keyup event on email
   $("#emailraj").keyup(function(){
       if(validateEmail()){
           //if the email is validated 
           //set input email border green
           $("#emailraj").css("border"," 2px solid green");
           $("#emailmsg").html("<p>Validated</p>");
       }
       else{
        $("#emailraj").css("border"," 2px solid red");
        $("#emailmsg").html("<p>Enter correct email please!</p>");
       }
   });

   //use keyup event on password
   $("#password").keyup(function(){
if(validatePassword()){
    //
   $("#passMsg").html("<p>success</p>");

}else{
    $("#passMsg").html("<p>Password length must be 7</p>");
}

   });
   
//use keyup event on password confirmation
$("#password_confirmation").keyup(function(){
    if(confirmPassword()){
        //
       $("#confirmMsg").html("<p>password matched</p>");
    
    }else{
        $("#confirmMsg").html("<p>length must be 7 equal to password length</p>");
    }
    
       });
});
function validateEmail(){
    //get value of input email
    var email=$("#emailraj").val();
    //use regular expression
    var reg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(reg.test(email)){
        return true;
    } else{
        return false;
    }
}
function validatePassword(){
    //get input password value;
    var pass=$("#password").val();
    //check its length
    if(pass.length>=7){
        return true;
    } else {
        return false;
    }
}

function confirmPassword(){
//get input password value;
var pass=$("#password_confirmation").val();
//check its length
if(pass.length>=7){
    return true;
} else {
    return false;
}
}

function submitMsg(){
    
        $('#booking').on('submit', function(event){
            event.preventDefault();
            alert("Form Submission stopped. fill the required fields");
        });
    
}

