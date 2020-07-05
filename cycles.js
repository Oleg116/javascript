let name = prompt('Hi, what is your name?');

while (name == '' || name == null) {
 name = prompt('Hi, what is your name?');	
}

let number = Math.floor(Math.random() * Math.floor(100));
let quess = prompt(`Hi ${name}, I guessed the number from 0 to 100, try to quess.`);
while(number > quess || number < quess) {
	if (number > quess) {
		quess = prompt(`Your number is ${quess}, try to use biger number.`);
	}else {
		quess = prompt(`Your number is ${quess}, try to use smaller number.`);
	}
}
alert(`Your number is ${quess}, it is right!`);