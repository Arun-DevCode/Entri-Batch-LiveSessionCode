// Creating a Map
const userMap = new Map();

// set() → Add key-value pairs
userMap.set("name", "Arun");
userMap.set("age", 25);
userMap.set("role", "Developer");
userMap.set(101, "Employee ID");

// get() → Retrieve value by key
console.log(userMap.get("name")); // Arun

// has() → Check if key exists
console.log(userMap.has("age")); // true
console.log(userMap.has("salary")); // false

// size → Number of entries
console.log(userMap.size); // 4

// delete() → Remove entry
userMap.delete("role");
console.log(userMap.size); // 3

// keys(), values(), entries()
console.log([...userMap.keys()]); // ["name", "age", 101]
console.log([...userMap.values()]); // ["Arun", 25, "Employee ID"]
console.log([...userMap.entries()]); // [["name","Arun"],["age",25],[101,"Employee ID"]]

// clear() → Remove all entries
userMap.clear();
console.log(userMap.size); // 0
