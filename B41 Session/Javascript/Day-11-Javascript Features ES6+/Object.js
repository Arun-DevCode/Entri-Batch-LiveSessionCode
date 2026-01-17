// Sample Object
const user = {
  name: "Arun",
  age: 25,
  role: "Developer"
};

/* -----------------------------------------------
   Object.keys() – Get all keys
------------------------------------------------ */
const keys = Object.keys(user);
console.log("Keys:", keys);
// ["name", "age", "role"]


/* -----------------------------------------------
   Object.values() – Get all values
------------------------------------------------ */
const values = Object.values(user);
console.log("Values:", values);
// ["Arun", 45, "Developer"]

/* -----------------------------------------------
   Object.entries() – Convert object to array
------------------------------------------------ */
const entries = Object.entries(user);
console.log("Entries:", entries);
// [["name","Arun"], ["age",25], ["role","Developer"]]

/* -----------------------------------------------
   Object.fromEntries() – Convert array to object
------------------------------------------------ */
const newObject = Object.fromEntries(entries);
console.log("From Entries:", newObject);

/* -----------------------------------------------
   Object.assign() – Merge objects
------------------------------------------------ */
const extraInfo = { location: "Chennai" };
const mergedUser = Object.assign({}, user, extraInfo);
console.log("Merged Object:", mergedUser);

/* -----------------------------------------------
   Spread Operator with Object
------------------------------------------------ */
const spreadUser = { ...user, experience: "2 Years" };
console.log("Spread Object:", spreadUser);

/* -----------------------------------------------
   Object.freeze() – Prevent modification
------------------------------------------------ */
const frozenUser = { name: "Arun" };
Object.freeze(frozenUser);

frozenUser.name = "Raj"; // ❌ No effect
console.log("Frozen User:", frozenUser);

/* -----------------------------------------------
   Object.seal() – Prevent add/remove properties
------------------------------------------------ */
const sealedUser = { name: "Arun" };
Object.seal(sealedUser);

sealedUser.name = "Raj"; // ✅ Allowed
sealedUser.age = 25;     // ❌ Not allowed
console.log("Sealed User:", sealedUser);

/* -----------------------------------------------
   Object.hasOwn() – Check own property
------------------------------------------------ */
console.log(
  "Has name:",
  Object.hasOwn(user, "name")
); // true

/* -----------------------------------------------
   hasOwnProperty() – Older method
------------------------------------------------ */
console.log(
  "Has age:",
  user.hasOwnProperty("age")
); // true

/* -----------------------------------------------
   Object.create() – Create object with prototype
------------------------------------------------ */
const personProto = {
  greet() {
    console.log("Hello from prototype!");
  }
};

const newUser = Object.create(personProto);
newUser.name = "Arun";
newUser.greet();

/* -----------------------------------------------
   Object.getOwnPropertyNames()
------------------------------------------------ */
console.log(
  "Property Names:",
  Object.getOwnPropertyNames(user)
);
