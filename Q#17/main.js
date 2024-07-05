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
// Inform that only teo guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Gueats to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
