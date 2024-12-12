// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
function Student() {
  this.firstName = 'John';
  this.lastName = 'Smith';
  this.age = 20;
  this.skills = ['JavaScript', 'React', 'Redux'];
  this.country = 'USA';
  this.enrolledKeys = ['JavaScript', 'React', 'Redux'];
  this.enrolledValues = [true, true, true];
}

// Function to store student object in localStorage


function storeStudent() {
  const student = new Student(); // Create an instance of Student
  localStorage.setItem('student', JSON.stringify(student)); // Store it in localStorage
  console.log('Student object stored in localStorage');
}
