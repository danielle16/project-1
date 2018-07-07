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
 
    async function main() {
      let response = await fetch(proxyUrl + targetUrl, {
        method: 'GET',
        headers: {
            'user-key': '4bc5a8c3105be3ab582c3c049aed2a6d',
        //   'user-key': '3cd46870c24a1fcd4c922507776f80af',
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
            'user-key': '4bc5a8c3105be3ab582c3c049aed2a6d',
            'Accept': 'application/json'
          }
        });
 
        response2 = await response2.json();
 
        similarNames.push(response2[0].name);
        localStorage.setItem("recommended", similarNames);
        similarImgs.push(response2[0].cover.cloudinary_id);
 
      }
 
      for (let j = 0; j < similarImgs.length; j++) {
        let src = "https://images.igdb.com/igdb/image/upload/t_cover_small_2x/" + similarImgs[j] + ".jpg";
        divId = "recommendedGame" + j;
        $(".recommended").append($("<div id=" + divId + "></div>"));
        $('#' + divId).append($("<img src='" + src + "'>"));
        let title = similarNames[j];
        $("#" + divId).append($("<div class ='title'>" + title + "</div>"));
      }
    }
 
    main();
 
 });