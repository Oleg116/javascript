let number = prompt("Enter first number");
let result = numberChecker();

function numberChecker() {
	if (isNaN(number)) {
		return "isnt number"
	}else{
		return "it is a number!"
	}
}
document.write(result);