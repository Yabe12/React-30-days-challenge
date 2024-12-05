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
