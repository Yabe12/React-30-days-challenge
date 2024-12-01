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

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your temperature: ', (temperature) => {
//   const num1 = parseFloat(temperature);
//    const ConvertTemperature =( )=>{
//      return (temperature * 9/5) + 32;
//    }
//     console.log('The sum of the two numbers is:',ConvertTemperature(num1) );
//     rl.close();
//   });

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your weight: ', (weight) => {
//   rl.question('Enter your height: ', (height) => {
//     const BMI = (weight, height) => {
//       return weight * Math.pow(height, 2);
//     };
//     console.log('your BMI is:', BMI(weight, height));
//     rl.close();
//     if (BMI<18.5){
//       console.log('Underweight');
//     }else if (BMI>18.5 && BMI<24.9){
//       console.log('Normal weight');
//     }else if (BMI>25 && BMI<29.9){
//       console.log('Overweight');
//     }else{
//       console.log('Obese');
//     }
//   });
// });
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the month: ', (Month) => {
  const Autumn = ["September", "October" ,"November"];
const Winter = ["January","February","March","April","May","June","July"];
const Summer = ["March", "April" ,"May"];
const spring = ["June", "July", "August"];
  
   const checkSeason =( )=>{
     if (Autumn.includes(Month)){
       return 'Autumn';
     } else if (Winter.includes(Month)){
       return 'Winter';
     } else if (Summer.includes(Month)){
       return 'Summer';
     } else if (spring.includes(Month)){
       return 'Spring';
     } else {
       return 'Invalid Month';
     }
   }
    console.log('the season is :',checkSeason(Month) );
    rl.close();
  });

