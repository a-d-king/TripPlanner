import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiYmlnbWlrZW0iLCJhIjoiY2tkeXBsZ3hzMjd6NDJ5dDZhcmV6MmFncSJ9.dSkrpAtB0bAB8N-7xLDTng";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});
