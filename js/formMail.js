$("#sendMail").on("click", function() {
	var email = $("#email").val();
	var name = $("#name").val();
	var phone = $("#phone").val();
	var message = $("#message").val();

	if(email == ""){
		$("#errorMess").text("Введите email");
		return false;	
	} else if(name == ""){
		$("#errorMess").text("Введите имя");
		return false;
	} else if(phone == ""){
		$("#errorMess").text("Введите телефон");
		return false; 
	} else if(message.length < 5){
		$("#errorMess").text("Введите сообщение");
		return false; 
	}
		
	$("#errorMess").text("");

	$.ajax({
		url: 'ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
		dataType: 'html',
		beforeSend: function(){
			$("#sendMail").prop("disabled", true);
		},
		success: function(data) {
			if(!data)
				alert("Произошла ошибка, данные не отправлены");
			else 
				$("#mailform").trigger("reset");

			
			$("#sendMail").prop("disabeled", false);
		}
	})

})