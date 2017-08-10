console.log('connected to test.js');

$(function() {
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
        console.log("ID", data.tracks.items[0].uri)
        $('.songResult').remove();
        for (var i = 0; i < 3; i++) {
          var $albumArt = $('<img>').attr('src', data.tracks.items[i].album.images[0].url).addClass('albumArt');
          var $songName = $('<p>').text(data.tracks.items[i].name).addClass("songName");
          var $artistName = $('<p>').text(data.tracks.items[i].artists[0].name).addClass("artistName");

          var $playButton = $(`<iframe src="https://open.spotify.com/embed?uri=${data.tracks.items[i].uri}" width="80" height="100" frameborder="0" allowtransparency="true"></iframe>`)

          var $songResultDiv = $('<div>').addClass('songResult');
          $songResultDiv.append($albumArt).append($songName).append("<br>").append("<br>").append("<br>").append("<br>").append($artistName).append($playButton);
          $('#map').after($songResultDiv);
        }
      }, function(err) {
        console.error(err);
      });


    // send get request to google maps geocoding API
    // get latLng and update map
    // https://developers.google.com/maps/documentation/geocoding/intro
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${$query}`;
    // GET request
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json'
      })
      .done((res) => {
        console.log('in done');

        var latLng = res.results[0].geometry.location;
        console.log(latLng);

        initMap(latLng.lat, latLng.lng);
      })
      .fail(() => {
        console.log('google geocoding request failed');
      })
      .always(() => {
        console.log('google geocoding request complete');
      });
  });
});

function initMap(latitude, longitude) {
  var def = {
    lat: latitude,
    lng: longitude
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: def
  });

  var marker = new google.maps.Marker({
    position: def,
    map: map
  });
}
