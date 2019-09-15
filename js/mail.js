$(document).ready(function() {

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Сообщение отправлено. Спасибо. Менеджер скоро с Вами свяжется.");
			setTimeout(function() {
				$("#callback").trigger("reset");
			}, 1000);
			window.location = "../thanks.html"
		});
		return false;
	});

	$("#ix-256, #ix-64, #i8plus-256, #i8plus-64, #i8-256, #i8-64, #i7plus-32, #i7plus-128, #i7plus-256, #i7-128, #i7-256, #i7-32, #i6splus-16, #i6splus-64, #i6splus-128, #i6s-128, #i6s-64, #i6s-16, #i6s-32").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $("#ix-256, #ix-64, #i8plus-256, #i8plus-64, #i8-256, #i8-64, #i7plus-32, #i7plus-128, #i7plus-256, #i7-128, #i7-256, #i7-32, #i6splus-16, #i6splus-64, #i6splus-128, #i6s-128, #i6s-64, #i6s-16, #i6s-32").serialize()
		}).done(function() {
			alert("Заказ принят в обработку. Спасибо. Менеджер скоро с Вами свяжется.");
			setTimeout(function() {
				$("#ix-256, #ix-64, #i8plus-256, #i8plus-64, #i8-256, #i8-64, #i7plus-32, #i7plus-128, #i7plus-256, #i7-128, #i7-256, #i7-32, #i6splus-16, #i6splus-64, #i6splus-128, #i6s-128, #i6s-64, #i6s-16, #i6s-32").trigger("reset");
			}, 1000);
			window.location = "../thanks.html"
		});
		return false;
	});

});
