//there no collection structure in js so arrays has couple of more methods in js.
//js has map as well
//so js just has array and map

var scores = new Array(); //empty
var numbers = new Array(10); //array with the initial size 10
var myNumbers = new Array(9,10,4,5); //array with initial elements
var athletes = Array(3); // array with initial size 3
var signs = Array('Red') // array with one elements
//this are the ways create an element but those are not preferable

var emptyArray = [];
var colors = ['red','green','blue'];
//still, without type in js is a problem

//functions -- methods

//accessing array elements
var students = ['Mike','Tim','Ozzy'];
console.log(students[0]);
console.log(students);
console.log(students.toString());

//Basic operations(methods) on arrays
//note: in js, array is dynamic, why? because there is no collection structure
students.push('Emma'); //PUSH -- adds element to end of an array
console.log(students);

students.unshift('Adam'); //UNSHİFT -- is used to add a new element to the beginning of the array
console.log(students);

students.pop(); //removes an element from the end of the arrays
console.log(students);

students.shift(); //removes an element from the begining of an arrays
console.log(students);

var index = students.indexOf('Mike');
console.log(index);

students.splice(0,1); // delete elements in array --> go to index zero (0) and delete one item(1) -- if you put two argument it will delete
console.log(students);

students.splice(2,0,'Matt'); //inserts elements -- if you put three argument than it will add
console.log(students);
// 2 - starting position in the array that new elements will be inserted
// 0 - instruct the splice() method to not to delete any array elements
//Third argument, fourth argument, and so on are the new elements that are inserted into arrays.

students.splice(1,1,'Eren','Aslıhan'); // --> go to 1. element (1), delete it(1) and add 'Eren' and 'Aslıhan' (Eren/Aslıhan)
console.log(students);

var array = [1,30,4,21];
console.log(array.sort()); // js casting elements to string and compares the strings to determine the orders -- WEİRD

var neoArray = [1,3,5];
for(var a=0;a<neoArray.length;a++){
  console.log(neoArray[a]);
}

var family = ['Eren','Şerife','Alperen','Aslıhan'];
console.log(family);
family.push('new member');
console.log(family);
family.pop();
console.log(family);
family.unshift('new member');
console.log(family);
family.shift();
console.log(family);
family.splice(0,1);
console.log(family);
family.splice(1,2);
console.log(family);
family.splice(0,0,'Eren');
console.log(family);
family.splice(2,0,'Alperen','Aslıhan',2700);
console.log(family);
family.pop();
console.log(family);
console.log(family.sort());
