// var url = `https://accounts.spotify.com/authorize/?client_id=6ae7142d987245249aed5a541bbc7869&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
//
// $.ajax({
//   url:url,
//   type:"GET",
//   // crossDomain: true,
//   dataType:"jsonp"
// })
// .done(function(response) {
//     console.log('in done');
//     console.log(response);
// })


var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQDly_vbupB3PXmITRY9WU-yWy_9pz6vWJLHJMqr3UBkhY3hdm-Jaqj5-_TcR792Pzf4kHUFOlNYhfwYcVGkk89pwLv-jdkoT85wiRyxB3_jnzna4GgF1qUFYH0croS399DBwn0WoSM60DGBuP2OSFHea_YVfjog5piJjNqFTsaTcXfaBGMQb0jm');

// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
  if (err) console.error(err);
  else console.log('Artist albums', data);
});

// get Elvis' albums, using Promises through Promise, Q or when
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data);
  }, function(err) {
    console.error(err);
  });
