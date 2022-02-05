//whenever something needs to be waiting in app you need to handle synch/asynch issue.
//JS is not wait
//promises is used to solve this asynch problem
//function constructor -- object -- promise constructor

let promiseToCleanTheRoom = new Promise(function(resolve,reject){
  let isClean = false;
  if(isClean){
    resolve('Room is clean') //this will be assign to then function parameter
  }else {
    reject('Room is still dirty') //this will be assign to catch function parameter
  }
})

//everything is coming from framework will be a promise, dont worry, how we gonna handle?
//every promise coming with the 2 methods (since it is a object) ... then() is used for resolving and catch() is used for promise is not fulfill

promiseToCleanTheRoom.then(function(fromResolve){ //usually we use then()
  console.log('The room is ' + fromResolve);
}).catch(function(fromReject){
  console.log('The room is ' + fromReject);
})

//promise object
let cleanRoom = function(){
  return new Promise(function(resolve,reject){
    resolve('Room is clean');
  })
}

//promise object
let removeGarbage = function(msg){
  return new Promise(function(resolve,reject){
    resolve(msg + '. Garbage is removed');
  })
}

//promise object
let winIceCream = function(msg){
  return new Promise(function(resolve,reject){
    resolve(msg + '. You got the icecream.');
  })
}

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIceCream(result);
}).then(function(result){
  console.log('Finished. ' + result);
})
