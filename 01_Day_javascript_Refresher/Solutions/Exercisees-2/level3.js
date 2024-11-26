
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please type the month: ', (month) => {
  console.log(`You entered: ${month}`); 
  const A = ["January", "March" ,"May" ,"July" ,"August" ,"October" ,"December"];
const B = ["February"];
const C = ["April" ,"November","June" ,"September"];

switch (true) {

  case A.includes(month):
    console.log(` ${month} has 31 days`); 
    break;
  case B.includes(month):
    console.log(` ${month} has 28 days`); 
    break;
  case C.includes(month):
    console.log(` ${month} has 30 days`);  
    break;

  default:
    console.log('Invalid month, please try again.');
    break;
  }
  rl.close();
});

