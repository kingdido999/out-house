/*
 * Modified based on the following examples:
 * Geolocation:
 * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
 */

function initializeGeolocation() {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // connect position coordinates
            var pos = position.coords.latitude + ',' + position.coords.longitude;

            // get address input element
            var address = document.getElementsByClassName('start-address')[0];

            // change address input value to current address
            address.value = pos;
        }, function() {
            // geolocation failed
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        alert('Error: The Geolocation service failed.');
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}
