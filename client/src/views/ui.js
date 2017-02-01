var Countries = require('../models/countries');

var UI = function() {
  var countries = new Countries();
  countries.all(function(results) {
    this.getDropdown(results);
    // this.render(result);
  }.bind(this));
}

UI.prototype = {
  getDropdown: function(countries) {
    var body = document.querySelector('body');
    var select = document.createElement('select');
    
    countries.forEach(function(country) {
      var option = document.createElement("option");
      option.innerText = country.name;
      option.value = country;
      console.log(country.name);
      select.appendChild(option);
    });
    body.appendChild(select);
  }
}



// var body = document.querySelector('body');
// var select = document.createElement('select');
// countries.forEach(function(country) {
//   var option = document.createElement("option");
//   option.innerText = country.name;
//   option.value = country.name;
//   body.appendChild('select');
//   select.appendChild('option');
// });

module.exports = UI;