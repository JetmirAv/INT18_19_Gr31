$(document).ready(function () {
	var modal = document.querySelector(".mImage");
	var img = $('.imgg');
	var modalImg = $(".modals");
	var captionText = document.querySelector(".modal-caption");
	$('.imgg').click(function () {
		modal.style.display = "block";
		var newSrc = this.src;
		modalImg.attr('src', newSrc);
		captionText.innerHTML = this.alt;
	});
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function () {
		modal.style.display = "none";
	}

});
