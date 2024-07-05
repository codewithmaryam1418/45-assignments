let userNames = ["Maryam","Arbab","Muzammil","Admin","Mohsin"]

userNames = []

if (userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}else{
    // Using ForEach Loop on Array
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
         console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again.`)
    }
})
}