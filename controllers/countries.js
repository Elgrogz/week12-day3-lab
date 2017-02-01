var express = require('express');
var app = express();
var countryRouter = express.Router();
//models
//since we don't have a database we'll use our front end models at the moment
var countries = require('../client/src/models/countries')();
var Country = require('../client/src/models/country');

var CountryQuery = require('../client/db/countryQuery');
var query = new CountryQuery();

//film by id
countryRouter.get('/:id', function(req, res){
  res.json(countries[req.params.id]);
});

//film index
countryRouter.get('/', function(req, res) {
  // res.json(countries);
  query.all(function(results) {
    res.json(results);
  });
});

//film update
countryRouter.put('/:id', function(req, res) {
  var country = new Country({
    name: req.body.name,
  });
  countries[req.params.id] = country;
  res.json({data: countries});
});

//add new country
countryRouter.post('/', function(req, res) {
  var country = new Country({
    name: req.body.name
  });
  query.add(country);
  query.all(function(results) {
    console.log(results);
    res.json(results);
  });
});

//delete country
countryRouter.delete('/:id', function(req, res) {
  countries.splice(req.params.id, 1);
  res.json({data: countries});
});



module.exports = countryRouter;