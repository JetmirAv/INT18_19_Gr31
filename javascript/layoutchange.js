	function time() {
		var currentTime = new Date().getHours();
		if (7 < currentTime && currentTime < 17) {
			if (document.body) {
				document.body.style.background = "rgba(236, 236, 236, 0.74)";
			}
		} else {
			if (document.body) {
				document.body.style.background = "rgba(227, 226, 226, 0.74)";
			}

		}
	}

	var t = setInterval(time, 500);
