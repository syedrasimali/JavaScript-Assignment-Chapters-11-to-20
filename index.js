//Mutable vs Immutable in JavaScript
//Mutable

//Mutable means the data can be changed/modified after creation.

//Arrays and Objects in JavaScript are mutable.

//Example:

let colors = ["Red", "Blue", "Green"];

// Modifying existing array
colors[1] = "Yellow";  
colors.push("Black");  

console.log(colors); 
// ["Red", "Yellow", "Green", "Black"]


//Immutable

//Immutable means data cannot be changed after creation.

//Strings, Numbers, Booleans in JavaScript are immutable.

//Example:

let name = "Ali";

// Trying to change directly
name[0] = "H";  

console.log(name); // "Ali" (unchanged)

// You can only create a new string
name = "Hli";  
console.log(name); // "Hli"
