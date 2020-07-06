let name = prompt('Hi, what is your name?');
let nuOfGuesses = 1;

while (name == '' || name == null) {
 name = prompt('Hi, what is your name?');	
}

let number = Math.floor(Math.random() * Math.floor(100));
console.log(number);
let quess = prompt(`Hi ${name}, I guessed the number from 0 to 100, try to quess.`);
while(number > quess || number < quess) {
	if (number > quess) {
		quess = prompt(`Your number is ${quess}, try to use biger number.`);
	}else {
		quess = prompt(`Your number is ${quess}, try to use smaller number.`);
	}
	nuOfGuesses = nuOfGuesses + 1;
	console.log(nuOfGuesses);
}
alert(`Your number is ${quess}, it is right!. quess count is ${nuOfGuesses}`);