$(document).ready(function() {

	//E-mail Ajax Send
	$('form').submit(function(e) { //Change
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				$('form').trigger("reset");
			}, 1000);
		});
		return false;
	});

});