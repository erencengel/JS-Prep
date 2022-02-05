//what is differences between java?
// 1- no return type (void or object) ... but you can return data, it does not mean that you cant, syntaxes are different
// 2- not provides parameter type

function add(a,b){ //js is weak with on this issues, this is why ECMA16 come up with huge changes
  console.log('Total is:' + (a+b));
}
add(10,20);

function multiply(a,b){
  return (a*b); //how return value via js..with return  keyword
}
console.log(multiply(10,20));

add(4,5);
add(10,20,30); //it is not something good structure
add(4);

//Function overloading : Not allowed
function addTen(a){
  return(a+10);
}

//function addTen(a,b){
//  return(a+b+10);
//}

console.log(addTen(50));

//this is unique for JS
//Functions are the first-class citizens in JS.
//Functional programming
//You can pass functions to other functions as arguments
//You can return functions from other Functions
//You can store functions in variables

var add2 = add; //add2 is become a function anymore
add2(100,300);
console.log(add2);

//Ananymous functions : no name, nobody knows the name : function without name
var show = function(){
  console.log('This is a function');
}
show();

var divide = function(a,b){
  return a/b;
}

var d = divide(20,10);
console.log(d);

//Passing a function to another function
function sum(a,b){
  return a+b;
}

function average(a,b,fn){
  return fn(a,b)/2;
}

console.log(average(10,5,sum));

//Example
function cmToInt(length) {
  return length/2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn,length){
  return fn(length);
}

var inches = convert(cmToInt,10);
var cm = convert(inToCm,10);
console.log(inches);
console.log(cm);

//Callback functions: A callback is a function passed as an argument to an other function
//A callback function can run after another function has finished
//java is synconized, js is not -- java read all codes from top to bottom -- js can read lines not in a regular way but different orders so it might cause lots
//of problems
//how we are gonna come through asynconized stuff in js -- there are 3 ways that can do -- the logic is handle the asyncronization
// 1- oldest methodology -- callback functions -- pass one function as an argument to another function
// 2- promises
// 3- async/await that is come with the ECMA2017

function myDisplayer(some){
  console.log(some);
}

function myCalculator(num1,num2,myCallBack){
  var sum = num1 + num2;
  myCallBack(sum);
}

myCalculator(10,20,myDisplayer);

////////////////////////////////
function method1(){console.log('comes from method1');}
method1();
function method2(x){return x};
console.log(method2(100));
var func = method1;
console.log(func());
var Aslıhan = function(){console.log("Aslıhan");}
Aslıhan();
var Aslıhan2 = function(){return 'Aslıhan'};

var noname = function(fn){return fn + ' is sleeping'}
console.log(noname(Aslıhan2()));
