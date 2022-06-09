"use strict";

jQuery(document).ready(function($){
	/************** FlexSlider Plugin *********************/
	$('.flexslider').flexslider({
		animation : 'fade',
		controlNav : false,
		nextText : '',
		prevText : '',
	});

	$('.flex-caption').addClass('animated pulse');

	$('.flex-direction-nav a').on('click', function() {
        $('.flex-caption').removeClass('animated pulse');
        $('.flex-caption').fadeIn(0).addClass('animated pulse');
    });
	
});

   $(function() {
				/**
				* for each menu element, on mouseenter, 
				* we enlarge the image, and show both sdt_active span and 
				* sdt_wrap span. If the element has a sub menu (sdt_box),
				* then we slide it - if the element is the last one in the menu
				* we slide it to the left, otherwise to the right
				*/
               $('#og-grid > li').bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('.exp')
						 .stop(true)
						 //.show().animate({ 'height' : $('.og-grid li > a').height()},300,'easeOutSine')
						 .show().animate({ 'height' : '100%'},300,'easeOutSine')
				 }).bind('mouseleave',function(){
					var $elem = $(this);
					$elem.find('.exp')
						 .stop(true)
						 .hide().animate({'height':'0px'},300,'easeOutSine');
				});
				/*e.preventDefault();*/
            });
 

		/*	$(document).ready(function(){
				$("#sdt_menu > li").bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('.exp')
					     .fadeIn()
						 
						 .find('a')
						 .fadeOut()
						
			});
			}).bind('mouseleave',function(){
					var $elem = $(this);
					$elem.find('.exp')
					     .fadeOut()
						
						 .find('a')
						 .fadeIn()
						 
			});*/
