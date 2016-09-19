(function () {
  'use strict';
  $('.nav-icon').on('click', function (event) {
    $(event.target).closest('.nav-icon').toggleClass('opened');
    $('body').toggleClass('nav-opened');
  });
}());
