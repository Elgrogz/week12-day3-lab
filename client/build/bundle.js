/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function() {
  new UI();
}

window.onload = app;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Countries = __webpack_require__(2);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Country = __webpack_require__(3);

var Countries = function() {}

Countries.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  populateList: function(countries) {
   var countryList = [];

   for (var result of countries) {
    var country = new Country(result); 
    countryList.push(country);
    // console.log(country.name);
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Country = function(options) {
  this.name = options.name;
  // this.capital = options.capital;
  // this.continent = options.continent;
}

module.exports = Country;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map