let tester = prompt();
console.log(tester);

tester = Number(tester);
symbol = parseInt(tester, 10);

if(isNaN(symbol)) {
	alert("It isnt number");
	console.log(typeof symbol, symbol);
}else{
	alert("it is number");
	console.log(typeof symbol, symbol);
}