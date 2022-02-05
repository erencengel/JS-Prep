//create an object in JS
// 1-JSON structure ex.let a = {}
// 2-By using constructor function ex.new Map();
// 3-Like Java, class and create an object

//Creating class and objects
//There is no access modifiers in JS, this is why there is no encapsulation, no datatypes

class Car{

}

const honda = new Car();
console.log(honda instanceof Car);

//constructor -- is the way that instantiate properties of an object
//what was the class -- collection of properties and methods
class Student{
  constructor(id,name){
    this.id = id;
    this.name = name;
  }
  study(){ //it is enough to just write function name, you dont have to write 'function' keyword
    console.log(`${this.name} is studying`);
  }

  static doHomework(){
    console.log(`${this.name} is doing homework`);
  }

}

let s1 = new Student(1,'Mike');
console.log(`Student : ${s1.id} ${s1.name}`);
s1.study();

//Static variable
Student.age = 20;
console.log(Student);

//static
Student.doHomework();
console.log(s1);

//Only Inheritance is available in JS as OO principle
//INHERITANCE
class Animal{
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log('Animal is eating');
  }
}

class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age=4;
  }
  eat(){
    super.eat();
    console.log('Dog is eating');
  }
}
const d = new Dog('Puppy');
console.log(d);
console.log(d.eat());
