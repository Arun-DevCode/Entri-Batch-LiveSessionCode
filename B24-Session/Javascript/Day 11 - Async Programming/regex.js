
/*
  lookbehind : /(?<=@)\w+[\.]\w+/
  lookhead :  /(\w+[\.])?\w+(?=@)/
*/

const pattern = /(\w+[\.])?\w+(?=@)/
const input = "dev.arunengineer@gmail.com";

const isMatch = input.match(pattern);
console.log(isMatch[0]);