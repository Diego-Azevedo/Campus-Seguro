// Initialize and add the map
function initMap(): void {
  // The location of floripa
  const floripa = { lat: -27.601590, lng:  -48.520749 };  


  // The map, centered at floripa
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      mapId: '8bee409103f15c38',
      zoom: 16,
      center: floripa,
    }
  );

  // The marker, positioned at floripa
  const marker = new google.maps.Marker({
    position: floripa,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;