	function time() {
		var currentTime = new Date().getHours();
		if (7 < currentTime && currentTime < 21) {
			if (document.body) {
				document.body.style.background = "rgba(216, 216, 216, 0.74)";
			}
		} else {
			if (document.body) {
				document.body.style.background = "rgba(227, 226, 226, 0.74)";
			}

		}
	}

	setInterval(time, 30000);
