'use strict';

$(function() {
    // Grab the initial top offset of the navigation 
    var stickyNavigationOffsetTop = $('#nav').offset().top;
    
    // Function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNavigation = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
        
        // If we've scrolled more than the navigation, 
        // change its position to fixed to stick to top, 
        // otherwise change it back to relative
        if (scrollTop > stickyNavigationOffsetTop) { 
            $('#nav').addClass('sticky-nav');
        } else {
            $('#nav').removeClass('sticky-nav');
        }   
    };
    
    // Run our function on load
    stickyNavigation();
    
    // Run it again every time you scroll
    $(window).scroll(function() {
         stickyNavigation();
    });
    
    // NOT required:
    // Disable all links that point to "#"
    $('a[href="#"]').click(function(event) { 
        event.preventDefault(); 
    });
});