/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fillTemplate.js":
/*!*****************************!*\
  !*** ./src/fillTemplate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlDoc\": () => (/* binding */ createHtmlDoc)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./src/keys.js\");\n\r\n// !! **************************** CLASS KeyButton\r\nclass KeyButton {\r\n    constructor(\r\n        id,\r\n        uprSymb = \"U\",\r\n        lwrSymb = \"l\",\r\n        width = 60,\r\n        twoSymbols = false\r\n    ) {\r\n        this.id = id;\r\n        this.width = width;\r\n        this.twoSymbols = false;\r\n        this.uprSymb = uprSymb;\r\n        this.lowSymb = lwrSymb;\r\n        twoSymbols = false;\r\n    }\r\n\r\n    createButton(id, dwnSymb, width, uprSymb = '') {\r\n        let btnBody = document.createElement(\"div\");\r\n        btnBody.classList.add(\"key\");\r\n        btnBody.id = id;\r\n        btnBody.style.width = width + \"px\";\r\n        // btnBody.style.flexGrow = width;\r\n        // btnBody.style.height = this.height;\r\n        let upLetter = document.createElement(\"h6\");\r\n        upLetter.classList.add(\"up__sign\");\r\n        upLetter.textContent = uprSymb;\r\n        btnBody.append(upLetter);\r\n        let dwLetter = document.createElement(\"h5\");\r\n        dwLetter.classList.add(\"down__sign\");\r\n        dwLetter.textContent = dwnSymb;\r\n        btnBody.append(dwLetter);\r\n        return btnBody;\r\n    }\r\n}\r\n\r\nfunction createHtmlDoc() {\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('wrapper');\r\n    document.body.appendChild(wrapper);\r\n\r\n    const textWrapper = document.createElement('div');\r\n    textWrapper.classList.add('text_area__wrapper');\r\n    wrapper.appendChild(textWrapper);\r\n\r\n    const inputArea = document.createElement('textarea');\r\n    inputArea.classList.add('text_area');\r\n    inputArea.id = 'example';\r\n    inputArea.cols = \"50\";\r\n    inputArea.rows = \"2\";\r\n    textWrapper.appendChild(inputArea);\r\n    textWrapper.appendChild(document.createElement('button'));\r\n    textWrapper.children[1].classList.add('clear_button');\r\n    textWrapper.children[1].textContent = 'X';\r\n\r\n    const helpWrapper = document.createElement('div');\r\n    helpWrapper.classList.add('help_wrapper');\r\n    textWrapper.appendChild(helpWrapper);\r\n    helpWrapper.appendChild(document.createElement('h3'));\r\n    helpWrapper.appendChild(document.createElement('h5'));\r\n    helpWrapper.appendChild(document.createElement('h5'));\r\n    helpWrapper.appendChild(document.createElement('h2'));\r\n    helpWrapper.children[0].textContent = 'Windows keyboard';\r\n    helpWrapper.children[1].textContent = 'Change language';\r\n    helpWrapper.children[2].textContent = 'Win + Space';\r\n    helpWrapper.children[3].classList.add('language_indicator');\r\n    helpWrapper.children[3].textContent = _keys_js__WEBPACK_IMPORTED_MODULE_0__.settings.lang.toUpperCase();\r\n\r\n    const keyBoardLayer = document.createElement(\"div\");\r\n    // document.body.prepend(keyBoardLayer);\r\n    wrapper.append(keyBoardLayer);\r\n    keyBoardLayer.classList.add(\"keys__container\");\r\n\r\n    for (let key in _keys_js__WEBPACK_IMPORTED_MODULE_0__.keysArray) {\r\n        const row = document.createElement(\"div\");\r\n        row.id = key;\r\n        row.classList.add(\"row\");\r\n        keyBoardLayer.appendChild(row);\r\n    }\r\n\r\n    //create virtual buttons\r\n    for (let key in _keys_js__WEBPACK_IMPORTED_MODULE_0__.keysArray) {\r\n        const row = document.getElementById(key);\r\n        _keys_js__WEBPACK_IMPORTED_MODULE_0__.keysArray[key].forEach((element) => {\r\n            const keyBtn = new KeyButton().createButton(\r\n                element[0],\r\n                element[1],\r\n                element[2],\r\n                element[3],\r\n\r\n            );\r\n\r\n            row.appendChild(keyBtn);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/fillTemplate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fillTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillTemplate.js */ \"./src/fillTemplate.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ \"./src/keys.js\");\n// import { keysArray } from \"./keys.js\";\r\n\r\n\r\n// import './css/style.css';\r\n// const leyboardWidth = 1200;\r\n// const leyboardHight = 400;\r\n\r\n// let localStorage = window.localStorage;\r\n_keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang= window.localStorage.getItem('lang');\r\n_keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.muteKeyboard= window.localStorage.getItem('mute');\r\nconst audio = new Audio(\"./assets/sounds/click.wav\");\r\n// let muteKeyboard = true;\r\n\r\nconst lightOn = true;\r\nconst lightOff = false;\r\n\r\n(0,_fillTemplate_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlDoc)();\r\n\r\nconst keysAll = document.querySelectorAll(\".key\");\r\nfor (const element of keysAll) {\r\n  // element.addEventListener(\"click\", keyMouseDown);\r\n  element.addEventListener(\"mousedown\", keyMouseDown);\r\n  element.addEventListener(\"mouseup\", keyMouseUp);\r\n}\r\n\r\nconst textArea = document.querySelector(\".text_area\");\r\n\r\ndocument.querySelector(\".clear_button\").addEventListener(\"click\", () => {\r\n  textArea.textContent = \"\";\r\n});\r\n\r\n// !! **************************** keypress listener\r\ndocument.addEventListener(\"keydown\", (ev) => {\r\n  // console.log('type=' + ev.type);\r\n  // console.log(' key=' + ev.key);\r\n  // console.log(' code=' + ev.code);\r\n  // console.log(e.shiftKey ? ' shiftKey' : '') +\r\n  //     (e.ctrlKey ? ' ctrlKey' : '') +\r\n  //     (e.altKey ? ' altKey' : '') +\r\n  //     (e.metaKey ? ' metaKey' : '') +\r\n  //     (e.repeat ? ' (repeat)' : '');\r\n  keyboardPress(ev);\r\n  playClick();\r\n});\r\n\r\n// !! ****************************  keyboardPress\r\nfunction keyboardPress(ev) {\r\n  // console.log(ev);\r\n  // console.log(ev.currentTarget);\r\n  // console.log(ev.target);\r\n\r\n  if (_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.hasOwnProperty(ev.code)) {\r\n    // console.log(ev.currentTarget);\r\n    document.getElementById(ev.code).classList.toggle(\"key_pressed\");\r\n  }\r\n//   let mouseDownEvent = new Event(\"mousedown\");\r\n//   let mouseUpEvent = new Event(\"mouseup\");\r\n//   document.getElementById(ev.code).dispatchEvent(mouseDownEvent);\r\n//   document.getElementById(ev.code).dispatchEvent(mouseUpEvent);\r\n  playClick();\r\n  printLetter(ev);\r\n//   ev.preventDefault();\r\n}\r\n// !! ****************************  illuminateKey\r\nfunction illuminateKey(pressedVirtKey, on = false) {\r\n  if (on) {\r\n    pressedVirtKey.classList.add(\"key_pressed\");\r\n  } else {\r\n    return new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        pressedVirtKey.classList.remove(\"key_pressed\");\r\n      }, 200);\r\n      resolve();\r\n    });\r\n  }\r\n}\r\n\r\n// !! ****************************  keyMouseDown\r\nfunction keyMouseDown(e) {\r\n  let virtKey = e.currentTarget;\r\n  let id = virtKey.id;\r\n  if (_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.hasOwnProperty(id)) {\r\n    _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys[id] = !_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys[id];\r\n    document.getElementById(id).classList.toggle(\"key_pressed\");\r\n  } else {\r\n    illuminateKey(virtKey, lightOn);\r\n    if (!_keys_js__WEBPACK_IMPORTED_MODULE_1__.specialKeysActions.includes(id) \r\n        && !(_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.Meta || _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.AltLeft || _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.AltRight|| _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.ControlLeft|| _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.ControlRight)){\r\n        printLetter(e);\r\n    }\r\n  }\r\n\r\n  playClick();\r\n}\r\n\r\n// !! ****************************  keyMouseUp\r\nfunction keyMouseUp(e) {\r\n  let id = e.currentTarget.id;\r\n  let virtKey = e.currentTarget;\r\n  if (!_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.hasOwnProperty(id)) {\r\n    illuminateKey(virtKey, lightOff).then(handleKeys(virtKey));\r\n  }\r\n}\r\n\r\n// !! ****************************  handleKeys\r\nfunction handleKeys(pressedVirtKey) {\r\n  let id = pressedVirtKey.id;\r\n  if (_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.Meta && pressedVirtKey.id == \"Space\") {\r\n    switchLanguage();\r\n    resetKeys();\r\n    return\r\n  }\r\n  if (_keys_js__WEBPACK_IMPORTED_MODULE_1__.specialKeysActions.includes(id)) {\r\n    textArea.focus();\r\n    switch (id) {\r\n      case \"Delete\":\r\n        textArea.dispatchEvent(new Event(\"\"));\r\n        break;\r\n      case \"Enter\":\r\n        console.log(textArea);\r\n        break;\r\n      case \"Tab\":\r\n        break;\r\n      case \"ArrowUp\":\r\n        break;\r\n      case \"ArrowLeft\":\r\n        break;\r\n      case \"ArrowDown\":\r\n        break;\r\n      case \"ArrowRight\":\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n  resetKeys();\r\n}\r\n\r\n// !! ****************************  resetKeys\r\nfunction resetKeys() {\r\n  for (const key in _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys) {\r\n    if (key != \"CapsLock\") {\r\n      _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys[key] = false;\r\n      document.getElementById(key).classList.remove(\"key_pressed\");\r\n    }\r\n  }\r\n}\r\n\r\n// !! ****************************  switchLanguage\r\nfunction switchLanguage() {\r\n  _keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang = _keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang == \"ru\" ? \"en\" : \"ru\";\r\n  window.localStorage.setItem('lang', _keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang)\r\n  let arr = _keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang == \"en\" ? _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArrayEN : _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArrayRU;\r\n\r\n  document.querySelector(\".language_indicator\").textContent =\r\n    _keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.lang.toUpperCase();\r\n\r\n  for (let key in arr) {\r\n    arr[key].forEach((arrEl) => {\r\n      document.getElementById(arrEl[0]).children[1].textContent = arrEl[1];\r\n      _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArray[key].forEach((arrKeysArr) => {\r\n          if (arrKeysArr.includes(arrEl[0])) {\r\n              arrKeysArr[1] = arrEl[1];\r\n          }\r\n      }); \r\n    //   keysArray[key][1] = element[1];\r\n    });\r\n  }\r\n\r\n}\r\n\r\n// !! ****************************  printLetter\r\nfunction printLetter(ev) {\r\n  if (ev.type == \"mousedown\") {\r\n    textArea.textContent += getLetter(ev.currentTarget.id);\r\n  } else if (ev.type == \"keypress\") {\r\n    textArea.textContent += ev.key;\r\n  }\r\n}\r\n\r\n// !! ****************************  getLetter\r\nfunction getLetter(id) {\r\n\r\n  console.log(id);\r\n  let shift = _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.ShiftLeft || _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.ShiftRight;\r\n  let alt = _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.AltLeft || _keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.AltRight;\r\n\r\n  for (let row in _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArray) {\r\n    for (let j = 0; j < _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArray[row].length; j++) {\r\n        let rowKeysArr = _keys_js__WEBPACK_IMPORTED_MODULE_1__.keysArray[row][j];\r\n      if (rowKeysArr.includes(id)) {\r\n        if (_keys_js__WEBPACK_IMPORTED_MODULE_1__.fixedKeys.CapsLock) {\r\n          return shift ? rowKeysArr[1].toLowerCase() : rowKeysArr[1].toUpperCase();\r\n        } else {\r\n            if (row === 'rowE') {\r\n                return shift ? rowKeysArr[3]: rowKeysArr[1].toUpperCase();\r\n            }\r\n            else{\r\n                return shift ? rowKeysArr[1].toUpperCase() : rowKeysArr[1].toLowerCase();\r\n            }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// !! ****************************  playClick\r\nfunction playClick() {\r\n  if (!_keys_js__WEBPACK_IMPORTED_MODULE_1__.settings.muteKeyboard) {\r\n    audio.play();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fixedKeys\": () => (/* binding */ fixedKeys),\n/* harmony export */   \"keysArray\": () => (/* binding */ keysArray),\n/* harmony export */   \"keysArrayEN\": () => (/* binding */ keysArrayEN),\n/* harmony export */   \"keysArrayRU\": () => (/* binding */ keysArrayRU),\n/* harmony export */   \"settings\": () => (/* binding */ settings),\n/* harmony export */   \"specialKeysActions\": () => (/* binding */ specialKeysActions)\n/* harmony export */ });\nconst settings = {\r\n    lang: 'en',\r\n    muteKeyboard: true,\r\n};\r\n\r\nconst keysArray = {\r\n    rowE: [\r\n        [\"Backquote\", \"~\", 60, \"`\"],\r\n        [\"Digit1\", \"1\", 60, \"!\"],\r\n        [\"Digit2\", \"2\", 60, \"@\"],\r\n        [\"Digit3\", \"3\", 60, \"#\"],\r\n        [\"Digit4\", \"4\", 60, \"$\"],\r\n        [\"Digit5\", \"5\", 60, \"%\"],\r\n        [\"Digit6\", \"6\", 60, \"^\"],\r\n        [\"Digit7\", \"7\", 60, \"&\"],\r\n        [\"Digit8\", \"8\", 60, \"*\"],\r\n        [\"Digit9\", \"9\", 60, \"(\"],\r\n        [\"Digit0\", \"0\", 60, \")\"],\r\n        [\"Minus\", \"-\", 60, \"_\"],\r\n        [\"Equal\", \"=\", 60, \"+\"],\r\n        [\"Backspace\", \"Backspace\", 130]\r\n    ],\r\n    rowD: [\r\n        [\"Tab\", \"Tab\", 90],\r\n        [\"KeyQ\", \"Q\", 60],\r\n        [\"KeyW\", \"W\", 60],\r\n        [\"KeyE\", \"E\", 60],\r\n        [\"KeyR\", \"R\", 60],\r\n        [\"KeyT\", \"T\", 60],\r\n        [\"KeyY\", \"Y\", 60],\r\n        [\"KeyU\", \"U\", 60],\r\n        [\"KeyI\", \"I\", 60],\r\n        [\"KeyO\", \"O\", 60],\r\n        [\"KeyP\", \"P\", 60],\r\n        [\"BracketLeft\", \"{\", 60],\r\n        [\"BracketRight\", \"}\", 60],\r\n        [\"Backslash\", \"\\\\\", 60],\r\n        [\"Delete\", \"Del\", 60]\r\n    ],\r\n    rowC: [\r\n        [\"CapsLock\", \"Caps Lock\", 160],\r\n        [\"KeyA\", \"A\", 60],\r\n        [\"KeyS\", \"S\", 60],\r\n        [\"KeyD\", \"D\", 60],\r\n        [\"KeyF\", \"F\", 60],\r\n        [\"KeyG\", \"G\", 60],\r\n        [\"KeyH\", \"H\", 60],\r\n        [\"KeyJ\", \"J\", 60],\r\n        [\"KeyK\", \"K\", 60],\r\n        [\"KeyL;\", \"L\", 60],\r\n        [\"Semicolon\", \":\", 60],\r\n        [\"Quote\", '\"', 60],\r\n        [\"Enter\", \"ENTER\", 130]\r\n    ],\r\n    rowB: [\r\n        [\"ShiftLeft\", \"Shift\", 130],\r\n        [\"Backslash\", \"\\\\\", 60],\r\n        [\"KeyZ\", \"Z\", 60],\r\n        [\"KeyX\", \"X\", 60],\r\n        [\"KeyC\", \"C\", 60],\r\n        [\"KeyV\", \"V\", 60],\r\n        [\"KeyB\", \"B\", 60],\r\n        [\"KeyN\", \"N\", 60],\r\n        [\"KeyM\", \"M\", 60],\r\n        [\"Period\", \".\", 60],\r\n        [\"NumpadDecimal\", \",\", 60],\r\n        [\"Slash\", \"/\", 60],\r\n        [\"ArrowUp\", \"⯅\", 60],\r\n        [\"ShiftRight\", \"Shift\", 60]\r\n    ],\r\n    rowA: [\r\n        [\"ControlLeft\", \"Ctrl\", 90],\r\n        [\"Meta\", \"Win\", 60],\r\n        [\"AltLeft\", \"Alt\", 60],\r\n        [\"Space\", \" \", 470],\r\n        [\"AltRight\", \"Alt\", 60],\r\n        [\"ControlRight\", \"Ctrl\", 90],\r\n        [\"ArrowLeft\", \"⯇\", 60],\r\n        [\"ArrowDown\", \"⯆\", 60],\r\n        [\"ArrowRight\", \"⯈\", 60]\r\n    ],\r\n};\r\n\r\nconst specialKeysActions = [\r\n    \"Backspace\",\r\n    \"Delete\",\r\n    \"Enter\",\r\n    \"ArrowLeft\",\r\n    \"ArrowDown\",\r\n    \"ArrowRight\",\r\n    \"ArrowUp\",\r\n    \"ControlLeft\",\r\n    \"ControlRight\",\r\n    \"AltLeft\",\r\n    \"AltRight\",\r\n    \"Meta\",\r\n    \"CapsLock\"\r\n];\r\n\r\nconst fixedKeys = {\r\n    \"ShiftLeft\": false,\r\n    \"ShiftRight\": false,\r\n    \"ControlLeft\": false,\r\n    \"ControlRight\": false,\r\n    \"AltLeft\": false,\r\n    \"AltRight\": false,\r\n    \"Meta\": false,\r\n    \"CapsLock\": false\r\n};\r\n\r\n\r\nconst keysArrayEN = {\r\n    rowD: [\r\n        [\"KeyQ\", \"Q\"],\r\n        [\"KeyW\", \"W\"],\r\n        [\"KeyE\", \"E\"],\r\n        [\"KeyR\", \"R\"],\r\n        [\"KeyT\", \"T\"],\r\n        [\"KeyY\", \"Y\"],\r\n        [\"KeyU\", \"U\"],\r\n        [\"KeyI\", \"I\"],\r\n        [\"KeyO\", \"O\"],\r\n        [\"KeyP\", \"P\"],\r\n        [\"BracketLeft\", \"{\"],\r\n        [\"BracketRight\", \"}\"],\r\n        [\"Backslash\", \"\\\\\"]\r\n    ],\r\n    rowC: [\r\n        [\"KeyA\", \"A\"],\r\n        [\"KeyS\", \"S\"],\r\n        [\"KeyD\", \"D\"],\r\n        [\"KeyF\", \"F\"],\r\n        [\"KeyG\", \"G\"],\r\n        [\"KeyH\", \"H\"],\r\n        [\"KeyJ\", \"J\"],\r\n        [\"KeyK\", \"K\"],\r\n        [\"KeyL;\", \"L\"],\r\n        [\"Semicolon\", \":\"],\r\n        [\"Quote\", '\"']\r\n    ],\r\n    rowB: [\r\n        [\"KeyZ\", \"Z\"],\r\n        [\"KeyX\", \"X\"],\r\n        [\"KeyC\", \"C\"],\r\n        [\"KeyV\", \"V\"],\r\n        [\"KeyB\", \"B\"],\r\n        [\"KeyN\", \"N\"],\r\n        [\"KeyM\", \"M\"],\r\n        [\"Period\", \".\"],\r\n        [\"NumpadDecimal\", \",\"],\r\n        [\"Slash\", \"/\"]\r\n    ],\r\n};\r\n\r\nconst keysArrayRU = {\r\n    rowE: [\r\n        [\"Backquote\", \"~\"],\r\n    ],\r\n    rowD: [\r\n        [\"KeyQ\", \"Й\"],\r\n        [\"KeyW\", \"Ц\"],\r\n        [\"KeyE\", \"У\"],\r\n        [\"KeyR\", \"К\"],\r\n        [\"KeyT\", \"Е\"],\r\n        [\"KeyY\", \"Н\"],\r\n        [\"KeyU\", \"Г\"],\r\n        [\"KeyI\", \"Ш\"],\r\n        [\"KeyO\", \"Щ\"],\r\n        [\"KeyP\", \"З\"],\r\n        [\"BracketLeft\", \"Х\"],\r\n        [\"BracketRight\", \"Ъ\"],\r\n        [\"Backslash\", \"/\"]\r\n    ],\r\n    rowC: [\r\n        [\"KeyA\", \"Ф\"],\r\n        [\"KeyS\", \"Ы\"],\r\n        [\"KeyD\", \"В\"],\r\n        [\"KeyF\", \"А\"],\r\n        [\"KeyG\", \"П\"],\r\n        [\"KeyH\", \"Р\"],\r\n        [\"KeyJ\", \"О\"],\r\n        [\"KeyK\", \"Л\"],\r\n        [\"KeyL;\", \"Д\"],\r\n        [\"Semicolon\", \"Ж\"],\r\n        [\"Quote\", 'Э']\r\n    ],\r\n    rowB: [\r\n        [\"KeyZ\", \"Я\"],\r\n        [\"KeyX\", \"Ч\"],\r\n        [\"KeyC\", \"С\"],\r\n        [\"KeyV\", \"М\"],\r\n        [\"KeyB\", \"И\"],\r\n        [\"KeyN\", \"Т\"],\r\n        [\"KeyM\", \"Ь\"],\r\n        [\"Period\", \"Б\"],\r\n        [\"NumpadDecimal\", \"Ю\"],\r\n        [\"Slash\", \".\"]\r\n    ],\r\n};\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;