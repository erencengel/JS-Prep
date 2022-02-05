//LET
var x = 1; //global and function scoped
if(x === 1){
  var x = 2;
  console.log(x);
}
console.log(x);

let a = 1; //block scoped
if(a === 1){
  let a = 2; //this let a is only visible is between these block{} -- after ES6 everyone use "let" instead of "var"
  console.log(a);
}
console.log(a);
//INTERVIEW QUESTİON -- What is the difference between var and let? 'var' is global and function scope, 'let' is block scoped

//CONST
const number = 50; //final keyword in JS
//number = 40; // throws exception, number is not changeable
//console.log(number);

//TEMPLATE STRİNGS -- which is very nice feature
let firstName = 'Mike';
let lastName = 'Smith';
console.log('My name is : ' + firstName + ' ' + lastName);
//back tick(``)
console.log(`My name is : ${firstName} ${lastName}`);
