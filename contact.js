//  CONTACT FORM
$("#success").hide();

$("#contact-button").click(function () {
    var error = validationContactUsForm();
    if (error) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $("#contactusform").serialize(),
            success: function (result) {
                $('input[type=text],textarea').each(function () {
                    $(this).val('');
                })
                $("#success").html(result);
                $("#success").fadeIn("slow");
                $('#success').delay(4000).fadeOut("slow");
            }
        });
    }
});
function validationContactUsForm() {
    var error = true;
    $('#contactusform input[type=text]').each(function (index) {

        if (index == 1) {
            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                $("#contactusform").find("input:eq(" + index + ")").css({"border": "2px solid red"});
                error = false;
            } else {
                $("#contactusform").find("input:eq(" + index + ")").css({"border": "2px solid #e0e0e0"});
            }
        }else {
            if ($(this).val() == null || $(this).val() == "") {
                $("#contactusform").find("input:eq(" + index + ")").css({"border": "2px solid red"});
                error = false;
            }
            else {
                $("#contactusform").find("input:eq(" + index + ")").css({"border": "2px solid #e0e0e0"});
            }
        }
    });
    return error;
}
