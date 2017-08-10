$(function() {
    // default position is New York, NY
    initMap(40.730610, -73.935242);

});

function initMap(latitude, longitude) {
    var def = {lat: latitude, lng: longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: def
    });

    var marker = new google.maps.Marker({
      position: def,
      map: map
    });
}
