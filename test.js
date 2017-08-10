console.log('connected to test.js');

$(function () {
  console.log('inside dom ready');

  // create EventListener
  $('#submit').on('click', function(event) {
    // prevent page refresh
    // event.preventDefault();

    // grab query
    var $query = $('#field').val();
    console.log($query);

    // query spotify and log values
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken('BQDly_vbupB3PXmITRY9WU-yWy_9pz6vWJLHJMqr3UBkhY3hdm-Jaqj5-_TcR792Pzf4kHUFOlNYhfwYcVGkk89pwLv-jdkoT85wiRyxB3_jnzna4GgF1qUFYH0croS399DBwn0WoSM60DGBuP2OSFHea_YVfjog5piJjNqFTsaTcXfaBGMQb0jm');
    spotifyApi.searchTracks($query)
      .then(function(data) {
        // manipulate data here
        console.log(`searching ${$query}`, data);
        console.log("artistName", data.tracks.items[0].artists[0].name);
        console.log("songName", data.tracks.items[0].name);
        console.log("albumArt", data.tracks.items[0].album.images[0].url);

        for (var i=0; i<3; i++) {
          var $albumArt= $('<img>').attr('src', data.tracks.items[i].album.images[0].url).addClass('albumArt');
          var $songName = $('<p>').text(data.tracks.items[i].name).addClass("songName");
          var $artistName = $('<p>').text(data.tracks.items[i].artists[0].name).addClass("artistName");

          var $songResultDiv = $('<div>').addClass('songResult');
          $songResultDiv.append($albumArt).append($songName).append("<br>").append("<br>").append("<br>").append("<br>").append($artistName);
          $('#map').after($songResultDiv);
        }
      }, function(err) {
        console.error(err);
    });
  });

});
