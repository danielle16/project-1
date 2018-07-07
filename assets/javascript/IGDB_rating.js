$(document).ready(function() {

    var proxyUrl = 'https://vast-brook-22866.herokuapp.com/'
    
     var searchTerm = localStorage.getItem("key");
     var game = searchTerm;
     var targetUrl = "https://api-endpoint.igdb.com/games/?search="+game+"&fields=name,summary,aggregated_rating&limit=1";
     var rating = 0;
     var fixedrating = 0;
     var summary = "";
       fetch(proxyUrl + targetUrl, {
         method: 'GET',
         headers: {
             'user-key': '4bc5a8c3105be3ab582c3c049aed2a6d',
        //    'user-key': '3cd46870c24a1fcd4c922507776f80af',
           'Accept': 'application/json'
         }
       })
       .then(resp => resp.json())
       .then(json => {
          console.log(json);
          rating = json[0].aggregated_rating;
          console.log(rating);
          fixedRating = rating.toFixed(2);
          $('.rating').html("<h1>" + fixedRating + "%</h1>");
        //   summary = json[0].summary;
        //   $('#summary').text(summary);
    
         })
    
       });