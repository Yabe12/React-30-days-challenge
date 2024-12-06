
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.



// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Please type the month: ', (month) => {
//   console.log(`You entered: ${month}`); 
//   const A = ["January", "March" ,"May" ,"July" ,"August" ,"October" ,"December"];
// const B = ["February"];
// const C = ["April" ,"November","June" ,"September"];

// switch (true) {

//   case A.includes(month):
//     console.log(` ${month} has 31 days`); 
//     break;
//   case B.includes(month):
//     console.log(` ${month} has 28 days`); 
//     break;
//   case C.includes(month):
//     console.log(` ${month} has 30 days`);  
//     break;

//   default:
//     console.log('Invalid month, please try again.');
//     break;
//   }
//   rl.close();
// });

// Write a program which tells the number of days in a month, now consider leap year

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please type the month: ', (input) => {
  const [Year, Month] = input.split(' ');
 
  const A = ["January", "March", "May", "July", "August", "October", "December"];
  const C = ["April", "November", "June", "September"];
let LeapYear = (Year%4==0)

if (Month === "February") {
  if (LeapYear) {
    console.log(`${Month} has 29 days`);
  } else {
    console.log(`${Month} has 28 days`);
  }
} else if (A.includes(Month)) {
  console.log(`${Month} has 31 days`);
} else if (C.includes(Month)) {
  console.log(`${Month} has 30 days`);
} else {
  console.log('Invalid month, please try again.');
}


  rl.close();
});