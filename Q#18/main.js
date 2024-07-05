var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and Print its Original Order
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);
// Print the Array in Alphabetical order without modifying the Actual List
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesTovisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesTovisit);
// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());
// Print the Array to show that it's back to its orginal order
console.log("Back to Original Order:", countriesTovisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
// We have Changed Again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());
