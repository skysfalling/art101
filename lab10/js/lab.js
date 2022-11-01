/* Author: Sky Casey
* Created: Nov 1
* License: Public Domain
*/

function sortUserName() {

    // GET NAME FROM USER
    var userName = window.prompt("Name here");
    console.log("userName =", userName);

    // SPLIT NAME INTO CHARACTER ARRAY
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // SORT THE ARRAY YOU JUST MADE
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    // JOIN THE FULL ARRAY INTO A NEW STRING (nameSorted)
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    // FIND THE 'OUTPUT' DIV
    const outputEl = document.getElementById("output");

    // CREATE A NEW ELEMENT, WITH nameSorted AS TEXT
    const new1El = document.createElement("p");
    new1El.textContent = nameSorted;
    new1El.style.color = "purple"; // what if it was purple?

    // ADD NEW ELEMENT TO THE 'OUTPUT' DIV
    outputEl.append(new1El); 

    // return string
    return nameSorted;
}


