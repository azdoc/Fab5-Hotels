$(function() {
    var $contactform = $("#contact-form"); //fetch object by id of form
    if ($contactform.length) {
        $contactform.validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please enter your Name!"

                },
                email: {
                    required: "Please enter an email!"
                }
            }
        });
    }
});