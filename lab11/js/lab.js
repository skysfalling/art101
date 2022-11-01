/* Author: Sky Casey
* Created: Nov 1
* License: Public Domain
*/

$("#challenges")
    .text('Challenges')
    .click(function () { alert('hi'); });

$("#problems")
    .text('Problems')
    .click(function () { alert('hi'); });

$("#results")
    .text('Results')
    .click(function () { alert('RESULT'); });

$("#output")
    .text('Output')
    .click(function () { 
        $("#output").css("fontSize", "60px");
    });
