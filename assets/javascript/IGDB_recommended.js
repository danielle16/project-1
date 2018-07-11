$(document).ready(function() {

    var proxyUrl = 'https://vast-brook-22866.herokuapp.com/'
    var searchTerm = localStorage.getItem("key");
    var game = searchTerm;
    var idList = [];
    var targetUrl = "https://api-endpoint.igdb.com/games/?search=" + game + "&fields=name,games,url&limit=5"; //ADD
    var id = 0;
    var similarList = [];
    var similarImgs = [];
    var similarNames = [];
    var similarUrl = [];
    var src = "";
    var divId = "";
 
    async function main() {
      let response = await fetch(proxyUrl + targetUrl, {
        method: 'GET',
        headers: {
          'user-key': 'e5313449eecd55dfff2bc795bdf26d2e',
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
            'user-key': 'e5313449eecd55dfff2bc795bdf26d2e',
            'Accept': 'application/json'
          }
        });
 
        response2 = await response2.json();
        console.log(response2);
 
        similarNames.push(response2[0].name);
        similarUrl.push(response2[0].url);
        localStorage.setItem("recommended", similarNames);
        similarImgs.push(response2[0].cover.cloudinary_id);
 
      }
 
      for (let j = 0; j < similarImgs.length; j++) {
        let src = "https://images.igdb.com/igdb/image/upload/t_cover_small_2x/" + similarImgs[j] + ".jpg";
        divId = "recommendedGame" + j;
        $(".recommended").append($("<div id=" + divId + " class='recommendedGame'></div>"));
        let url = similarUrl[j];
        $('#' + divId).append($("<a href=" + url + " target='_blank'><img src='" + src + "'></a>"));
    
      }
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