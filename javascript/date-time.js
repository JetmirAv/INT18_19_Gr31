function date() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var r = date.getDay() - 1;
	var month = date.getMonth() + 1;
	var y = date.getFullYear();
	var hour;
	var min;
	var sec;
	if (h < 10) {
		hour = '0' + h;
	} else {
		hour = h;
	}
	if (s < 10) {
		sec = '0' + s;
	} else {
		sec = s;
	}
	if (m < 10) {
		min = '0' + m;
	} else {
		min = m;
	}

	var d = document.getElementById("date");
	d.innerHTML = hour + ":" + min + ":" + sec + " &nbsp &nbsp &nbsp" + r + "/" + month + "/" + y;
}
setInterval(date, 500)
