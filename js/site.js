'use strict';

// Fade in header contents
$('.header-content').hide().fadeIn(1600);

// Creates new smooth scroll object
var scroll = new SmoothScroll('a[href*="#"]', {
 	speed: 800, // Integer. How fast to complete the scroll in milliseconds
 	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
 	easing: 'easeInOutCubic' // Easing pattern to use
});
