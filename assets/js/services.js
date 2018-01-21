$(document).ready(function() {
    'use strict';
	var $isAnimatedSec0 = $('#section0 .is-animated');
	var $isAnimatedSec1 = $('#section1 .is-animated');
	var $isAnimatedSec2 = $('#section2 .is-animated');
	var $isAnimatedSec3 = $('#section3 .is-animated');
	// Fullpage Scroll
	$('#fullpage').fullpage({
        
		//Navigation
        menu: '#nav',
        lockAnchors: false,
        anchors:['intro', 'it', 'dev', 'contact','more'],
        navigation: false,
        navigationPosition: 'left',
        navigationTooltips: ['Intro', 'IT Service', 'Developing', 'Contact','more'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

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
				$isAnimatedSec0.eq(0).addClass('animated bounceInDown').css('animation-delay', '.2s'); 
				$isAnimatedSec0.eq(1).addClass('animated fadeInRightBig').css('animation-delay', '.5s'); 
				$isAnimatedSec0.eq(2).addClass('animated fadeInLeftBig').css('animation-delay', '.5s'); 
			}
		},
        afterRender: function(){},
        afterResize: function(){},
		responsiveHeight: 600,
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		/* Sections Animations */
		onLeave: function(index, nextIndex, direction){
		
			/* Section1 Animations  */
			if( index == 1 && nextIndex == 2 ){
				$isAnimatedSec1.addClass('animated fadeInLeftBig'); 
				$isAnimatedSec1.eq(0).css('animation-delay', '.2s');
				$isAnimatedSec1.eq(1).css('animation-delay', '.4s');
				$isAnimatedSec1.eq(2).css('animation-delay', '.6s');
				$isAnimatedSec1.eq(3).css('animation-delay', '.8s');
				$isAnimatedSec1.eq(4).css('animation-delay', '1s');
				$isAnimatedSec1.eq(5).css('animation-delay', '1.2s');
			}
			
			/* Section2 Animations */
			else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
				$isAnimatedSec2.addClass('animated fadeInRightBig'); 
				$isAnimatedSec2.eq(0).css('animation-delay', '.2s');
				$isAnimatedSec2.eq(1).css('animation-delay', '.4s');
				$isAnimatedSec2.eq(2).css('animation-delay', '.6s');
				$isAnimatedSec2.eq(3).css('animation-delay', '.8s');
				$isAnimatedSec2.eq(4).css('animation-delay', '1s');
				$isAnimatedSec2.eq(5).css('animation-delay', '1.2s');
			}
			
			/* Section3 Animations */
			      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
				$isAnimatedSec3.eq(0).addClass('animated fadeInLeftBig').css('animation-delay', '.2s'); 
				$isAnimatedSec3.eq(1).addClass('animated bounceInDown').css('animation-delay', '.6s');
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

	window.onload = resize;
	
	$(".nav-label").click(function() {
            setTimeout(function(){
				navTrigger.className = 'nav-trigger open';
				nav.className = 'out';
			},500);
        });
		
	
	//Big Thumbs
	var full=false;

	$('.imgWrap').hover(function () {
	 // $(this).css('width', '36%');
	   $(this).addClass('current');
	  //$(this).siblings().css('width', '16%');  
	   $(this).siblings().addClass('notCurrent');
	}, function () {
	  //$('.imgWrap').css('width', '20%');  
	  $('.imgWrap').siblings().removeClass('notCurrent');
	  $('.imgWrap').removeClass('current');
	 });

	 
	$('.txt').html(function(i, html) {
	  var chars = $.trim(html).split("");

	  return '<span>' + chars.join('</span><span>') + '</span>';
	});
	

	//Gallery Poptrox
	var gal = $('#gallery');
	gal.poptrox({
		usePopupNav: true
	});
	
	
	
});