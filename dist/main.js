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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n\n\nfunction equals(arr1, arr2) {\n  return [arr1[0] === arr2[0] && arr1[1] === arr2[1]]\n}\n\nclass Board {\n  constructor() {\n    this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    this.generateRandomApple()\n  }\n\n  generateRandomApple() {\n    let randX = Math.floor(Math.random() * 20);\n    let randY = Math.floor(Math.random() * 20)\n    while (!this.snake.segments.some(el=> equals(el, [randX,randY]))) {\n      randX = Math.floor(Math.random() * 20)\n      randY = Math.floor(Math.random() * 20)\n    }\n    this.apple = [randX, randY]\n  }\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-view */ \"./src/snake-view.js\");\n\n\n\n$(() => {\n  const gameEl = $('.snake');\n  const gameView = new _snake_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameEl);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnakeView; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nfunction equals(arr1, arr2) {\n  return (arr1[0] === arr2[0] && arr1[1] === arr2[1])\n}\n\nclass SnakeView {\n  constructor($el) {\n    this.$el = $el;\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.setupKeyBinds();\n    this.gameInterval = setInterval(() => {\n      this.step()\n    }, 100);\n  }\n\n  step () {\n    this.board.snake.move();\n    this.$el.empty();\n    this.render();\n  }\n\n  render () {\n    let over = false\n    if (this.board.snake.segments.some(seg => seg[0] > 19 || seg[0] < 0 || seg[1] > 19 || seg[1] < 0)) {\n      over = true\n    }\n    for (let i = 0; i < 20; i++) {\n      const $ul = $('<ul>')\n      for (let j = 0; j < 20; j++) {\n        const $li = $('<li>')\n        // Snake snake is at segment\n        const snakesAtPos = this.board.snake.segments.filter(segment => equals([j, i], segment))\n        if (snakesAtPos.length === 1) {\n          $li.addClass('snake-body')\n        } else if (snakesAtPos.length > 1) {\n          over = true\n        }\n        if (equals(this.board.apple, [j,i])) {\n          // if snake is at apple\n          if (this.board.snake.segments.filter(segment => equals([j,i], segment)).length){\n            this.board.snake.growTurn = 2;\n            this.board.generateRandomApple();\n          } else {\n            $li.addClass('apple');\n          }\n        }\n        $ul.append($li);\n      }\n      this.$el.append($ul)\n    }\n    if (over) this.gameOver()\n  }\n\n  gameOver() {\n    window.clearInterval(this.gameInterval);\n    const $h1 = $('<h2>')\n    $h1.text(\"You Lose\")\n    const $h2 = $('<h1>')\n    $h2.text(\"Press Space to Restart\")\n    this.$el.append($h1)\n    this.$el.append($h2)\n  }\n\n  setupKeyBinds() {\n    $(document).keydown(e => {\n      if (e.keyCode === 38) {\n        this.board.snake.turn(\"N\")\n      } else if (e.keyCode === 39) {\n        this.board.snake.turn(\"E\")\n      } else if (e.keyCode === 40) {\n        this.board.snake.turn(\"S\")\n      } else if (e.keyCode === 37) {\n        this.board.snake.turn(\"W\")\n      } else if (e.keyCode === 32) {\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.gameInterval = setInterval(() => {\n          this.step()\n        }, 100);\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\nconst directions = [\"N\", \"S\", \"E\", \"W\"]\n\nfunction plus(arr1, arr2) {\n  return [arr1[0] + arr2[0], arr1[1] + arr2[1]]\n}\n\nfunction oppositeDir(dir1, dir2) {\n  return (\n    dir1 === \"N\" && dir2 === \"S\" ||\n    dir1 === \"S\" && dir2 === \"N\" ||\n    dir1 === \"E\" && dir2 === \"W\" ||\n    dir1 === \"W\" && dir2 === \"E\" \n    )\n}\n\nclass Snake{\n  constructor(){\n    this.direction = \"N\";\n    this.segments = [ [0,19] ];\n    this.growTurn = 0;\n  }\n\n  head () {\n    return this.segments.slice(-1)[0]\n  }\n\n  move () {\n    const head = this.head()\n    switch (directions.indexOf(this.direction)) {\n      case 0:\n        this.segments.push([head[0], head[1] - 1])\n        break;\n      case 1:\n        this.segments.push([head[0], head[1] + 1])\n        break;\n      case 2:\n        this.segments.push([head[0] + 1, head[1]])\n        break;\n      case 3:\n        this.segments.push([head[0] - 1, head[1]])\n        break;\n      default:\n        console('Hit default... something aint right.')\n        break;\n    }\n    if (this.growTurn >= 0) {\n      this.growTurn -= 1;\n    } else {\n      this.segments.shift();\n    }\n  }\n\n  turn (newDir) {\n    if (directions.indexOf(newDir) !== -1) {\n      if (!oppositeDir(this.direction, newDir))\n      this.direction = newDir\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });