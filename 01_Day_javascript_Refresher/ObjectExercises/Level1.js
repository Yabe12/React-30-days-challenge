// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dogs={
  name: 'Dog',
  legs:4,
  color: 'white',
  age:'2',
  bark:'woof woof',
  getdogsinfo: function () {
    return `The bark sound is ${this.bark}`;
  }
};


// Get name, legs, color, age and bark value from the dog object

console.log(dogs.name);
console.log(dogs.legs);
console.log(dogs.color);
console.log(dogs.age);
console.log(dogs.bark);
// Set new properties the dog object: breed, getDogInfo
dogs.breed = "meat";
dogs.getdogsinfo = function(){
  return `The bark sound is ${this.bark} and the breed is ${this.breed}`;
}
console.log(dogs.getdogsinfo());