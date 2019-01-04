/*eslint-env browser*/


var number = 1;
showImages(number);

function plusphotos(n) {
	showImages(number += n);
}

function currentSlide(n) {
	showImages(number = n);
}

function showImages(n) {
	var i;
	var photos = document.getElementsByClassName("photos");
	var dots = document.getElementsByClassName("small-photo");
	var captionText = document.getElementById("caption");
	if (n > photos.length) {
		number = 1;
	}
	if (n < 1) {
		number = photos.length;
	}
	for (i = 0; i < photos.length; i++) {
		photos[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	photos[number - 1].style.display = "block";
	dots[number - 1].className += " active";
	captionText.innerHTML = dots[number - 1].alt;
}
