//Arithmetic
console.log(3 + 5 * 4 - 6);

//Assignment Operators
var x = 5;
x+=5;
console.log(x);

//Comparison
var one = 1;
var one_again = 1;
var one_string = '1';
//what is the difference between two equals sign and triple equals sign -- it is a interview question -- which is unique for js
console.log(one == one_again);//true
console.log(one === one_again);//true
console.log(one == one_string);//true //same value regardless of different types
console.log(one === one_string);//false //checks types as well
//most people use triple equals sign

//Logical
console.log((5<2) && (2>=3));
console.log((5<2) || (3>=2));
console.log(!(5==3));

console.log(4+2*(6+3)*2);
