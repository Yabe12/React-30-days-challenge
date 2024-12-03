const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Print the price of each product using forEach

products.forEach((product) => {
  console.log(product.price);
});
// Print the product items as follows using forEach

// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
products.forEach((product) => {
  if (!product.price || product.price === ' ') {
    console.log(`The price of ${product.product} is undefined .`);
  } else {
    console.log(`The price of ${product.product} is ${product.price}`);
  }
});
// Calculate the sum of all the prices using forEach
let sum = 0; 
// const sum=0 why it is not work
products.forEach((product) => {
  const price = product.price
  sum += price;

});
console.log(sum);

// Create an array of prices using map and store it in a variable prices
const prices = products.map((product) =>(product.price) )
console.log(prices);

// Filter products with prices
 products.filter((product) =>{
  console.log( product.product)
})
// Use method chaining to get the sum of the prices(map, filter, reduce)

const sum3 = products
 .filter((product) => product.price && product.price!==' ')
 .map((product) => product.price)
 .reduce((total, price) => total + price, 0);



// Calculate the sum of all the prices using reduce only

const sum2 = products.reduce((total, product) => {
  const price = product.price;
  if (price && price!==' ') {
    return total + price;
  } else {
    return total;
  }
}, 0);

console.log(sum2);

// Find the first product which doesn't have a price value
// const firstProduct = products.find(product) =>{
//   return product.price ===' ';
// }
// console.log(firstProduct);
const firstProduct = products.find((product) => {
  return product.price === ' ';
});
console.log(firstProduct);