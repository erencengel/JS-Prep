//spread or rest
//...operators like var args in Java

let mid = [3,4];
let arr = [1,2,...mid,5,6];
console.log(arr);
console.log(typeof arr[0]);
console.log(typeof arr[2]);
for(let a=0;a<arr.length;a++){
  console.log(typeof arr[a]);
}

var str = 'Hello';
var chars = [...str];
console.log(chars);
console.log(typeof chars[0]);

//Rest operators collects all elements into array
function fun (...theArgs){
  console.log(theArgs.length);
}

fun();
fun(5);
fun(5,6,7);

function multiply(multiplier, ...theArgs){
  return theArgs.map(element => multiplier * element);
}
let arry = multiply(2,15,25,42);
console.log(arry);
