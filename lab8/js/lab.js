/* Author: Sky Casey
* Created: Oct 24
* License: Public Domain
*/

function add_ten(x){
    return x + 10;
}


array = [5, 10, 20, 30];
console.log("Original Array:", array)
document.writeln("Original Array: ", array, "</br>");

map_array = array.map(add_ten)
console.log("Mapped Array:", map_array)
document.writeln("Mapped +10 Array: ", map_array, "</br>");



