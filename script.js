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

// fetch("https://cors-anywhere.herokuapp.com/https://swe-endangered-animals.appspot.com/single_country_data/?country_name=Azerbaijan")
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