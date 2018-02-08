var age = prompt ("what is your age?");

if (age < 0) {
	console.log("Invalid Age");
}
else if (age == 21) {
	console.log("happy 21st birthday");
}


if (age % 2) {
	console.log ("your age is odd");
}

var r = Math.round(Math.sqrt(age));
if ( (r * r) == age){
	console.log ("perfect Square");
}

