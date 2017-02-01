var Countries = require('../models/countries');
// var MapWrapper = require('../models/mapWrapper');

var UI = function() {
  this.countries = new Countries();
  this.countries.getCountries(function(results) {
    this.render(results);
  }.bind(this));
}

UI.prototype = {
  render: function(countries) {
    var body = document.querySelector('body');
    var select = document.createElement('select');
    
    countries.forEach(function(country) {
      var option = document.createElement("option");
      // console.log(country);
      option.innerText = country.name;
      option.value = country.name;
      select.appendChild(option);
    });

    var button = document.createElement('input');
    button.setAttribute('type', 'submit');
    body.appendChild(button)

    button.onclick = function(event) {

      var country;

      for (var result of countries) {
        if (select.value === result.name) {
          country = result;
        }
      }
      // console.log(country);
      country = {name: country.name, capital: country.capital, region: country.region};
      jsonCountry = JSON.stringify(country);
 

      this.countries.makePostRequest("/api/countries", function() {
        console.log(this.responseText);
      }, jsonCountry);

      var ul = document.createElement('ul');

      var name = document.createElement("li");
      name.innerText = "Country: " + country.name;
      name.value = country.name;
      ul.appendChild(name);

      var capital = document.createElement("li");
      capital.innerText = "Capital: " + country.capital;
      capital.value = country.capital;
      ul.appendChild(capital);

      var region = document.createElement("li");
      region.innerText = "Region: " + country.region;
      region.value = country.region;
      ul.appendChild(region);

      
      body.appendChild(ul);

      // var container = document.querySelector('#map-container');
      // var coords = {lat: country.latlng[0], lng: country.latlng[1]};
      
      // var MapWrapper = new MapWrapper(container, coords, 6);
    }.bind(this);
    
    
    body.appendChild(select);

    
  },
  // renderBucketlist: function() {
  //   this.countries.makeRequest('/api/countries', function() {
  //   return this.responseText;
  //     // console.log(this.responseText);
  //   });
  // }
}

module.exports = UI;