let url = "https://cors-anywhere.herokuapp.com/https://swe-endangered-animals.appspot.com/single_country_data/";

fetch(url)
    .then(function(response){
        return response.json(); 
    })
    .then(function(myJson){
        displayData(myJson);   
    })
    
    function displayData(countryData){
        let country = countryData.name;
        let animals = countryData.assoc_animals;
        let habitats = countryData.assoc_habitats;

        let c = document.createElement('p');
        let a = document.createElement('p');
        let h = document.createElement('p');

        c.innerHTML = country;
        a.innerHTML = animals;
        h.innerHTML = habitats;
        
        document.body.appendChild(c);
        document.body.appendChild(a);
        document.body.appendChild(h);
        
    }