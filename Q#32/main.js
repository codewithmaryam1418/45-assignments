// Array of Current Users
var current_users = ["Amna", "bushra", "Muskan", "Areeba", "Ayesha"];
// Array of New Users
var new_users = ["Areesha", "Atoofa", "Bushra", "Laiba", "Muskan"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Making a condition for username already exist and save in our_condition variable
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is ready taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is avaliable"));
    }
});
