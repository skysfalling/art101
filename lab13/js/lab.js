/* Author: Sky Casey
* Created: Nov 7
* License: Public Domain
*/

outputEl = document.getElementById("out_result");

// VV button  . click to start function
$("#input_button").click(function () { 
    var input = document.querySelector("input").valueAsNumber; // get input
    fizzbuzz(input); // call function
});


function fizzbuzz(max){

    // create out string 
    // loop through numbers 1 - 200
    for (i = 1; i < max; i++)
    {
        out_string = "";
        // if num is multiple of 3
        if (i % 3 == 0)
        {
            // add "Fizz!" to outsring
            out_string += "Fizz!";
        }

        // if num is multiple of 5
        if (i % 5 == 0)
        {
            // add "Buzz!" to outstring
            out_string += "Buzz!";
        }

        // if num is multiple of 7
        if (i % 7 == 0){
            // add "Boom!" to outstring
            out_string += "Boom!";
        }

       outputToPage(i + ": " + out_string);
    }

}

function outputToPage(str) {
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    newEl.classList.add("out_table")
    outputEl.appendChild(newEl);
}
