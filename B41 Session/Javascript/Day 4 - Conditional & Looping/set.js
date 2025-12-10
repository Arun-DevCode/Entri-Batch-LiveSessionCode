// Creating a Set
const numberSet = new Set();

// add() → Add values (only unique allowed)
numberSet.add(10);
numberSet.add(20);
numberSet.add(30);
numberSet.add(20); // duplicate ignored

// has() → Check value existence
console.log(numberSet.has(20)); // true
console.log(numberSet.has(50)); // false

// size → Count elements
console.log(numberSet.size); // 3

// delete() → Remove value
numberSet.delete(20);
console.log(numberSet.size); // 2

// keys(), values(), entries()
console.log([...numberSet.keys()]); // [10, 30]
console.log([...numberSet.values()]); // [10, 30]
console.log([...numberSet.entries()]); // [[10,10], [30,30]]

// clear() → Remove all values
numberSet.clear();
console.log(numberSet.size); // 0
