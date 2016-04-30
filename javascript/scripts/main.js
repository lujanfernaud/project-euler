$(document).ready(function() {
	var num;
	var numChecker;
	var speed = 350;

	// Find multiples

	$("#multi-but").on("click", function() {
		num = $("#multi-input").val();
		if (num <= 9999999) {
			calcMultiples(num);
			$(".multi-res").html("<strong>Result: </strong>" + multiplesResult);
			$("#multiples > .result").show(speed);
		} else if (num > 9999999) {
			$("#multiples > .alert > .al-text").hide();
			$("#multiples > .alert > .al-number").show();
			$("#multiples > .alert").show(speed);
		} else {
			$("#multiples > .alert > .al-number").hide();
			$("#multiples > .alert > .al-text").show();
			$("#multiples > .alert").show(speed);
		}
	});
	$("#multi-input").on("focus", function() {
		$(this).val("");
		$("#multiples > .result").hide(speed);
		$("#multiples > .alert").hide(speed);
	});

	// Fibonacci evens sum

	$("#fibo-but").on("click", function() {
		num = $("#fibo-input").val();
		numChecker = isNaN(num);
		if (numChecker == false) {
			fibonacciSum(num);
			$(".fibo-res").html("<strong>Result: </strong>" + fibonacciResult);
			$("#fibonacci > .result").show(speed);
		} else {
			$("#fibonacci > .alert > .al-text").show();
			$("#fibonacci > .alert").show(speed);
		}
	});
	$("#fibo-input").on("focus", function() {
		$(this).val("");
		$("#fibonacci > .result").hide(speed);
		$("#fibonacci > .alert").hide(speed);
	});

	// Largest prime factor

	$("#lp-but").on("click", function() {
		num = $("#lp-input").val();
		if (num <= 999999999999) {
			primeFactor(num);
			$(".lp-res").html("<strong>Result: </strong>" + largestFactor);
			$("#largest-prime > .result").show(speed);
		} else if (num > 999999999999) {
			$("#largest-prime > .alert > .al-text").hide();
			$("#largest-prime > .alert > .al-number").show();
			$("#largest-prime > .alert").show(speed);			
		} else {
			$("#largest-prime > .alert > .al-number").hide();
			$("#largest-prime > .alert > .al-text").show();
			$("#largest-prime > .alert").show(speed);	
		}
	});
	$("#lp-input").on("focus", function() {
		$(this).val("");
		$("#largest-prime > .result").hide(speed);
		$("#largest-prime > .alert").hide(speed);
	});
});

// Find multiples

var multiples = [];
var multiplesResult = 0;

function calcMultiples(num) {
	multiples = [];
	multiplesResult = 0;

	if (num > 0) {
		for (var i = 0; i < num; i++) {
			if (i % 3 == 0 || i % 5 == 0) multiples.push(i);
 		}
 		multiplesResult = multiples.reduce(function(a,b){return a + b});
 	};
};

// Fibonnacci evens sum

var fibonacciList = [];
var fibonacciEvens = [];
var fibonacciResult = 0;

function fibonacciSum(num) {
	fibonacciList = [];
	fibonacciEvens = [];
	fibonacciResult = 0;

	var a = 1;
	var b = 1;
	if (num > 1) {
		while (b < num) {
			sum = a + b;
			a = b;
			b = sum;
			fibonacciList.push(a);
			if (sum % 2 == 0) fibonacciEvens.push(sum);
		}
		fibonacciResult = fibonacciEvens.reduce(function(a,b){return a + b});
	};
};

// Largest prime factor

var factors = [];
var largestFactor = 0;

function primeFactor(num) {
	factors = [];
	largestFactor = 0;

	if (num > 1) {
		for (var i = 2; i <= num; i++) {
			while (num % i == 0) {
				factors.push(i);
				num = num / i;
			}
		}
		largestFactor = factors[factors.length-1];
	};
};