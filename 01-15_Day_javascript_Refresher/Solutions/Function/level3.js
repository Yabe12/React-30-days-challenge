// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your characters: ', (characters) => {
//   rl.question('Enter your num: ', (numInput) => {
//     const num = parseInt(numInput, 10); 
   
//     let id = '';
//     for (let i = 0; i < num; i++) {
//       id += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     console.log('Your random ID is:', id);

    
//     rl.close();
//   });
// });

// Write a function generateColors which can generate any number of hexa or rgb colors
function generateColors(type, count) {
  const colors = []; 
  
  if (type === 'hex') {
    for (let i = 0; i < count; i++) {
      const color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
      colors.push(color);
    }
  } else if (type === 'rgb') {
 
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * 256); // 
      const g = Math.floor(Math.random() * 256); // 
      const b = Math.floor(Math.random() * 256); // 
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  } else {
    throw new Error("Invalid type. Use 'hex' or 'rgb'.");
  }

  return colors; 
}


console.log(generateColors('hex', 5)); 
console.log(generateColors('rgb', 3));


function generateColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    let colorType = Math.random() < 0.5 ? 'hex' : 'rgb';
    if (colorType === 'hex') {
      let hex = '#';
      for (let j = 0; j < 6; j++) {
        hex += Math.floor(Math.random() * 16).toString(16);
      }
      colors.push(hex);
    } else {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  }
  return colors;
}


// const generateColors = (type, count) => {
//   let colors = [];
//   for (let i = 0; i < count; i++) {
//     if (type === 'hexa') {
//       colors.push('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
//     } else if (type === 'rgb') {
//       colors.push(rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}));
//     }
//   }
//   return colors;
// };



// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// const shuffleArray =(arr) => {
//   let shuffleArray =[];
  
//   for(let  i=0  ;i<arr.length; i++){ 
//     shuffleArray.push(Math.random()*arr.length)
//   }
//   return shuffleArray;
//   }
//   const arr=[1,3,2];
//   console.log(shuffleArray(arr));

  const shuffleArray = (arr) => {
    let shuffledArray = [];
    let copy = [...arr]; 
    while (copy.length > 0) {
   let randomIndex = Math.floor(Math.random() * copy.length);
    shuffledArray.push(copy.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  };
  
  const arr = [1, 92, 87];
  console.log(shuffleArray(arr));
  // const shuffleArray = (arr) => {
  //   let shuffled = [];
  //   while (arr.length > 0) {
  //     let randomIndex = Math.floor(Math.random() * arr.length);
  //     shuffled.push(arr[randomIndex]);
  //     arr.splice(randomIndex, 1);
  //   }
  //   return shuffled;
  // };
  // const arr=[1,3,2];
  // console.log(shuffleArray(arr));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial=()=>{
  let fact=1;
  for(let i=1;i<=5;i++){
    fact=fact*i;
  }
  return fact;
}

console.log(factorial());

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty=(arr) => {
  if(arr.length===0){
    return true;
  }else{
    return false;
  }
}

console.log(isEmpty([1,2,3]));
// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
 const average=(arr) => {
  if(!arr.every(Number.isFinite)){
    return "All items in the array should be numbers";
  }
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
