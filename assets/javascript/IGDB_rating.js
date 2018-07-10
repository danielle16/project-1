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
             'user-key': '2f485515a05374f95ad36319a133c9c0',
           'Accept': 'application/json'
         }
       })
       .then(resp => resp.json())
       .then(json => {

          rating = json[0].aggregated_rating;
     
          fixedRating = rating.toFixed(2);
          $('.rating').html("<h3 class='uk-heading-bullet uk-card-title'>Rating </h3><h4>" + fixedRating + "%</h4> <progress id='js-progressbar' class='uk-progress progress_bar' value='0' max='100'></progress>");

    UIkit.util.ready(function () {

        var bar = document.getElementById('js-progressbar');

        var animate = setInterval(function () {

            bar.value += fixedRating;
            bar.value.addRule('background-color: red;');

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

    });


        //   summary = json[0].summary;
        //   $('#summary').text(summary);
    
         })
    
       });