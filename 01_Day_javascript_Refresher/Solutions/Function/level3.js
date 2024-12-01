// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
  rl.question('Enter your last name: ', (lastName) => {
    const fullName = (firstName, lastName) => {
      return firstName + ' ' + lastName;
    };
    console.log('Full name:', fullName(firstName, lastName));
    rl.close();
  });
});
