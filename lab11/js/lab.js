/* Author: Sky Casey
* Created: Nov 1
* License: Public Domain
*/

// VV button  . click to start function
$("#c_button").click(function () { 
    // VV div id you would like to change
    //                              VV class you would like to toggle
    $("#challenges").toggleClass("special");
    $("#c_button").toggleClass("special");

});

$("#p_button").click(function () { 
    $("#problems").toggleClass("special");
    $("#p_button").toggleClass("special");

});

$("#r_button").click(function () { 
    $("#results").toggleClass("special");
    $("#r_button").toggleClass("special");

});

$("#o_button").click(function () { 
    $("#output").toggleClass("special");
    $("#o_button").toggleClass("special");

});