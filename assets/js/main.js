$(document).ready(function() {
    'use strict';
	// Browser Language Detection adding active class
	var userLang = navigator.language || navigator.userLanguage;
	if($('.' + userLang.split('-')[0]).length) {
		$('h2').removeClass('active');
    $('p').removeClass('active');
		$('.' + userLang.split('-')[0]).addClass('active');
	}
	// Animate Css on load Animation
	var $first = $('#section0 .is-animated');
	var $second = $('#section1 .is-animated');
	var $third = $('#section2 .is-animated');
  var $fourth = $('#section3 .is-animated');
	//Nav
	// Selected Elements
  var nav = document.getElementById('nav');
	var navTrigger = document.getElementById('nav-trigger');
	var navLabels = document.getElementsByClassName('nav-label');
	// Event Listening
	navTrigger.addEventListener('click', navToggle);
	//Nav Open
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
	//Nav Close on Click
	$(navLabels).click(function() {
      setTimeout(function(){
				navTrigger.className = 'nav-trigger open';
				nav.className = 'nav out animated slideOutLeft';
			},200);
		});
});
