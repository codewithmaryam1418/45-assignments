var guestList = ["Ayesha", "Anoosha", "Bushra", "Eshaal"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aa sakhti");
guestList.splice(0, 1, "Amina");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
