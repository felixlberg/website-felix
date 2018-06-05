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
	// Fullpage Scroll
	$('#fullpage').fullpage({
		//Navigation
        menu: '#nav',
        lockAnchors: false,
        anchors:['intro', 'me', 'id', 'product', 'contact',],
        navigation: false,
        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '.container.three',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#fff'],
        fixedElements: '.container',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
		    //Performance
        lazyLoading: true,
        //Events
        afterLoad: function(anchorLink, index){
			/* Section1 Animations  */
			if ( index == 1 ) {
        $first.eq(0).addClass('animated zoomIn').css('animation-delay', '.4s');
        $first.eq(1).addClass('animated zoomIn').css('animation-delay', '.6s');
				$first.eq(2).addClass('animated bounceInUp').css('animation-delay', '1s');
			}
		},
      afterRender: function(){},
      afterResize: function(){},

      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	    /* Sections Animations */
		  onLeave: function(index, nextIndex, direction){
			/* Section 0 Fallback */
			if (index == 2 && direction =='up') {
				$first.eq(2).removeClass('animated fadeOut').addClass('animated fadeIn').css('animation-delay', '1s');
			}
			/* Section1 Animations  */
			else if ( index == 1 && nextIndex == 2 ){
				$first.eq(0).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');
				$second.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.2s');
				$second.eq(1).addClass('animated fadeIn').css('animation-delay', '.5s');
				$second.eq(2).addClass('animated fadeIn').css('animation-delay', '1s');
			}
			/* Section 1 Fallback */
			if (index == 3 && direction =='up') {
				$second.eq(2).removeClass('animated fadeOut').addClass('animated fadeIn').css('animation-delay', '1s');
			}
			/* Section2 Animations */
			else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
				$second.eq(2).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');
				$third.eq(0).addClass('animated fadeIn').css('animation-delay', '.5s');
				$third.eq(1).addClass('animated fadeInRight').css('animation-delay', '.2s');
				$third.eq(2).addClass('animated fadeIn').css('animation-delay', '1s');
			}
      /* Section 2 Fallback */
      if (index == 4 && direction =='up') {
        $third.eq(2).removeClass('animated fadeOut').addClass('animated fadeIn').css('animation-delay', '1s');
      }
      /* Section3 Animations */
			else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $third.eq(2).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');
        $fourth.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.2s');
				$fourth.eq(1).addClass('animated fadeIn').css('animation-delay', '.5s');
				$fourth.eq(2).addClass('animated fadeIn').css('animation-delay', '1s');
			}
      /* Section 3 Fallback */
      if (index == 4 && direction =='down') {
        $fourth.eq(2).removeClass('animated fadeIn').addClass('animated fadeOut').css('animation-delay', '.2s');
      }
      /* Section 4 Fallback */
      if (index == 5 && direction =='up') {
        $fourth.eq(2).removeClass('animated fadeOut').addClass('animated fadeIn').css('animation-delay', '.2s');
      }
		}
   });
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
