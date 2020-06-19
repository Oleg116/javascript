
let days = ['monday', 'tuesday', 'wednesday', 'thurstay', 'friday', 'saturday', 'sunday'];
typedByUser = prompt();
weekday = typedByUser.toLowerCase();
let index = days.indexOf(weekday);
let indexChanged = dayChecker();

function dayChecker() {
	if (typedByUser.length < 10) {
	if(isNaN(typedByUser)){
	if(index === -1) {
		return 'Use only days of the week';
	}
	if (index >= 0 && index < 6) {
			return index + 1;
	}
}else {
	return "dont use numbers in input";
}
}else {
	return "Max 10 symbols!"
}
}
document.write(indexChanged);