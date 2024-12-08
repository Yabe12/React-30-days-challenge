const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
// Change skills array to JSON using JSON.stringify()
const skill = JSON.stringify(student, ['skills']);
console.log((skill));
// Stringify the age variable
const ages = JSON.stringify(student,['age']);
console.log((ages));
// Stringify the isMarried variable
const married=JSON.stringify(student,['isMarried']);
  console.log((married));
  // Stringify the student object
  const students = JSON.stringify(student);
console.log((students));