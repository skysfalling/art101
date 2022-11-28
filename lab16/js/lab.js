/* Author: Kari Kranich
* Created: Nov 1
* License: Public Domain
*/

//URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"
URL = "https://xkcd.com/614/info.0.json";

// attach click action to button
$('#activate').click(function(){ 
      $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // Whether this is a POST or GET request
        type: "GET",

        // The type of data we expect back
        dataType : "json",
        
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            console.log(data);

            $("#out_title").html(data.safe_title);
            $("#image").attr("src", data.img);
        },

        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
      })
});



