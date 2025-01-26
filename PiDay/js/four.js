var won = false;
var one = false;
var two = false;
var three = false;
var four = false;
var five = false;
var six = false;
var seven = false;
var eight = false;
var nine = false;
var moves = 0;
function increment () {
	moves++;
	$("#hundreds").replaceWith( "<h2 class='count' id='hundreds'>" + moves + "</h2>" );
	if (!won && one && !two && !three && !four && five && !six && seven && !eight && !nine) {
		won = true; alert("Pi Day Challenge Completed!");
		$("#tens").replaceWith( "<h2 class='count' id='tens'>1</h2>" );
		$("#ones").replaceWith( "<h2 class='count' id='ones'>4</h2>" );
	}
}
function decrement () {
	moves--;
	$("#hundreds").replaceWith( "<h2 class='count' id='hundreds'>" + moves + "</h2>" );
	if (!won && one && !two && !three && !four && five && !six && seven && !eight && !nine) {
		won = true; alert("Pi Day Challenge Completed!");
		$("#tens").replaceWith( "<h2 class='count' id='tens'>1</h2>" );
		$("#ones").replaceWith( "<h2 class='count' id='ones'>4</h2>" );
	}
}
$("#1").click(function () {
	if (one) { $(this).toggleClass("on"); one = false; decrement(); }
	else { $(this).toggleClass("on"); one = true; increment(); }
});
$("#2").click(function () {
	if (two) { $(this).toggleClass("on"); two = false; decrement(); }
	else { $(this).toggleClass("on"); two = true; increment(); }
});
$("#3").click(function () {
	if (three) { $(this).toggleClass("on"); three = false; decrement(); }
	else { $(this).toggleClass("on"); three = true; increment(); }
});
$("#4").click(function () {
	if (four) { $(this).toggleClass("on"); four = false; decrement(); }
	else { $(this).toggleClass("on"); four = true; increment(); }
});
$("#5").click(function () {
	if (five) { $(this).toggleClass("on"); five = false; decrement(); }
	else { $(this).toggleClass("on"); five = true; increment(); }
});
$("#6").click(function () {
	if (six) { $(this).toggleClass("on"); six = false; decrement(); }
	else { $(this).toggleClass("on"); six = true; increment(); }
});
$("#7").click(function () {
	if (seven) { $(this).toggleClass("on"); seven = false; decrement(); }
	else { $(this).toggleClass("on"); seven = true; increment(); }
});
$("#8").click(function () {
	if (eight) { $(this).toggleClass("on"); eight = false; decrement(); }
	else { $(this).toggleClass("on"); eight = true; increment(); }
});
$("#9").click(function () {
	if (nine) { $(this).toggleClass("on"); nine = false; decrement(); }
	else { $(this).toggleClass("on"); nine = true; increment(); }
});