/* Author: Sky Casey
* Created: Nov 6
* License: Public Domain
*/

// VV button  . click to start function
$("#sort_button").click(function () { 
    const input = document.getElementById("input"); // get input
    sortingHat(input.value); // call function
    input.value = ""; // clear input 

});


function sortingHat(input){

    // get the length of 'input' string

    // use modulus (% operator) to get the remainder with 4: mod = length % 4;

    /* create a conditional that will return 
    Gryffindor, Ravenclaw, Slytherin, and Hufflepuff 
    depending on whether the value of mod is 0, 1, 2, or 3 */
    sortingHatResult = "dementor";


    // CREATE A NEW ELEMENT, WITH nameSorted AS TEXT
    const new1El = document.getElementById("out_result");
    new1El.textContent = sortingHatResult;

}
