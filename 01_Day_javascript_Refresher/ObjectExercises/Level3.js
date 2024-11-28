// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// const personAccount = {
//   firstName: "John",
//   lastName: "Doe",
//   incomes: [
//     { description: "Salary", amount: 5000 },
//     { description: "Bonus", amount: 2000 },
//   ],
//   expenses: [
//     { description: "Rent", amount: 1000 },
//     { description: "Groceries", amount: 500 },
//   ],
//   totalIncome() {
//     return this.incomes.reduce((total, income) => total + income.amount, 0);
//   },

//   totalExpense(){
//     return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//   },
//   accountInfo(){
//     return `Name: ${this.firstName} ${this.lastName}`;
//   },
//   addIncome(){
//     const income = { description: "New Income", amount: 1000 };
//     this.incomes.push(income);
//   },
//   addExpense (){
//     const expense = { description: "New Expense", amount: 500 };
//     this.expenses.push(expense);
//   },
//   accountBalance(){
//     return this.totalIncome() - this.totalExpense();
//   }
 
// }
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// function signup(users,name,password,email) {
//   const newUser = {
//     _id: 'user' + (users.length + 1),
//     username: {name},
//     email: {email},
//     password: {password},
//     createdAt: new Date().toISOString().split('T')[0],
//     isLoggedIn: false,
//   };
//   users.push(newUser);
//   console.log('New user signed up:', newUser);
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Enter your name: ', (name) => {
//   rl.question('Enter your email: ', (email) => {
//     rl.question('Enter your password: ', (password) => {
//     const userFound = users.find(
//       (user) => user.username === name && user.email === email
//     );

//     if (userFound) {
//       console.log('User is found:', userFound);
//     } else {
//       console.log('User not found. Signing up...');
//       signup(users, name, email,password);
//     }

//     rl.close();
//   });
//   });
// });

// Create a function called signIn which allows user to sign in to the application

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Enter your name: ', (username) => {
//   rl.question('Enter your email: ', (email) => {
  
// function signin(users) {
//   const userFound = users.find(
//     (user) => user.username === username && user.email === email
//   );
//   if (userFound){
//     console.log("you can inter");
//   }else{
//     console.log('User not found. Please signup first.');
//   }

// }
// signin(users);
// rl.close();
//   });
//   });

const newuser = {
  _id: "eedfcf",
  username: "John Doe",
  email: "johndoe@johndoe.com",
  password: "123456",
  createdAt: "08/01/2020 10:15 AM",
  isLoggedIn: false,
};
// const signup = (users,newuser) => {
//   const userFound = users.find(
//         (user) => user.username === newuser.username && newuser.email === email);
//         if (userFound) {
//           console.log('User is found:', userFound);
//         }else{
//           console.log('User not found. Signing up...');
//           users.push(newuser);
//           console.log('New user signed up:', newuser);
//         }
// };
// signup (users,newuser);
// const signup = (users,newuser) => {
//   const userFound = users.find(
//         (user) => user.id === newuser.id );
//         if (userFound) {
//           console.log('User is found:', userFound);
//         }else{
//           console.log('User not found. Signing up...');
//           users.push(newuser);
//           console.log('New user signed up:', newuser);
//         }
// };
// signup (users,newuser);

// const signIn = (newuser) => {
//   const exists = users.find((user) => user._id === newuser._id);
//   if (exists) {
//     exists.isLoggedIn = true;
//     console.log("user signIn success");
//   } else {
//     exists.isLoggedIn = false;
//     console.log("account does not exist");
//   }
// };
// signIn(newuser);
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// b. Create a function called averageRating which calculate the average rating of a product
// const rateProduct = (productId, userId, rate) => {
//   const product = products.find((product) => product._id === productId );
//   if (product) {
//     const user = users.find((users) => users._id === userId);
//     if (user) {
//       const existingRating = product.ratings.find(
//         (rating) => rating.userId === userId
//       );
//       if(!existingRating)
//       product.ratings.push({ userId: users._id, rate });
//       console.log("Product rating updated successfully");
//     }
//     else{
//       console.log("User not found");
//     }
//   }
//   else{
//     console.log("Product not found");
//   }
// }
// rateProduct("aegfal", "eefamr", 2);

// fisum rate prodcuts

