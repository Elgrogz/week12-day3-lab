var Country = require('./country');

var Countries = function() {}

Countries.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  makePostRequest: function(url, callback, data) {
    var request =  new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json")
    request.onload = callback;
    request.send(data);
    // console.log(data);
  },
  populateList: function(countries) {
   var countryList = [];

   for (var result of countries) {
    // var country = new Country(result); 
    countryList.push(result);
    // console.log(result);
   }
   return countryList;
  },
  getCountries: function(callback) {
    var self = this;
    this.makeRequest("https://restcountries.eu/rest/v1/all", function() {
    if(this.status !== 200) return;
    var results = JSON.parse(this.responseText);
    var countries = self.populateList(results);
    callback(countries);
    })
  },
  // getBucketlist: function(callback) {
  //   var self = this;
  //   this.makeRequest("/api/countries", function() {
  //     if (this.status !== 200) {
  //       return;
  //     }
  //     var jsonString = this.responseText;
  //     var results = JSON.parse(jsonString);
  //     // console.log(results);
  //     var countries = self.populateFilms(results);
  //     callback(countries);
  //   });
  // }

}


module.exports = Countries;