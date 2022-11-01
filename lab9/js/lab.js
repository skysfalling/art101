/* Author: Sky Casey
* Created: Oct 24
* License: Public Domain
*/

const outputEl = document.getElementById("output");

const new1El = document.createElement("p");
new1El.textContent = "ELEMENT 1";
new1El.style.color = "purple";

const new2El = document.createElement("q");
new2El.textContent = "ELEMENT 2";
new2El.style.color = "red";

outputEl.append(new1El, new2El);