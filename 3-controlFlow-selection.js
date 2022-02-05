var number1 = 100;
var number2 = 10;
if(number1>number2) {
  console.log('number1 is greater than number2');
}else if (number1<number2) {
  console.log(number2 +  ' is greater than ' + number1);
}else {
  console.log('number1 is equal to number2');
}

//ternary
var age = 25;
var allowRegister = age > 18 ? true : false;
console.log(allowRegister);

//switch
var year = 2021;
var month = 10;
var dayCount;
switch (month) {
    case 1:case 3: case 5: case 7: case 8: case 10: case 12:
    dayCount = 31;
    break;
    case 4:case 6: case 9: case 11:
    dayCount = 31;
    break;
  default:
  dayCount = -1 //INVALID MONTH
}
console.log(dayCount);
