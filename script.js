function updateResult(n, c, f){
	$("#stay_res").text(f);
	$("#del_res").text(c);
	$("#num_res").text(n);
}

function startExperement(){
	var field = $("#field");
	field.html("");
	var n = parseInt($("#paramN").val());
	if (n == NaN || n<=0){
		alert("Неправильные входные данные");
	}else{
		updateResult(n,0,0);
		var i = 0;
		for (var i=0; i<n; i++){
			field.append("<div class=\"m\"></div>");
		}
		var ms = $('.m');
		var lastN = -1;
		var c=0, f=0;
		var timer = setInterval(function(){
			lastN++;
			var r = Math.random();
			// console.log(r);
			if (r > 0.5){
				c++;
				$(ms[lastN]).addClass('c');
				console.log("c");
			}else{
				f++;
				$(ms[lastN]).addClass('f');
				console.log("f");
			}
			updateResult(n,c,f);
			if (lastN >= ms.length){
				clearInterval(timer);
			}
		}, 100);

	}
}
