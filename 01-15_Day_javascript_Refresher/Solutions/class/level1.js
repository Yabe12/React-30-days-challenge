// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name,color,legs,age){
    this._name = name;
    this._color = color;
    this._legs = legs;
    this._age = age;
  }
  get name(){
    return this._name;
  }
  get color() {
    return this._color;
  }
  get legs() {
    return this._legs;
  }
  get age() {
    return this._age;
  }
}
const Animal1 = new Animal("dog","black",4,34);
console.log(Animal1);
class Dog extends Animal {
  bark(){
    console.log("Woof woof");
  }
  }
  class cat extends Animal {
    meow(){
    console.log("Meow meow");
  }}
  const dog1 = new Dog("Buddy","brown",4,4);
  const cat1 = new cat("wero","white",4,4);
  console.log(dog1);
  console.log(cat1);
  // Override the method you create in Animal class
  class amimal extends Animal {
    constructor(name, age , leg, type){
      super(name, age, leg);
      this._type = type;
    }
    get type(){
      return this._type;
    }
  }
  const animal2 = new amimal("lion",1000,4,"mammal");
  console.log(animal2);