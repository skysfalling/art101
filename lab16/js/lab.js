/* Author: Kari Kranich
* Created: Nov 1
* License: Public Domain
*/

//URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"
URL = "https://xkcd.com/614/info.0.json";

// attach click action to button
$('#activate').click(function(){ 
    $.ajax({
        url: 'http://mysite.microsoft.sample.xyz.com/api/mycall',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "POST", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {
        },
        success: function (result) {
            console.log(result);
        },
        error: function () {
            console.log("error");
        }
    })
});



