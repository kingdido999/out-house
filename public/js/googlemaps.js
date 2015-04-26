/*
 * Modified based on the following examples:
 * Place searches:
 * https://developers.google.com/maps/documentation/javascript/examples/place-search
 *
 * Geocoding service:
 * https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
 *
 * Directions service:
 * https://developers.google.com/maps/documentation/javascript/examples/directions-simple
 *
 * Circles:
 * https://developers.google.com/maps/documentation/javascript/examples/circle-simple
 *
 * Text Directions:
 * https://developers.google.com/maps/documentation/javascript/examples/directions-panel
 */

var map;
var geocoder;
var geoOrigin; // geocoded location for origin address
var infowindow; // popup window for each marker
var radiusCircle;


function initialize() {
    geocoder = new google.maps.Geocoder();

    // get address and radius values from corresponding html elements
    var address = document.getElementById('address').innerHTML;
    var radius = document.getElementById('radius').innerHTML;

    // get geocoded location for the address
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            geoOrigin = results[0].geometry.location;

            // place google map into #map-canvas
            map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: geoOrigin,
                zoom: 15
            });

            // special marker for origin
            createOriginMarker(geoOrigin);

            // draw a circle around the origin
            createCircle(geoOrigin, radius);

            var request = {
                location: geoOrigin,
                radius: radius,
                types: ['restaurant', 'shopping_mall']
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
        // set #destination value
        document.getElementById('destination').innerHTML = placeLoc.k + ',' + placeLoc.D;

        // button to set destination
        var btnSetDestination =
            '<div class="set-destination">' +
            '<input type="button"' +
            'class="btn-set-destination btn btn-primary btn-xs"' +
            'value="Set as destination"' +
            'onclick="getDirections(\'' + place.name + '\')">' +
            '</div>';

        var content = place.name + btnSetDestination;
        infowindow.setContent(content);
        infowindow.open(map, this);
    });
}

function createOriginMarker(origin) {
    var marker = new google.maps.Marker({
        map: map,
        position: origin,
        icon: '/img/origin.png'
    });
}

function createCircle(location, radius) {
    var populationOptions = {
        strokeColor: '#0000FF',
        strokeOpacity: 0.6,
        strokeWeight: 1,
        fillColor: '#0000FF',
        fillOpacity: 0.1,
        map: map,
        center: location,
        radius: parseInt(radius, 10)
    };

    circle = new google.maps.Circle(populationOptions);
}

function getDirections(placeName) {
    var start = geoOrigin;
    var end = document.getElementById('destination').innerHTML;
	  var method = document.getElementById('method').innerHTML.toUpperCase();
    var transportation = google.maps.TravelMode[method];

    // check if the user is logged in
    if (document.getElementById('check-in') != null) {
      showCheckInPanel(placeName);
    }

    // initialize direction services
    var directionsMap = new google.maps.Map(document.getElementById('map-directions'), {
        center: start,
        zoom: 15
    });
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    directionsDisplay.setMap(directionsMap);

    clearDirectionsPanel();
    directionsDisplay.setPanel(document.getElementById('directions-panel'));

    var request = {
        origin: start,
        destination: end,
        travelMode: transportation
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

function clearDirectionsPanel() {
    document.getElementById("directions-panel").innerHTML = "";
}

function showCheckInPanel(placeName) {
  document.getElementById('bathroom-name').innerHTML = placeName;
  document.getElementById('form-bathroom-name').value = placeName;
  document.getElementById('check-in').style.display = "block";
}

google.maps.event.addDomListener(window, 'load', initialize);
