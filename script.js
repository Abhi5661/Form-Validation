function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var errorMessage = "";
var missingField = "";

$("#btn").click(function () {
  if ($("#email").val() == "") {
    missingField += "<p>Email not filled</p>";
  }
  if ($("#phone").val() == "") {
    missingField += "<p>Phone number not filled</p>";
  }
  if ($("#pass").val() == "") {
    missingField += "<p>Password not filled</p>";
  }

  if (isEmail($("#email").val()) == false) {
    errorMessage += "<p>Email id is not valid</p>";
  }
  if ($.isNumeric($("#phone").val()) == false) {
    errorMessage += "<p>Phone number is not valid</p>";
  }
  if ($("#pass").val() != $("#confirmpass").val()) {
    errorMessage += "<p>Password does not match</p>";
  }

  if (errorMessage == "") {
    $("#success").html("You are registered");
    // $("#error").css("color", "green");
  } else {
    $("#error").html(errorMessage + missingField);
    // $("#error").css("color", "red");
  }
});
