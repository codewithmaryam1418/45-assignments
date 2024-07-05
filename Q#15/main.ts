let guestList = ["Ayesha","Anoosha","Bushra","Eshaal"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi aa sakhti");

guestList.splice(0, 1, "Amina");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));