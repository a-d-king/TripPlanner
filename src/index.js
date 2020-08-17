import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiYWRraW5nNzEwIiwiYSI6ImNrZHlwa25mOTF1azQydm1jcDc0ZzJ3MDgifQ.5rW8JxraOoug2ULewzJFlg";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});
