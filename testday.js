const indexChanged = dayChecker();
function dayChecker() {
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const typedByUser = prompt('Enter weekday');

const weekday = typedByUser.toLowerCase();
const index = days.indexOf(weekday);
if(/^\s*(\w+)\s*$/.test(typedByUser)) {
	if (typedByUser.length < 10) {
		if(isNaN(typedByUser)){
			if(index === -1) {
			return 'Use only days of the week';
	}
			if (index >= 0 && index < 6) {
			return index + 1;
	}
		}else{
		return "dont use numbers in input";
		}
	}else{
	return "Max 10 symbols!"
	}
}
else{
	return "Dont use Cyrillic characters!";
}
}
document.write(indexChanged);