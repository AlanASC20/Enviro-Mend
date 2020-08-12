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
    if (search.value == "China") {
        console.log("you searched China");
    }
    if (search.value == "Brazil") {
        console.log("you searched Brazil");
    }
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
            zoom: 5,
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


    // fetch('https://cors-anywhere.herokuapp.com/http://bloowatch.org/developers/json/species')
    // .then(function (animal) {
    //     return animal.json();
    // })
    // .then(function (json){
    //     displayAnimal(json);
    // })



    function displaylocation(location) {
        let features = [];

        for (let i = 0; i < location.Response.length; i++) {
            let lat = parseInt(location.Response[i].Latitude);
            let long = parseInt(location.Response[i].Longitude);
            let countryName = (location.Response[i].Name);
            if (countryName == "Brazil") {
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Brazil</strong> <br>" + "<i>Number Endangered: 10434 </i> <br>" + "Notable Species:<br> <a href=\"https://www.iucnredlist.org/species/22690819/125046717\" target=\"_blank\">Purple-winged Ground-dove</a><br> <a href=\"https://www.iucnredlist.org/species/3571/17936805\" target=\"_blank\">Buffy-headed Marmoset</a><br> " + "<br><a href=\"https://www.iucnredlist.org/search?permalink=af72708e-040d-458e-b28b-217c82ead0c8\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                });
            }
            if(countryName == "Canada"){
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Canada</strong>" + "<br><a href=\"https://www.iucnredlist.org/search?permalink=34e0c5e3-bd10-464f-81e0-5a6a479649b4\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                })
            }
            if(countryName == "Angola"){
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Angola</strong>" + "<br><a href=\"https://www.iucnredlist.org/search?permalink=7b4c1a0a-9701-481b-a81c-1e99889745c6\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                })
            }
            if(countryName == "Germany"){
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Germany</strong>" + "<br><a href=\"https://www.iucnredlist.org/search?permalink=dd1250bd-9c7e-47cf-aff7-27ecf48afd12\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                })
            }
            if(countryName == "Australia"){
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Australia</strong>" + "<br><a href=\"https://www.iucnredlist.org/search?permalink=acdf753a-3a60-4972-ad30-74030a5f9604\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                })
            }
            if(countryName == "Antarctica"){
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Antarctica</strong>" + "<br><a href=\"https://www.iucnredlist.org/search?permalink=bf235254-c502-4976-ab14-4062b080c1ed\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                })
            }
            if (countryName == "China") {
                features.push({
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>China</strong> <br>" + "<i>Number Endangered: 9819 </i> <br>" + "Notable Species:<br> <a href=\"https://www.iucnredlist.org/species/867/3146005\" target=\"_blank\">Chinese Alligator</a><br> <a href=\"https://www.iucnredlist.org/species/13508501/17943490\" target=\"_blank\">Myanmar Snub-nosed Monkey</a><br> " + "<br><a href=\"https://www.iucnredlist.org/search?permalink=618b1040-0a8b-4bde-a72b-6f9a6ef66111\" target=\"_blank\">All endangered species</a></br>",
                        'icon': 'veterinary'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [long, lat]
                    },
                });
            } else {
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







})


let urlWiki = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php";

fetch(urlWiki)
    .then(function (response) {
        return response.json();
    })


    .then(function (wikiJson) {
        displaywiki(wikiJson);
    })

function displaywiki(wiki) {
    let params = {
        action: "query",
        list: "search",
        srsearch: "List of endangered species" + search.value,
        format: "json"
    };
    urlWiki = urlWiki + "?origin=*";
    Object.keys(params).forEach(function (key) {
        urlWiki += "&" + key + "=" + params[key];
    });
}







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




//get the modal
//let modal= document.querySelector("#mymodal");
//get the botton that opens that modal 
//let btn =document.querySelector("#btn");
//get the <span> element that closes the modal
//let span= document.querySelector("#close");
// when the user clicks the button, open the modal
//btn.onclick = function(){
//   modal.style.display="block";
//}
//when the user clicks on <span> (x), close the modal
//span.onclick=function(){
// modal.style.display="none";
//}
//when the user clicks anywhere outside of the modal,close it
//window.onclick=function(event){
// if (event.target == modal){
//  modal.style.display="none";
// }
//}