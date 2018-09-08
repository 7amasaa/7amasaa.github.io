function equation() {
	"use strict";
var a = document.getElementById('firstNumber').value;
var b = document.getElementById('secondNumber').value;
var c = document.getElementById('thirdNumber').value;
var d = (a * b) / c;
var answer = Math.sqrt(d);
	
	
	
	document.getElementById('answer').value = answer;
	
	
}

$(function () {
	"use strict";
    $(".load").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load:hidden").slice(0, 2).slideDown();
        if ($(".load:hidden").length === 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});