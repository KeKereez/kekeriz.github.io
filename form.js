$("#SendForm").on("click", function() {

var th = $(this);

var name = $("#name").val().trim();

var email = $("#email").val().trim();

var password = $("#password").val().trim();

var reg1 = new RegExp("^[a-zA-Z-0-9-а-яА-Я]+$", );

var reg2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var reg3 = new RegExp("^[a-zA-Z-0-9]+$", );

if (name == "") return false;

if (email == "") return false;

if (password == "") return false;

if (!reg1.test(name) || !reg2.test(email) || !reg3.test(password)) {

alert("Неверно введены данные");

return false;

}

$.ajax({

url: "login.php",

type: "post",

cache: false,

data: { 'name': name, 'email': email, 'password': password },

dataType: "html",

beforeSend: function() {

$("#SendForm").prop("disable", true);

},

success: function(result) {

alert(result);

$("#SendForm").prop("disable", false);

}

});

})