const weekday = prompt("Enter the day of the week");
const weekdayChanged = weekday.toLowerCase();
function dayCheck() {
	if (weekdayChanged === 'monday' || weekdayChanged === 'tuesday' || weekdayChanged === 'wednesday' || weekdayChanged === 'thursday'|| weekdayChanged === 'friday' || weekdayChanged === 'saturday' || weekdayChanged === 'sunday') {
		if (weekdayChanged === 'monday') {
			return '1';
		}else if (weekdayChanged === 'tuesday') {
			return '2';
		}else if (weekdayChanged === 'wednesday') {
			return '3';
		}else if (weekdayChanged === 'thursday') {
			return '4';
		}else if (weekdayChanged === 'friday') {
			return '5';
		}else if (weekdayChanged === 'saturday') {
			return '6';
		}else if (weekdayChanged === 'sunday') {
			return '7';
		}
	}else{
		alert('Use only days of the week');
	}
}



dayCheck()