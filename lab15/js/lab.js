/* Author: Kari Kranich
* Created: Nov 1
* License: Public Domain
*/

//URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"
URL = "https://jservice.io/api/random";

// attach click action to button
$('#activate').click(function(){ 
    $.ajax({
        // The URL for the request (from the api docs)
        url: URL,

        // Whether this is a POST or GET request
        type: "GET",

        // The type of data we expect back
        dataType : "json",

        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            // console.log(data[0]);
            $("#out_title").html(data[0].answer);
            $("#out_info").html(data[0].question);
        },

        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
});



