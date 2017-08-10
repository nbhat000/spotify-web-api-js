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

      }, function(err) {
        console.error(err);
    });
  });

});
