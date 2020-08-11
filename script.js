// let request = new XMLHttpRequest();

// request.open('GET', 'https://cors-anywhere.herokuapp.com/https://swe-endangered-animals.appspot.com/single_country_data/');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();

let search = document.querySelector("#search_bar");
let searchCountry = document.querySelector("#search_country");
let searchAnimal = document.querySelector("#search_animal");


// fetch(urlCountry)
//     .then(response =>
//         response.json()
//     )
//     .then(json =>
//         console.log(json)   
//     );

// function displayData(countryData){
//     let country = countryData.name;
//     let animals = countryData.assoc_animals;
//     let habitats = countryData.assoc_habitats;
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmVzcGluYWwiLCJhIjoiY2tkb3RyYXZwMDlyODJzcDY1azVxb3dlbSJ9.7dCHehk-oD8U1Uu7RMmxJw';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [0, 0], // starting position [lng, lat]
    zoom: 0.5, // starting zoom
    maxZoom: 6,
});



// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
});

searchCountry.addEventListener("click", function () {
    console.log(search.value.split(' ').join('%20'));
    let urlCountry = "https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?pName=" + search.value;

    fetch(urlCountry)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            displayData(myJson);
        })

    function displayData(coords) {
        let lat = parseInt(coords.Response[0].Latitude);
        let long = parseInt(coords.Response[0].Longitude);
        console.log(lat, long);

        map.flyTo({
            center: [
                long, lat
            ],
            zoom: 7,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    }

})
map.on('load', function () {
    let urlCountry = "https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries";
    fetch(urlCountry)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            displaylocation(myJson);
        })

    function displaylocation(location) {
        let features = [];
        for (let i = 0; i < location.Response.length; i++) {
            let lat = parseInt(location.Response[i].Latitude);
            let long = parseInt(location.Response[i].Longitude);
            let countryName = (location.Response[i].Name);
            features.push({
                'type': 'Feature',
                'properties': {
                    'description': countryName,
                    'icon': 'veterinary'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [long, lat]
                },
            });
        }
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': features
            }
        })
        map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
                'icon-image': '{icon}-15',
                'icon-allow-overlap': true
            }
        })
    }






    searchAnimal.addEventListener("click", function () {
        console.log(search.value);
        let urlAnimal = "https://cors-anywhere.herokuapp.com/https://swe-endangered-animals.appspot.com/single_animal_data?animal_name=" + search.value;
        console.log(urlAnimal)
    })
})

// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmVzcGluYWwiLCJhIjoiY2tkb3RyYXZwMDlyODJzcDY1azVxb3dlbSJ9.7dCHehk-oD8U1Uu7RMmxJw';
// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [0, 0],
//     zoom: .01
// });




// fetch(urlCountry)
//     .then(response =>
//         response.json()
//     )
//     .then(json =>
//         console.log(json)   
//     );

//     function displayData(countryData){
//         let country = countryData.name;
//         let animals = countryData.assoc_animals;
//         let habitats = countryData.assoc_habitats;

//         let c = document.createElement('p');
//         let a = document.createElement('p');
//         let h = document.createElement('p');

//         c.innerHTML = country;
//         a.innerHTML = animals;
//         h.innerHTML = habitats;

//         document.body.appendChild(c);
//         document.body.appendChild(a);
//         document.body.appendChild(h);

//     }
// changing commit 