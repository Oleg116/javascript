function myFunction() {
  const number = prompt("Будь ласка, введіть ціну", "100");
  const symbol = Number(number);
  const letter = parseInt(symbol, 10);
  console.log(typeof symbol);
  if(isNaN(letter)) {
  	alert(`${number} Не є числовим типом даних`);
    }else if ( number < 50){
  	alert(`число ${number} Є занадто малим, введіть число більше 50`);
  } else if ( number > 1000){
    alert(`Число ${number} Є занадто великим, введіть число менше 1000`);
  } else if (number % 10 !== 0) {
  	alert(`Введіть число кратне 10, Ваше число ${number} не є кратним 10!`);
  } else if (number >= 620 && number <= 800) {
  	alert(`При покупці на цю сумму ${number}, ви отримуєте знижку на 10% на наступний товар!`);
  } else if (number >= 900 && number <= 1000) {
  	alert(`При покупці на цю сумму ${number}, ви отримуєте знижку на 20% на наступний товар!`);
}
}

myFunction();