(function () {
	'use strict';
	$('.nav-icon').on('click', function (event) {
		$(event.target).closest('.nav-icon').toggleClass('opened');
		$('#fullscreen-menu').toggleClass('opened');
	});
}());
