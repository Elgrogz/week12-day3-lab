var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function() {
  this.url = 'mongodb://localhost:27017/countries';
};

CountryQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db)
    {
      //why if statement?
      if (db) {
        var collection = db.collection('bucketList');
        collection.find().toArray(function(err, docs)
         {
            onQueryFinished(docs);
        });
      }
    })
  },
  add: function(country) {
    MongoClient.connect(this.url, function(err, db)
    {
      if (db) {
        var collection = db.collection('bucketList');
        collection.insert(country)
      }
    }
  )}
};

module.exports = CountryQuery;