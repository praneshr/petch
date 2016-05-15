module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./server";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(3);

	var _path2 = _interopRequireDefault(_path);

	var _request = __webpack_require__(4);

	var _request2 = _interopRequireDefault(_request);

	var _apiConfig = __webpack_require__(5);

	var _apiConfig2 = _interopRequireDefault(_apiConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const port = process.env.PORT || 9090;

	const app = new _express2.default();

	app.use(_express2.default.static('build'));

	app.get('/news', (req, res) => {
	  res.sendFile(_path2.default.join(_path2.default.resolve(_path2.default.dirname(), 'index.html')));
	});

	app.get('/', (req, res) => {
	  res.redirect('/news');
	});

	app.get('/api/:url', (req, res) => {
	  _request2.default.get(`${ _apiConfig2.default.host }${ _apiConfig2.default[req.params.url] }`, (err, response, body) => {
	    res.json(JSON.parse(body));
	  });
	});

	app.listen(9090, () => {
	  console.log(`Running at ${ port }`);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	const config = {
	  host: 'http://163.172.133.16:8080',
	  latest: '/trending'
	};

	exports.default = config;

/***/ }
/******/ ]);