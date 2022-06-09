
/*

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}


function childOf(child, parent){ //returns boolean

  while((child=child.parentNode) && child!==parent); 
  
  return !!child; 
}*/


    $('.toggle-menu').toggle( 
    function() {
        $('.menuwrapper').animate({ top: 0 }, 'slow', function() {
            $('#slider span').html('menuwrapper');
        });
    }, 
    function() {
        $('.menuwrapper').animate({ top: '-90%' }, 'slow', function() {
            $('#slider span').html('menu');
        });
    }
);

		"use strict";

jQuery(document).ready(function($){
		$('.toggle-menu').click(function(){
				$('.menu').stop(true,true).toggle();
				return false;
			});
			$(".responsive-menu .menu .sub a").click(function(){
				$('.responsive-menu .menu').hide();
			});

		});
 /*$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        
       $(".rheader").css("opacity", "1");
    } else {
        
        $(".rheader").css("opacity", "0");
    }
    this.previousTop = currentTop;
});*/
$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
    // define the header height here
    var headerHeight = 100;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
      if (currentTop < this.previousTop) {
       
        $(".rheader").removeClass("hide");
        $(".rheader").addClass("show");
      } else {
        
        $(".rheader").removeClass("show");
        $(".rheader").addClass("hide");
      }
    }
    this.previousTop = currentTop;
});
  
  var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.sidebar').addClass('sbfixed');
    } else {
        $('.sidebar').removeClass('sbfixed');
    }
});

       



    /*navigaion indicator */
 
/*	   var lastId,
    topMenu = $(".topmenu"),
    topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
  
// Bind click handler to menu items
// so we can get a fancy scroll animation
   menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
		
        /* i added below */
 /*  var parent = $("#collapseOne"),
	 targetDiv = $(".topmenu"),
	 alist = targetDiv.find("a"),
	 scrollChild = alist.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

     function isDescendant(parent, scrollChild) {
     var node = scrollChild.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
         return false;
		 
	
}
     if (isDescendant ) { $('#collapseOne').collapse("show");}
	    else {$('#collapseOne').collapse({toggle: false});
		$('#collapseTwo').collapse("show")}
   }                   
});    
*/



 /*navigaion indicator */
 
	   var lastId,
    topMenu = $(".topmenu"),
    topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
  
// Bind click handler to menu items
// so we can get a fancy scroll animation
   menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   
  /* The scrollTop() method sets or returns the 
  vertical scrollbar position for the selected elements.

Tip: When the scrollbar is on the top, the position is 0.

When used to return the position:
This method returns the vertical position of the scrollbar for the FIRST matched element.

When used to set the position:
This method sets the vertical position of the scrollbar for ALL matched elements. */
   var fromTop = $(this).scrollTop()+topMenuHeight;
    
   
   // Get id of current scroll item /
   
   /*Get the current coordinates of the
   first element in the set of matched elements, relative to the document.
   .offset() returns an object containing the properties top and left.*/
   var current = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   current = current[current.length-1];
   var id = current && current.length ? current[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
		 
		 var menuItems.parents().find(".panel-collapse");
		
        /* i added below */
   
	  var list = $(".panel-collapse").map(function(){
	        var alist = $(this).find("li"),
	        activeList = alist.map(function(){
             var item = $(this).find(".active");
            if (item.length) { return item; } 
			}),
           
      function isDescendant($(this), scrollChild) {
            var node = scrollChild.parentNode;
           while (node != null) {
             if (node == $(this)) {
                   return $(this);
              }
            node = node.parentNode;
        }
          /*return false;*/
	    }		 
});
     

  /*   if (isDescendant ) { $('.panel-collapse').collapse("show");}
	    else {$('.panel-collapse').collapse("hide");}
   }                 
});    */

    
  