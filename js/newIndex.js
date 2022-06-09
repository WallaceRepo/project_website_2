/*$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});*/

$(document).on('click', '.mega-dropdown-menu', function(e) {
	event.preventDefault();
  /*e.stopPropagation()*/
  
})

/*$('ol.carousel-indicators > li').click(function(){
	
} )*/
/*
$('.nav-pills').on('click', 'li', function() {
    $('.nav-pills li.active').removeClass('active');
    $(this).addClass('active');
});*/

/* $(function() {
        $('.navactive li a').click(function() {
           $('.navactive li').removeClass();
           $($(this).attr('href')).addClass('active');
        });
     });*/
	 
 //Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
  });
  
  /*mega-dropdown-menu*/
/* $(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});*/


//  The function to change the class
var changeClass = function (r,className1,className2) {
	var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
	if( regex.test(r.className) ) {
		r.className = r.className.replace(regex,' '+className2+' ');
    }
    else{
		r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
    }
    return r.className;
};	
       /*this is for what we do page */
/*	   
//  Creating our button for smaller screens
var menuElements = document.getElementById('menubuttons');
menuElements.insertAdjacentHTML('afterBegin','<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function() {
	changeClass(this, 'navtoogle active', 'navtoogle');
}

// document click to hide the menu
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function(e) {
	var mobileButton = document.getElementById('menutoggle'),
		buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

	if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
		changeClass(mobileButton, 'navtoogle active', 'navtoogle');
	}
}*/
$(function(){
$('a[title]').tooltip();
});

  /*what we do page----> EXPANDING GRID---*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  