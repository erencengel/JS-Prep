var str = 'Java Script';

console.log(str.length);
console.log(str.charAt(2));
console.log(str.includes('Java'));

var str2 = 'Hello Mike, welcome to Amazon world';

console.log(str2.indexOf('Amazon'));
console.log(str2.indexOf('Amazon',24));

var replaced = str2.replace('Amazon', 'Ebay');
console.log(replaced);

var arr = str2.split(' ');
console.log(arr);

console.log(str2.substring(0,5));
console.log(str2.substring(6,10)); //(from,to) to is not included

console.log(str2.substr(6,4)); // (from,length) only difference between java and js

console.log(str.toLowerCase());
console.log(str.toUpperCase());

var str3 = '       Java Script ';
console.log(str3);
console.log(str3.trim());
