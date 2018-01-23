$(document).ready(function() {
    'use strict';
	var $isAnimatedSec0 = $('#section0 .is-animated');
	var $isAnimatedSec1 = $('#section1 .is-animated');
	var $isAnimatedSec2 = $('#section2 .is-animated');
	// Fullpage Scroll
	$('#fullpage').fullpage({
        
		//Navigation
        menu: '#nav',
        lockAnchors: false,
        anchors:['intro', 'me', 'id', 'contact',],
        navigation: false,

        //Scrolling
        css3: false,
        scrollingSpeed: 1000,
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

        lazyLoading: true,

        //events
        afterLoad: function(anchorLink, index){
			/* Section1 Animations  */
			if( index == 1 ){
				$isAnimatedSec0.eq(0).addClass('animated bounceInUp').css('animation-delay', '1s');
			}
		},
        afterRender: function(){},
        afterResize: function(){},
		
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		/* Sections Animations */
		onLeave: function(index, nextIndex, direction){
			/* Section 0 fallback */
			if (index == 2 && direction =='up') {
				$isAnimatedSec0.eq(0).removeClass('animated fadeOut').addClass('animated bounceInUp').css('animation-delay', '1s');
			}
			/* Section1 Animations  */
			else if ( index == 1 && nextIndex == 2 ){ 
				$isAnimatedSec0.eq(0).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');
				
				$isAnimatedSec1.eq(0).addClass('animated fadeInLeft').css('animation-delay', '.2s'); 
				$isAnimatedSec1.eq(1).addClass('animated fadeIn').css('animation-delay', '.5s');
				$isAnimatedSec1.eq(2).addClass('animated bounceInUp').css('animation-delay', '1s'); 
			}
			/* Section 1 fallback */
			if (index == 3 && direction =='up') {
				$isAnimatedSec1.eq(2).removeClass('animated fadeOut').addClass('animated bounceInUp').css('animation-delay', '1s');
			}
			/* Section2 Animations */
			else if( ( index == 3 || index == 2 ) && nextIndex == 3 ) {
				$isAnimatedSec1.eq(2).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');

				$isAnimatedSec2.eq(0).addClass('animated fadeIn').css('animation-delay', '.5s');
				$isAnimatedSec2.eq(1).addClass('animated fadeInRight').css('animation-delay', '.2s');
				$isAnimatedSec2.eq(2).addClass('animated bounceInUp').css('animation-delay', '1s'); 
			}
			/* Section3 Animations */
			else if (index == 3 && direction =='down') {
				$isAnimatedSec2.eq(2).removeClass('animated bounceInUp').addClass('animated fadeOut').css('animation-delay', '.2s');
			}
			/* Section 3 fallback */
			if (index == 4 && direction =='up') {
				$isAnimatedSec2.eq(2).removeClass('animated fadeOut').addClass('animated bounceInUp').css('animation-delay', '1s');
			}
		}
   });
	//Nav
	// selected elements
	var navTrigger = document.getElementById('nav-trigger');
	var nav = document.getElementById('nav');
	var header = document.getElementById('header');
	var heading = document.getElementById('heading');
	var labels = document.getElementsByClassName('nav-label');

	// sizing
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var fontSize = windowHeight*0.1;
	var headingSize = windowWidth*0.1;

	// Event Listening
	navTrigger.addEventListener('click', navToggle);	
	window.addEventListener('resize', resize);

	function resize() {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		fontSize = windowHeight*0.1;
		headingSize = windowWidth*0.1;
		if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3; 
	 
		for(var i = 0; i < labels.length; i++) {
			labels[i].style.fontSize = fontSize+'px';
			labels[i].style.height = fontSize+'px';
			labels[i].style.marginTop = '-'+fontSize*0.6+'px';
		}
	}

	window.onload = resize;
	
	function navToggle(e) {
		var closed = (navTrigger.className.indexOf('close') > 0);
		if(closed) {
			navTrigger.className = 'nav-trigger open';
			nav.className = 'out';
		} else {
			navTrigger.className = 'nav-trigger close';
			nav.className = 'in';
		}
	}
	
	$(".nav-label").click(function() {
            setTimeout(function(){
				navTrigger.className = 'nav-trigger open';
				nav.className = 'out';
			},0);
		});

	$('.txt').html(function(i, html) {
	  var chars = $.trim(html).split("");

	  return '<span>' + chars.join('</span><span>') + '</span>';
	});
});