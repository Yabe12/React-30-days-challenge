// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your age? ', (age) => {

//   console.log(`You entered: ${age}`); 
//   if (age>=30) {
//     console.log('You are old enough to drive.')
//   }else{
//     console.log('You are left with 3 years to drive')
//   }
//   rl.close();
// });
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.





const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age? ', (age) => {
  let myAge = 30
  let difference = myAge - age
  if (difference>0) {
    console.log('You are ' + difference +'years older than me.')
  }else{
    console.log('You are ' + Math.abs(difference) +'years younger than me.')
  }
  console.log(`You entered: ${age}`); 
  if (age>=30) {
    console.log('You are old enough to drive.')
  }else{
    console.log('You are left with 3 years to drive')
  }
  rl.close();
});