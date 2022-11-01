/* Author: Sky Casey
* Created: Oct 19
* License: Public Domain
*/

document.write("Hello");

transport = ["Ford Taurus", "bike", "bus", "Lime Scooter"];
document.writeln("Kinds of Transprortation I use: ", transport, "</br>")


myMainRide = {
    make: "KTM",
    model: "Duke",
    color: "Orange",
    year: 1995
}

document.writeln("Kinds of Transprortation I use: ", transport, "</br>")
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'),  "</pre>");
