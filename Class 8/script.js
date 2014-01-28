/*var x = 1;
var y = 2;
var z = x + y;
console.log(z);*/

// var greeting = "Hello";
// alert(greeting);

// var yesOrNo = confirm("Are you sure?");
// alert(yesOrNo);

/*var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
alert("Your name is " + firstName + "  " + lastName + "!");*/

var hungry = confirm("Are you hungry?");

if (hungry) {
	alert("Eat some pizza!");
} else { 
	alert("Too bad! Have some pizza anyway!");
}

var slices = parseInt(prompt("How many slices would you like?"));
if (slices === 0) {
	alert("Too bad you're eating all of them now.");
} else if (slices < 5) {
	alert("I guess you're not that hungry.");
} else {
	alert("Wow! You are hungry!")
}

var num = 5;
while (num < 10) {
	num += 1;
	console.log(num);
}