// jQuery Suckerfish Drop Down Menu
// Found: http://snipplr.com/view/2123/suckerfish-dropdown-menus-jquerystyle/

$(document).ready(function(){
	$(".nav li").hover(function(){
		$("ul", this).fadeIn("fast");
	});
	if (document.all) {
		$(".nav li").hoverClass ("sfHover");
	};
});

$.fn.hoverClass = function(c) {
	return this.each(function(){
		$(this).hover(
			function() {
				$(this).addClass(c);
			};
			
			function() {
				$(this).removeClass(c);
			};
		);
	});
};