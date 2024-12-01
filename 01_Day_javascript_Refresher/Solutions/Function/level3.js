// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your first name: ', (firstName) => {
//   rl.question('Enter your last name: ', (lastName) => {
//     const fullName = (firstName, lastName) => {
//       return firstName + ' ' + lastName;
//     };
//     console.log('Full name:', fullName(firstName, lastName));
//     rl.close();
//   });
// });

// Declare a function addNumbers and it takes two two parameters and it returns sum.


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your first number: ', (firstNumber) => {
//   rl.question('Enter your second number: ', (SecondNumber) => {
//  const firstNu = parseFloat(firstNumber)
//  const secondN = parseFloat(SecondNumber)
//  const sum = secondN +firstNu
//     console.log('sum is :', sum);
//     rl.close();
//   });
// });


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your first number: ', (firstNumber) => {
//   rl.question('Enter your second number: ', (secondNumber) => {
//     const num1 = parseFloat(firstNumber);
//     const num2 = parseFloat(secondNumber);
//     const sum = num1 + num2;

//     console.log('The sum of the two numbers is:', sum);
//     rl.close();
//   });
// });

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your first number: ', (firstNumber) => {const num = parseFloat(firstNumber);
    

   
//     const _areaOfCircle = () => {
//       return Math.PI * Math.pow(num, 2);
//     }

//     console.log('Area of a circle:', _areaOfCircle(num));
//     rl.close();
//   });

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your temperature: ', (temperature) => {
  const num1 = parseFloat(temperature);
   const ConvertTemperature =( )=>{
     return (temperature * 9/5) + 32;
   }
    console.log('The sum of the two numbers is:',ConvertTemperature(num1) );
    rl.close();
  });

