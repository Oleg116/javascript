let morer = prompt("Enter the number you want to multiply");
let times = prompt("Enter the number of times multiply");
console.log(`Entered was ${morer} number and multuply ${times} times`);
let funcVariable = cycle();
function cycle(){
for(let part = 0; part <= times; part++){
    console.log(part*morer);
}
}