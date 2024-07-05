 function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items:")

    items.forEach(singleItem => console.log(singleItem));

    console.log("Now Enjoy Sandwich")
 }

 //Call the function 3 times with different number of arguments
 makeSandwich("Chicken","Cheese","Mayo","Egg");

 makeSandwich("Bread","Butter");

 makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce","Tomato");
