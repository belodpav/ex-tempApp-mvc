/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return _qs; });\n/**\r\n * Returns DOM element by selector\r\n * wrapper on querySelector\r\n * @param {string} selector\r\n * @return {Node}\r\n */\r\nfunction _qs(selector, scope) {\r\n  return (scope || document).querySelector(selector);\r\n}\r\n/**\r\n * Adds event listener to the element with type event\r\n * @param {Node} element\r\n * @param {string} type\r\n * @param {func} handler \r\n */\r\nfunction _on(element, type, handler) {\r\n  element.addEventListener(type, handler);\r\n}\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return convertCelToFah; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return convertFahToCel; });\n/**\r\n * Converts value in celsius to fahrenheit\r\n * @param {number} x - value in celsius degrees\r\n * @return {number}\r\n */\r\nfunction convertCelToFah(x) {\r\n  return x*1.8 + 32;\r\n}\r\n\r\n/**\r\n * Converts value in fahrenheit to celsius\r\n * @param {number} x - value in fahreinheit degrees\r\n * @return {number}\r\n */\r\nfunction convertFahToCel(x) {\r\n  return (x - 32)/1.8;\r\n}\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/converts.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/converts.js?");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers___ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_converter__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_converter__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_converter__ = __webpack_require__(5);\n\r\n\r\n\r\n\r\n\r\nObject(__WEBPACK_IMPORTED_MODULE_0__helpers___[\"a\" /* _on */])(window, 'load', function(){\r\n  let view = new __WEBPACK_IMPORTED_MODULE_1__views_converter__[\"a\" /* default */](),\r\n      model = new __WEBPACK_IMPORTED_MODULE_2__models_converter__[\"a\" /* default */](0),\r\n      controller;\r\n\r\n  view.model = model;\r\n  model.view = view;\r\n  controller = new __WEBPACK_IMPORTED_MODULE_3__controllers_converter__[\"a\" /* default */](view, model); \r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers___ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_converts__ = __webpack_require__(1);\n\r\n\r\n\r\nconst ConverterView = (function(){\r\n\r\n  /**\r\n   * @constructor\r\n   * View\r\n   * @param {Object} model\r\n   */\r\n  function View() {\r\n    \r\n    this._inputCel = Object(__WEBPACK_IMPORTED_MODULE_0__helpers___[\"b\" /* _qs */])('.app__input-control[data-temp=\"cel\"]');\r\n    this._inputFah = Object(__WEBPACK_IMPORTED_MODULE_0__helpers___[\"b\" /* _qs */])('.app__input-control[data-temp=\"fah\"]');\r\n  }\r\n\r\n  /** \r\n   * Delegates handing of changing celsius temperature to the controller\r\n   * @param {func} handler\r\n   */\r\n  View.prototype.changeTempCel = function(handler) {\r\n    Object(__WEBPACK_IMPORTED_MODULE_0__helpers___[\"a\" /* _on */])(this._inputCel, 'input', handler)\r\n  }\r\n  /** \r\n   * Delegates handing of changing Fahrenheit temperature to the controller\r\n   * @param {func} handler\r\n   */\r\n  View.prototype.changeTempFah = function(handler) {\r\n    Object(__WEBPACK_IMPORTED_MODULE_0__helpers___[\"a\" /* _on */])(this._inputFah, 'input', handler)\r\n  }\r\n\r\n  /**\r\n   * Updates view\r\n   */\r\n  View.prototype.update = function() {\r\n    const temp = this.model.getTemp();\r\n\r\n    updateInput(this._inputCel, temp, null);\r\n    updateInput(this._inputFah, temp, __WEBPACK_IMPORTED_MODULE_1__helpers_converts__[\"a\" /* convertCelToFah */]);\r\n  }\r\n\r\n  // Private methods\r\n  /**\r\n   * updates input value\r\n   * @param {Node} input\r\n   * @param {number} value\r\n   * @param {funct} converter\r\n   */\r\n  function updateInput(input, value, converter) {\r\n    let newVal = converter ? converter(value) : value;\r\n\r\n    input.value = Math.round(newVal*10)/10;\r\n  }\r\n\r\n\r\n  return View;\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (ConverterView);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/views/converter.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/views/converter.js?");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const ConverterModel = (function(){\r\n  /**\r\n   * @constructor\r\n   * Model\r\n   * @param {Object} view\r\n   * @param {number} temp - initial temperature value in celsius\r\n   */\r\n  function Model(temp) {\r\n    this._temp = temp;\r\n  }\r\n\r\n  /**\r\n   * Set temperature\r\n   * @param {number} temp - tempearature value in celsius\r\n   */\r\n  Model.prototype.setTemp = function(temp) {\r\n    this._temp = temp;\r\n    notify.call(this);\r\n  }\r\n\r\n  /**\r\n   * Get temperature\r\n   * @return {number}\r\n   */\r\n  Model.prototype.getTemp = function() {\r\n    return this._temp;\r\n  }\r\n\r\n  // Private methods\r\n  \r\n  /**\r\n   * Notify observer that model was changed\r\n   */\r\n  function notify() {\r\n\r\n    this.view.update();\r\n  }\r\n\r\n  return Model;\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (ConverterModel);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/models/converter.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/models/converter.js?");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_converts__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_validation__ = __webpack_require__(6);\n\r\n\r\n\r\nconst ConverterController = (function(){\r\n\r\n  /**\r\n   * @constructor\r\n   * Controller\r\n   * @param {Object} view\r\n   * @param {Object} model\r\n   */\r\n  function Controller(view, model) {\r\n    this._view = view;\r\n    this._model = model;\r\n\r\n    this._view.changeTempCel(handleCelTemp.bind(this));\r\n    this._view.changeTempFah(handleFahTemp.bind(this));\r\n  }\r\n\r\n  /**\r\n   * Handing Celsius input changes\r\n   */\r\n  function handleCelTemp(e) {\r\n    const value = e.target.value;\r\n\r\n    if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_validation__[\"a\" /* isValidTemp */])(value)) {\r\n      this._model.setTemp(+value);\r\n    }\r\n    \r\n  }\r\n\r\n  /**\r\n   * Handing Fahrenheit input changes\r\n   */\r\n  function handleFahTemp(e) {\r\n    let value =  e.target.value;\r\n\r\n    if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_validation__[\"a\" /* isValidTemp */])(value)) {\r\n      value = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_converts__[\"b\" /* convertFahToCel */])(+value);\r\n      this._model.setTemp(value);\r\n    }\r\n  }\r\n\r\n  return Controller;\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (ConverterController);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/converter.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/converter.js?");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return isValidTemp; });\n/**\r\n * Returns true if it is valid nubmer\r\n * @param {string} str\r\n * @return {bool}\r\n */\r\nfunction isValidTemp(str) {\r\n  const pattern = /\\-\\d{1,}/;\r\n  let matchArr, matchStr;\r\n  matchArr = str.match(pattern);\r\n  matchStr = matchArr ? matchArr[0] : '';\r\n\r\n  if (+str && !str.endsWith('.') || matchStr.length === str.length) {\r\n    return true;\r\n  }\r\n\r\n  return false;\r\n}\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/validation.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/validation.js?");

/***/ })
/******/ ]);