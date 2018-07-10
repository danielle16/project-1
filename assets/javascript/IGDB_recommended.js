$(document).ready(function() {

    var proxyUrl = 'https://vast-brook-22866.herokuapp.com/'
    var searchTerm = localStorage.getItem("key");
    var game = searchTerm;
    var idList = [];
    var targetUrl = "https://api-endpoint.igdb.com/games/?search=" + game + "&fields=name,games&limit=5";
    var id = 0;
    var similarList = [];
    var similarImgs = [];
    var similarNames = [];
    var src = "";
    var divId = "";
    var title = "";
 
    async function main() {
      let response = await fetch(proxyUrl + targetUrl, {
        method: 'GET',
        headers: {
            // 'user-key': '4bc5a8c3105be3ab582c3c049aed2a6d',
          'user-key': 'b243c748150f43e8e7014dfae5c32ef3',
          'Accept': 'application/json'
        }
      });
 
      response = await response.json();
 
      idList = response[0].games;
 
 
      for (let i = 0; i < idList.length; i++) {
        id = idList[i];
        let targetUrl2 = "https://api-endpoint.igdb.com/games/" + id + "?fields=name,cover,url";
 
        let response2 = await fetch(proxyUrl + targetUrl2, {
          method: 'GET',
          headers: {
            'user-key': 'b243c748150f43e8e7014dfae5c32ef3',
            'Accept': 'application/json'
          }
        });
 
        response2 = await response2.json();
 
        similarNames.push(response2[0].name);
        localStorage.setItem("recommended", similarNames);
        similarImgs.push(response2[0].cover.cloudinary_id);
 
      }
 
      for (let j = 0; j < similarImgs.length; j++) {
        src = "https://images.igdb.com/igdb/image/upload/t_cover_small_2x/" + similarImgs[j] + ".jpg";
        divId = "recommendedGame" + j;

        $(".recommended").append("<img class='image' src='" + src + "'>");
        $('#' + divId).append($("<img class='image' src='" + src + "'>"));
        title = similarNames[j];
        $("#" + divId).append($("<div class ='title'>" + title + "</div>"));
        
        
        // var html = ();
        // $(".recommended").append(html);

      
      

        // var html = ("<li><img src='" + src + "'><div class='uk-position-center uk-panel'><h1>1</h1></div></li>");

      
              
        // var html = ("<img class='image' src='" + src + "'>");
        // var html = ("<h5>" + title + "</h5><img class='image' src='" + src + "'>");
        
        
        // var html1 = ("<div class='uk-position-relative uk-visible-toggle uk-light' uk-slider><ul class='uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m recommended'>" + html + "</ul><a class='uk-position-center-left uk-position-small uk-hidden-hover' href='#' uk-slidenav-previous uk-slider-item='previous'></a><a class='uk-position-center-right uk-position-small uk-hidden-hover' href='#' uk-slidenav-next uk-slider-item='next'></a></div>");

        // $(".recommended").append(html1);
        
        
        //  $("#" + divId).append($("<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom'><h3 class ='title uk-margin-remove'>" + title + "</h3>"));
       
      }

        temp3.append("<div class='row'><h2 class='col-sm-12 col-md-12 col-lg-12'>hello</h2></div>");

    }
 
   
    main();

 
 });


//  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="clsActivated: uk-transition-active; center: true">

//     <ul class="uk-slider-items uk-grid">
//         <li class="uk-width-3-4">
//             <div class="uk-panel">
//                 <img src="../docs/images/photo.jpg" alt="">
//                 <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
//                     <h3 class="uk-margin-remove">Bottom</h3>
//                     <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//             </div>
//         </li>

// $('#' + divId).append($("<div class='uk-position-relative uk-visible-toggle uk-light' uk-slider='clsActivated: uk-transition-active; center: true'><ul class='uk-slider-items uk-grid'> <li class='uk-width-3-4'><div class='uk-panel'><img src='" + src + "'></div></li></div>"));
// let title = similarNames[j];
// $("#" + divId).append($("<div class='uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom'><h3 class ='title uk-margin-remove'>" + title + "</h3>"));