(function () {
	var button = document.querySelector('.nav-icon');
	button.addEventListener('click', function (event) {
		event.target.classList.toggle('opened');
		document.querySelector('#fullscreen-menu').classList.toggle('opened');
	});
	console.log(navIcon);
}());
