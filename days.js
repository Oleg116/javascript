const weekday = prompt("Enter the day of the week");
const weekdayChanged = weekday.toLowerCase();
function dayCheck() {
	if (weekdayChanged === 'monday' || weekdayChanged === 'tuesday' || weekdayChanged === 'wednesday' || weekdayChanged === 'thursday'|| weekdayChanged === 'friday' || weekdayChanged === 'saturday' || weekdayChanged === 'sunday') {
		if (weekdayChanged === 'monday') {
			alert('1');
		}else if (weekdayChanged === 'tuesday') {
			alert('2')
		}else if (weekdayChanged === 'wednesday') {
			alert('3')
		}else if (weekdayChanged === 'thursday') {
			alert('4')
		}else if (weekdayChanged === 'friday') {
			alert('5')
		}else if (weekdayChanged === 'saturday') {
			alert('6')
		}else if (weekdayChanged === 'sunday') {
			alert('7')
		}
	}else{
		alert('Use only days of the week');
	}
}



dayCheck()