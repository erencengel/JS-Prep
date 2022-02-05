//MAP OBJECT
//it is not class -- we are using function constructor to create a map -- different terminologies -- java--class -- js--function constructor
let map = new Map();
map.set('1','str1');
map.set(1, 'num1');
map.set(true,'bool1');
//In JS there is no type. Therefore you can assign different type of variables(in terms of Java) into one single map
console.log(map.size);
console.log(map.get(1));

//Map can use objects as keys   ...   key/value(map)   ...   property/value(object)
let student = {name:'Mike',age:20};
let visits = new Map();
visits.set(student,100);

//Map can use functions as keys
let fun = function(){console.log('Hello');};
visits.set(fun, 'This is function');
console.log(visits.get(student));
console.log(visits.get(fun));

//chaining
let myCars = new Map();
myCars.set(1,'HondaCivic')
      .set(2,'HondaAccors')
      .set(3,'HondaCRV');
console.log(myCars);
console.log(myCars.get(1));

//iteration over keys
for(let car of myCars.keys()){
  console.log(car);
}
//iteration over values
for(let car of myCars.values()){
  console.log(car);
}
for(let car of myCars){  //myCars.entries()
  console.log(car);
}
for(let [key,value] of myCars){
  console.log(key + "=" + value);
}
for(let [key,value] of myCars){
  console.log(value);
}

myCars.forEach((value, key) => { //in here the order of key and value opposite
  console.log(key + ": " + value);
});
