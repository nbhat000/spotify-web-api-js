function loginWithSpotify() {
    var client_id = '6ae7142d987245249aed5a541bbc7869';
    var redirect_uri = 'http://localhost:8000/main.html';
    var scopes = 'playlist-modify-public';

    if (document.location.hostname == 'localhost') {
        redirect_uri = 'http://localhost:8000/main.html';
    }

    var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id +
        '&response_type=token' +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri);
    document.location = url;
}

loginWithSpotify();
