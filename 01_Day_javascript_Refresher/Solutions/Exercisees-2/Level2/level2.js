// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let scores =[45,50,52,99,82,34,24,100,87]
// for (let i = 0; i < scores.length; i++){
//   if (scores[i]>=80&&scores[i]<=100){
//     console.log(scores[i] + " - A");
//   }else if (scores[i]>70&& scores[i]<=89){
//     console.log(scores[i] + " - B");
//   }else if(scores[i]>=60&& scores[i]<=69){
//     console.log(scores[i] + " - C");
//   }else if(scores[i]>=50&& scores[i]<=59){
//     console.log(scores[i] + " - D");
//   }else{
//     console.log(scores[i] + " - F");
//   }
// }
// Check if the season is Autumn, Winter, Spring or Summer.
// If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Please type the month: ', (month) => {
//   console.log(`You entered: ${month}`); 
//   const Autumn = ["September", "October" ,"November"];
// const Winter = ["January","February","March","April","May","June","July"];
// const Summer = ["March", "April" ,"May"];
// const spring = ["June", "July", "August"]
// switch (true) {

//   case Autumn.includes(month):
//     console.log('The season is Autumn.');
//     break;
//   case Winter.includes(month):
//     console.log('The season is Winter.');
//     break;
//   case spring.includes(month):
//     console.log('The season is Spring.');
//     break;
//   case Summer.includes(month):
//     console.log('The season is Summer.');
//     break;
//   default:
//     console.log('Invalid month, please try again.');
//     break;
//   }
//   rl.close();
// });



// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// ?????-?????-  
// ?????-?????- 
// ?????-?????-   