


// Declare an empty array;
const techEnd =Array();


// Declare an array with more than 5 number of elements
const num1 =Array(1,2,3,4,5,6,7,8,9);
console.log(num1.length);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Find the length of your array
console.log(nums.length); 

// Get the first item, the middle item and the last item of the array
let mid =Math.floor(nums.length/2);
let last =nums.length-1;
console.log(nums[0],nums[mid],nums[last]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [];
mixedDataTypes.push("one",1,true,"two",2,false, {name: 'join'},"three");
  console.log(mixedDataTypes.length);

  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  console.log(companies);
  console.log(companies.length);
  // Print the first company, middle and last company
  const x = companies.length - 1;
  console.log(companies[0], companies[Math.floor(x/2)], companies[x]);
  // Print out each company
  companies.forEach(function(company){
    console.log(company);
  });
  // Change each company name to uppercase one by one and print them out
  companies.forEach(function(company){
    console.log(company.toUpperCase());
  });
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(companies.join(' '))
  // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  const y = "Ethiopia";
    if (companies.includes(x)) {
      console.log(x);
    } else {
      console.log("Company is not found");
    }
    // Filter out companies which have more than one 'o' without the filter method
    
    const filerarr = [];
    for (let i=0; i<companies.length ; i++) { 
      const str = companies[i]
      let count = 0 ;
      for(let j=0; j<str.length; j++){
       if(str[j] == "o"){
        count++;
       }
       if(count > 1){
        filerarr.push(str) ;
       }
      }
    }
    console.log(filerarr);
 // Filter out companies which have no  'o' without the filter method
 const comp = ["Facebk", "Ggle", "Micrft", "Apple", "IBM", "Oracle", "Amazon"];
 const filer = [];
 for (let i=0; i<comp.length ; i++) { 
   const str = comp[i]
 
   for(let j=0; j<str.length; j++){
    if(str[j] != "o"){
     filer.push(str) ;
     break;
    }
   
   }
 }
 console.log(filer);
//  Sort the array using sort() method

const sorted = companies.sort();
  console.log(sorted);
  // Reverse the array using reverse() method
  const reversed = companies.reverse();
  console.log(reversed);
 
  // Slice out the first 3 companies from the array
const con=companies.slice(0,4);
console.log(con);
console.log("################################********************************");
// Slice out the last 3 companies from the array3
const con1=companies.slice(-1,-4);
console.log(con1);
// -1 refers to the last element of the array.
// -4 refers to the fourth-to-last element of the array.
// Since -1 (start index) is greater than -4 (end index), the method returns an empty array.
console.log("################################********************************");
// Slice out the last 3 companies from the array3
const company=companies.slice(-3);
console.log(company);

// Slice out the middle IT company or companies from the array
const midd = Math.floor(companies.length/2);
const middle = companies.length % 2 == 0 ?companies.slice(midd - 1 , midd + 1) :companies.slice(midd, midd + 1);

console.log(middle);
// Remove the first IT company from the array
const removeFirst = companies.shift();
console.log(removeFirst);
console.log(companies);
// Remove the middle IT company or companies from the array
const mid1 = Math.floor(companies.length/2);
const middleRemove = companies.length % 2 == 0 ?companies.splice(mid1 - 1 , mid1 + 1) :companies.splice(mid1, mid1 + 1);
console.log(companies); 
// Remove the last IT company from the array
const companies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const LastRemoved =companies1.pop();
console.log(LastRemoved);
console.log(companies1); 
// Remove all IT companies
const RemoveAll = companies1.splice(0,companies1.length );
console.log(RemoveAll);
console.log(companies1);
