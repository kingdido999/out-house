/*
 * Modified based on the following examples:
 * Place Autocomplete:
 * https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
 */

var autocomplete;

function initializeAutoComplete() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */(document.getElementById('auto')),
      { types: ['geocode'] });
}
