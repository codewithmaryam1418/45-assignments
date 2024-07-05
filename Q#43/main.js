function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magician_names = ["Harry Poter", "Maryam", "Amna"];
//Making a copy of original array through .Slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//Show both arrays original and copied
//original
console.log("Original Array");
show_magicians(magician_names);
//Copied
console.log("Copied Array");
show_magicians(copy_great_magicians);
