// Looping in JS

// 1. For loop
// let startPoint =0;
// const endingPoint = 10;

// for(startPoint; startPoint<endingPoint;startPoint++){
//  //statements
//    console.log(startPoint); //
// };

// To calculate natural number from 0 to 100 except 5th number.
let initial = 0;
let total = 0;

// Loop to calculate value
for (initial; initial < 100; initial++) {
  console.log(initial);
  // break;
  if (initial === 5) {
    continue; // skips current iteration/
  }
  total += initial;
}

console.log(total); // 5?4945
