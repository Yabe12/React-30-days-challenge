// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the A value: ', (firstNumber) => {
//   rl.question('Enter the B vlaue: ', (secondNumber) => {
//     rl.question('Enter the constant value: ', (tnumber) => {
//       const A = parseInt(firstNumber );
//       const B = parseInt(secondNumber);
//       const C = parseInt(tnumber);
//       const solveQuadratic = () => {
//         const discriminant = Math.pow(B, 2) - 4 * A * C;
//         if (discriminant < 0) {
//           return "No real roots";
//         } else {
//           const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
//           const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
//           return `The roots are: ${root1} and ${root2}`;
//         }
//       };

    
//     console.log('the solution is :', solveQuadratic(firstNumber,secondNumber,tnumber));
//     rl.close();
//   });
// });
// });

// const solveQuadratic = (A, B, C) => {
//   const discriminant = Math.pow(B, 2) - 4 * A * C;
//   if (discriminant < 0) {
//     return "No real roots";
//   } else {
//     const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
//     const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
//     return [root1, root2];
//   }
// };

// console.log(solveQuadratic(1, 4, 4));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// const printArray=(arr) => {
//   for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//   }
// }
// arr = [1,2,3,4];
// printArray(arr);


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
// const showDateTime = (year, month, day , hour , minute , second) => {
 
//   console.log(`The date is ${month + 1} - ${day} - ${year}   ${hour} : ${minute} `);
// };

// const date = new Date(); 
// const year = date.getFullYear();
// const month = date.getMonth(); 
// const day = date.getDate();

// const hour = date.getHours();

// const minute = date.getMinutes();

// const second = date.getSeconds();

// showDateTime(year, month, day , hour, minute, second);  

// Declare a function name swapValues. This function swaps value of x to y.

// const swapValues =(x,y)=>{
// let temp=x;
//  x=y;
//  y=temp;

// console.log('After swapping:',x,y);
// };
// swapValues(3,5);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// const reverseArray =()=>{
//   let reverseArray=[];
//   for(let i=arr.length-1; i>=0; i--){
//     reverseArray.push(arr[i]);
//   }
//   return reverseArray;
// }
// const arr=[1,2,3,5];

// console.log (reverseArray(arr));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// const capitalizeArray =(arr)=>{
//   let capitalized=[];
//   for (let i=0; i<arr.length; i++){
//     capitalized.push(arr[i].charAt(0).toUpperCase());

//   }
//   return capitalized ;
// }
// const arr=["a","b","c"];
// console.log (capitalizeArray(arr))


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (item) =>{
  let newArray = [1,2,3];
  newArray.push(item);
  return newArray;
}
const item =["a","b","c"];

console.log (addItem(item));