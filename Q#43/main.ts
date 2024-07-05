function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Define an array of magician names
let magician_names = ["Harry Poter","Maryam","Amna"];

//Making a copy of original array through .Slice() function

let copy_magician_names = magician_names.slice()

//Modify the copied array to include "The Great" with their names
 let copy_great_magicians = make_great(copy_magician_names);

 //Show both arrays original and copied

 //original
 console.log("Original Array")
 show_magicians(magician_names);

 //Copied
 console.log("Copied Array")
 show_magicians(copy_great_magicians);