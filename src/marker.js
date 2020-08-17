import mapboxgl from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
    const newMarker = document.createElement('div')
    newMarker.style.width = "30px";
    newMarker.style.height = "40px";
    newMarker.style.backgroundImage = `url(${iconURLs[type]})`;
    new mapboxgl.Marker(newMarker).setLngLat(coords).addTo(map)
};

export default buildMarker;