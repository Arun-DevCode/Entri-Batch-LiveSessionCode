const response = {
    username : "anitha",
    courseName : "FSD",
    mentor : "Arun"
}

// console.log(response);

const person = {
    "name": "Anitha",
    "coursename":"FSD",
    "mentor":"Arun"
}

console.log(person);


// JSON - Javascript Object Notation

/*
 stringify() - Object (JS Values) to JSON
 parse() - From JSON to Object (JS Values)
*/

// Todo : Conversion Object & JSON
 const convertedJSON = JSON.stringify({email:"testuser@gmail.com",password:"testuser123"});
 console.log("Before conversion:",convertedJSON);
 
// Todo : From JSON to Object 
const convertFromJSON = JSON.parse(convertedJSON);
 console.log("After conversion: ",convertFromJSON);
 