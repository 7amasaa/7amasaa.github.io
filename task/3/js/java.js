function equation() {
	"use strict";
var a = document.getElementById('firstNumber').value;
var b = document.getElementById('secondNumber').value;
var c = document.getElementById('thirdNumber').value;
var d = (a * b) / c;
var answer = Math.sqrt(d);
	
	
	
	document.getElementById('answer').value = answer;
	
	
}

