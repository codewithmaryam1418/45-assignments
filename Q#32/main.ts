// Array of Current Users
let current_users = ["Amna","bushra","Muskan","Areeba","Ayesha"]

// Array of New Users
let new_users = ["Areesha","Atoofa","Bushra","Laiba","Muskan"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    //Making a condition for username already exist and save in our_condition variable
    if(our_condition){
    console.log(`Sorry ${new_one_user} is ready taken!`)
   }else{
    console.log(`This Username ${new_one_user} is avaliable`)
   }  
}) 

    
 

