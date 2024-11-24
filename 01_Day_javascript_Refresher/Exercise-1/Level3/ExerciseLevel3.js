// The following is an array of 10 students ages:
// js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
console.log(min);
const max = ages[ages.length - 1];
// const median = Math.floor(ages.legth/2);
let median ;

if (ages.length % 2 === 0) {
  median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}else{
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);

let sum =0 ;
for (var i = 0; i < ages.length; i++){
  sum += ages[i];
}
const average = sum / ages.length;
console.log(average);

const range = (max-min);
console.log(range);


// Compare the value of (min - average) and (max - average), use abs() method
const val = Math.abs(min - average);
const val2 = Math.abs(max-average);
if (val < val2){
  console.log("val");
}else{
  console.log("val2");
}
// 1.Slice the first ten countries from the countries array
const countries = require("../../data/countries");

const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const midd = Math.floor(countries.length/2);
const middle = countries.length % 2 == 0 ?countries.slice(midd - 1 , midd + 1) :countries.slice(midd, midd + 1);

console.log(middle);