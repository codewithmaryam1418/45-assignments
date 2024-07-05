// Creating a Guest List Array
var guestList = ["Ayesha", "Anoosha", "Bushra", "Eshaal"];
//Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nhi aa sakhti");
// Add or remove values from Guest list aaray
guestList.splice(0, 1, "Maryam");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Salma");
// Adding a new value at ending index of array
guestList.push("Alishah");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Bisma");
// Print message of updated list
console.log("Updated List of our Guests");
// Sending a invitation message to our guests ane by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would youlike to dinner with me")); });
