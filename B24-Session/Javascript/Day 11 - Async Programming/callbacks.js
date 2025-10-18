
function addition(a,b){
  return a+b;
}

function subraction(a,b){
  return a-b;
}

function calculator(a,b,callback){
   const result = callback(a,b);
   return result;
}

function donTRunMe(a=4,b=5){
    console.log("Error:You made a mistake!");
    return a + b
}

// Addition
console.log(calculator(5,10,addition))
console.log(calculator(10,3,subraction));
console.log(donTRunMe());
console.log(donTRunMe(10,10));
console.log(donTRunMe());


// // Callback Hell - nested function

function getUser(){
    console.log("User Data!");
};

function getPosts(){
    console.log("Post data!")
}

// // Nested callbacks (Call back Hell)
getUser((getPosts)())



