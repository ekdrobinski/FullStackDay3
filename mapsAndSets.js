let fruitInventory = new Map();
fruitInventory.set("apple", 10);
fruitInventory.set("banana", 20);
fruitInventory.set("orange", 30);

fruitInventory.set("apple", 15); // Updates "apple" to value of 15.

let bananaInventory = fruitInventory.get("banana");
//console.log(bananaInventory); //prints banana inventory

let uniqueColors = new Set(["red", "blue", "green"]);
uniqueColors.add("yellow"); // adds yellow to the set
console.log(uniqueColors.has("yellow")); // is true, yellow is in the set
// console.log(uniqueColors.has("blue")); // prints if blue is in the set

let hasBlue = uniqueColors.has("blue"); // stores the value of whether or not blue is in the set as the variable hasBlue
console.log(hasBlue); //prints the value of variable hasBlue



