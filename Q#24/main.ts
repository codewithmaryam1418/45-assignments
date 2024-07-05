let orange = "orange";

// Test for equality and inequality with string

console.log("Is orange is equal to orange?");
console.log(orange == "orange");

console.log("Is orange is not equal to orange?");
console.log(orange != "orange");

//Tests using Lowercase function
let uppercaseOrange = "ORANGE";

console.log("Is ORANGE is equal to apple after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() == "orange");

console.log("Is ORANGE is not equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() != "orange");

//Numerical tests
let ten = 10;
let twenty = 20;

console.log("Is ten is equal to twenty?");
console.log(ten == twenty);

//Not Equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("Is ten is greater than zero?");
console.log(ten > 0);

//Less than
console.log("Is twenty is less than 10?");
console.log(twenty < 10);

//Greater than or equal to
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" Operator

// Using && (and)
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//Using || (OR)
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in aray
let fruits = ["apple","banana","orange"];

console.log("Is apple include in my Fruits array");
console.log(fruits.includes("orange"));

// Not include
console.log("Is orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
