const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }

};

// Find the person who has many skills in the users object.


// let x =null;
// let y =0;
// for (const user in users) {
//   const skills = users[user]. skills.length;
//   if (skills >y) {
//     x = user;
//     y = skills;

//   }
// }
// console.log(`The user with the most skills is ${x}, with ${y} skills.`);

// Count logged in users,count users having greater than equal to 50 points from the following object.

// for (const user in users){
//   if(users[user].points >= 50 && users[user].isLoggedIn==true){
//     console.log(`${user} is a logged in user and has 50 or more points.`);
//   }

// }



// Find people who are MERN stack developer from the users object
// for (const user in users){
//   const skills = users[user].skills;
//   const Mern=['MongoDB', 'Express', 'React', 'Node'];
//   if (Mern.every(skill => skills.includes(skill))){
//     console.log(`${user} is a Mern developer`);
//   }
// }