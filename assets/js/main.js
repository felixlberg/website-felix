$(document).ready(function() {
    'use strict';
	// Browser Language Detection adding active class
	var userLang = navigator.language || navigator.userLanguage;
	if($('.' + userLang.split('-')[0]).length) {
		$('h2').removeClass('active');
    $('p').removeClass('active');
		$('.' + userLang.split('-')[0]).addClass('active');
	}

	// Nav
	// Selected Elements
  var nav = document.getElementById('nav');
	var navTrigger = document.getElementById('nav-trigger');
	var navLabels = document.getElementsByClassName('nav-label');
	// Event Listening
	navTrigger.addEventListener('click', navToggle);
	// Open
	function navToggle(e) {
		var closed = (navTrigger.className.indexOf('close') > 0);
		if(closed) {
			navTrigger.className = 'nav-trigger open';
			nav.className = 'nav out animated slideOutLeft';
		} else {
			navTrigger.className = 'nav-trigger close';
			nav.className = 'nav in animated slideInRight';
		}
	}
	// Close on Click
	$(navLabels).click(function() {
      setTimeout(function(){
				navTrigger.className = 'nav-trigger open';
				nav.className = 'nav out animated slideOutLeft';
			},200);
		});

  // Fade In Diagonals
  setTimeout(function(){
    var diagonals = document.querySelectorAll('#section1, #section2, #section3, #footer')
      for (var i = 0; i < diagonals.length; i++) {
        $(diagonals[i]).addClass('animated fadeIn');
      }
  },200);

});
