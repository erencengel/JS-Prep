//before ECMA2016 there were no class structure in JS
//how to create object...1-regular class structure(with the ECMA 2016)...2-JSON...3-constructor functions(very old method, nobody is using right now)

//Create an object through JSON structure
var p = ''; //-->variable
var p2 = []; //-->array -- square brackets represents the arrays in JS
var p3 = {}; //-->object -- curly braces represents the objects in JS

var person = {
  firstName : 'Mike',
  lastName : 'Smith'
}
console.log(person);
console.log(person.firstName);

//if property contains space, place it inside quotes

var address = {
  'building no' : 5645, //to able to put space you need to use quotes
  street : 'Jones Branch',
  state : 'VA',
  country : 'USA'
}
console.log(address);

console.log(address['building no']); // to reach that point, you should use []
console.log(address['state']); //same with the upcoming one
console.log(address.state);

//adding a new property
person.age = 30;
console.log(person);

//delete a property
delete person.age;
console.log(person);

//Checking if property exists  --  Frontend always use the API endpoints/REST Rest is gonna come with JSON
console.log('street' in address);

//Iterating over properties of an object
//a new for loop which is special for JS CALLED IN LOOP
var course = {
  name : 'JS Training',
  url : 'www.cybertekschool.com',
  subjects : ['es5','es6','js','ts']
}
//you dont have to put colon at the end of the object
//FOR IN LOOP --special for JS --which is you imğlemeting in objects/property
for(var key in course){
  console.log(key + ": " + course[key]);
}

//Example
var myHonda = {
  color : 'red',
  wheels : 4,
  engine : {
    cylinders : 4,
    size : 2.2
  },
  hp : [300,500,100]
}

console.log(myHonda.engine);
console.log(myHonda.engine.size);
console.log(myHonda.hp);
console.log(myHonda.hp[0]);

//WHAT IS OBJECT? --> Collection of properties and methods
//We can also add behaviour(method) into object
//note: first check variable is in the function?no; second it comes as a parameter?no; is it global?no; (keep continue with the upcoming line)
//it is special for object so how is it will be introduced -- 'this' keyword
var car = {
  make : 'Honda',
  model : 'Civic',
  year : 2000,
  color : 'Red',
  mileage : 75000,
  started : false,
  start : function(){
    this.started = true;
  },
  drive : function(){
    if(this.started){
      console.log('It is running');
    }else {
      console.log('You need to start the engine first');
    }
  }
}

car.start();
car.drive();
