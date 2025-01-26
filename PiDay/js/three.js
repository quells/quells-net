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
var moves_ones = 0;
var moves_tens = 0;
var moves_hundreds = 0;
function increment () {
	moves_ones++;
	if (moves_ones > 9) { moves_ones = 0; moves_tens++; }
	if (moves_tens > 9) { moves_tens = 0; moves_hundreds++; }
	if (moves_hundreds > 9) { moves_hundreds = 0; }
	$("#ones").replaceWith( "<h2 class='count' id='ones'>" + moves_ones + "</h2>" );
	$("#tens").replaceWith( "<h2 class='count' id='tens'>" + moves_tens + "</h2>" );
	$("#hundreds").replaceWith( "<h2 class='count' id='hundreds'>" + moves_hundreds + "</h2>" );
	if (!won && one && two && three && four && five && six && seven && eight && nine) {
		won = true;
		if (moves_ones == 1 && moves_tens == 9) {
			alert("Challenge 3 Completed! Perfect score!");
		} else {
			alert("Challenge 3 Completed!");
		}
		window.location.replace("four.html");
	}
}
$("#1").click(function () {
	$(this).toggleClass("on");
	if (one) { one = false; } else { one = true; }
	increment();
});
$("#2").click(function () {
	if (!one) {
		$(this).toggleClass("on");
		if (two) { two = false; } else { two = true; }
		increment();
	}
});
$("#3").click(function () {
	if (!one && !two) {
		$(this).toggleClass("on");
		if (three) { three = false; } else { three = true; }
		increment();
	}
});
$("#4").click(function () {
	if (one && !two && !three) {
		$(this).toggleClass("on");
		if (four) { four = false; } else { four = true; }
		increment();
	}
});
$("#5").click(function () {
	if (one && two && !three && !four) {
		$(this).toggleClass("on");
		if (five) { five = false; } else { five = true; }
		increment();
	}
});
$("#6").click(function () {
	if (one && two && three && !four && !five) {
		$(this).toggleClass("on");
		if (six) { six = false; } else { six = true; }
		increment();
	}
});
$("#7").click(function () {
	if (one && two && three && four && !five && !six) {
		$(this).toggleClass("on");
		if (seven) { seven = false; } else { seven = true; }
		increment();
	}
});
$("#8").click(function () {
	if (one && two && three && four && five && !six && !seven) {
		$(this).toggleClass("on");
		if (eight) { eight = false; } else { eight = true; }
		increment();
	}
});
$("#9").click(function () {
	if (one && two && three && four && five && six && !seven && !eight) {
		$(this).toggleClass("on");
		if (nine) { nine = false; } else { nine = true; }
		increment();
	}
});