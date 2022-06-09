"use strict"
/*(function(window, undefined) {
  "use strict";

})(function() {
  return this || window;
}());


function paint(color){
		this.document.body.style.backgroundColor = color;
}

function foo(pageHref) {
	let myWindow = window.open(pageHref);
	myWindow.focus();
	
	var doc = myWindow.Document.getElementsByClassName("success");
}*/

var child, listDugaar;


$(document).ready(function(event){
$('ul.wwd > li').click(function(){
	var myWindow = null,
	    newElement,
	    yess;
	var pageHref = $(this).children('a').data('href');
	    listDugaar = $(this).index();
        child = window.open(pageHref); 
	    

})
   
}); 

function start_interacting(){
	child.foo = listDugaar;
	child.alert(child.foo);
}