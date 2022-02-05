//es5
//ARROW FUNCTIONS -- LAMBDA EXPRESSIONS
let x = function(a){
  return a;
}

//es6
let a = a => a; //this is exactly same above one
//If we do not have any parameters
let y1 = function(){
  console.log('hello');
}

let y = () => {console.log('hello');}

//if we have multiple parameters
let z = (a,b,c) => a+b+c;

//multiline arrow function
let sum = (a,b) => {
  let result = a+b;
  return result;
}

//REDUCE
let total = arr => arr.reduce((a,b) => a+b);  //dont have curly braces in single line means whatever you type is return type
let arr = [5,10,20];
// 0 + 5 = 5 -- 0 is the first element(accumulator) -- remember from java.stream()
// 5 + 10 = 15
// 15 + 20 = 35
console.log(total(arr));

//map() -- method creates a new array with the results of calling a provided function
//on every element in the calling array

const map1 = arr.map(x => x*2);
console.log(map1);

//in Java, for each loop implementing collections (including arrays)
//in JS,for..of : creates a loop iterating over iterable objects
let myfruits = ['Apple','Orange','Banana'];
//for iterator
for(let a=0;a<myfruits.length;a++){
  console.log(myfruits[a]);
}
console.log();
//for..of (for collections)
for(let value of myfruits){
  console.log(value);
}

//IF YOU PASS A FUNCTİON AS AN ARGUMENT TO AN OTHER FUNCTION, THİS CALLED CALLBACK FUNCTION. WHAT IS THE REASON? BECAUSE OF ASYNCRONIZED STUFF.
