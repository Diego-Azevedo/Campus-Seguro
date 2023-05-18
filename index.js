// Initialize and add the map
function initMap() {
  // The location of floripa
  const floripa = { lat: -27.601590, lng:  -48.520749 };
  // The map, centered at floripa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: floripa,
  });

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  // The marker, positioned at floripa
  const marker = new google.maps.Marker({
    position: floripa,
    map: map,
    icon: image,
  });
}

window.initMap = initMap;