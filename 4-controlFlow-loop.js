//for loop (there is no for each loop) it means that for loop means for iterator
for(var counter = 1; counter<5; counter++){
  console.log("Inside the loop : " + counter);
}
//interestingly var is global (valid everywhere) even if it is in the loop or curly braces, this is why it can be used in the upcoming line of code.
//it is also functionscoped
//var problem is one of the reasons why ECMA16 has come
console.log('Outside the loop : ' + counter);

//Nested loop
for(var i = 0; i<5;i++){
  console.log("Outer loop at state: " + i);
  for(var p = 0;p<2;p++){
    console.log("Inner loop at state: " + p);
    if(p == 1){
      console.log("\n");
    }
  }
}

//while loop
var count = 1;
while (count<5) {
  console.log(count);
  count+=2;
}

//break
for (var i = 1; i < 10; i++) {
  if(i%3 == 0){
    break;
  }
}
console.log(i);

//continue
var start = 2;
var sum = 0;

do{
  if(start%2 == 0){
    continue;
  }
  sum+=start;
}while(++start <= 10);
console.log(sum);
