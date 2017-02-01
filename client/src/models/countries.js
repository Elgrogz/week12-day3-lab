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
  all: function(callback) {
    var self = this;
    this.makeRequest("https://restcountries.eu/rest/v1/all", function() {
    if(this.status !== 200) return;
    var results = JSON.parse(this.responseText);
    var countries = self.populateList(results);
    callback(countries);
    // console.log(countries);
    })
  }
  // app: function() {
  //   var url = "https://restcountries.eu/rest/v1/all";
  //   makeRequest(url, requestComplete);
  // }

}


module.exports = Countries;