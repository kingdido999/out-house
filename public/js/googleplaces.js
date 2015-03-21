var geocoder;
var map;
var infowindow;
var API_KEY = 'AIzaSyBDbsT9AqrUebFtJSVXFHTA6JtX6viD8JE';

function initialize() {
  geocoder = new google.maps.Geocoder();
  var address = document.getElementById('address').innerHTML;
  var radius = document.getElementById('radius').innerHTML;

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var geoCodedLocation = results[0].geometry.location;

      map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: geoCodedLocation,
        zoom: 15
      });

      var request = {
        location: geoCodedLocation,
        radius: radius,
        types: ['store']
      };

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);