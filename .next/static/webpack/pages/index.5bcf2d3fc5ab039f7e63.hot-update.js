webpackHotUpdate_N_E("pages/index",{

/***/ "./components/audio.js":
/*!*****************************!*\
  !*** ./components/audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-soundplayer/components */ \"./node_modules/react-soundplayer/components.js\");\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-soundplayer/addons */ \"./node_modules/react-soundplayer/addons.js\");\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/components/audio.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // it's just an alias for `withSoundCloudAudio` but makes code clearer\n\n // audio source\n\nvar streamUrl = \"/audio/1.aac\"; // some track meta information\n\nvar trackTitle = 'Great song by random artist';\nvar AWSSoundPlayer = Object(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__[\"withCustomAudio\"])(_c = function _c(props) {\n  var trackTitle = props.trackTitle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"player-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"PlayButton\"], _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"Progress\"], {\n      className: 'progressbar'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n      children: trackTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n});\n_c2 = AWSSoundPlayer;\n\nvar Audio = function Audio() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"audio\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AWSSoundPlayer, {\n      trackTitle: \"AUDIO\",\n      streamUrl: streamUrl,\n      preloadType: \"auto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = Audio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Audio));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AWSSoundPlayer$withCustomAudio\");\n$RefreshReg$(_c2, \"AWSSoundPlayer\");\n$RefreshReg$(_c3, \"Audio\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdWRpby5qcz8xYzNlIl0sIm5hbWVzIjpbInN0cmVhbVVybCIsInRyYWNrVGl0bGUiLCJBV1NTb3VuZFBsYXllciIsIndpdGhDdXN0b21BdWRpbyIsInByb3BzIiwiQXVkaW8iLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FFQTs7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsY0FBbEIsQyxDQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBRyw2QkFBbkI7QUFHQSxJQUFNQyxjQUFjLEdBQUdDLGdGQUFlLE1BQUMsWUFBQUMsS0FBSyxFQUFJO0FBQUEsTUFDdENILFVBRHNDLEdBQ3ZCRyxLQUR1QixDQUN0Q0gsVUFEc0M7QUFHOUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRSxxRUFBQyx1RUFBRCxvQkFBZ0JHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLHFFQUFEO0FBQVUsZUFBUyxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUtIO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FWcUMsQ0FBdEM7TUFBTUMsYzs7QUFhTixJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFLO0FBQ2Ysc0JBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDJCQUNBLHFFQUFDLGNBQUQ7QUFDQSxnQkFBVSxFQUFDLE9BRFg7QUFFQSxlQUFTLEVBQUVMLFNBRlg7QUFHQSxpQkFBVyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBVEQ7O01BQU1LLEs7QUFXUyxrRkFBQUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXRixLQUFYLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1ZGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGF5QnV0dG9uLCBUaW1lciwgUHJvZ3Jlc3MgfSBmcm9tICdyZWFjdC1zb3VuZHBsYXllci9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGl0J3MganVzdCBhbiBhbGlhcyBmb3IgYHdpdGhTb3VuZENsb3VkQXVkaW9gIGJ1dCBtYWtlcyBjb2RlIGNsZWFyZXJcbmltcG9ydCB7IHdpdGhDdXN0b21BdWRpbyB9IGZyb20gJ3JlYWN0LXNvdW5kcGxheWVyL2FkZG9ucyc7XG5cbi8vIGF1ZGlvIHNvdXJjZVxuY29uc3Qgc3RyZWFtVXJsID0gXCIvYXVkaW8vMS5hYWNcIjtcblxuLy8gc29tZSB0cmFjayBtZXRhIGluZm9ybWF0aW9uXG5jb25zdCB0cmFja1RpdGxlID0gJ0dyZWF0IHNvbmcgYnkgcmFuZG9tIGFydGlzdCc7XG5cblxuY29uc3QgQVdTU291bmRQbGF5ZXIgPSB3aXRoQ3VzdG9tQXVkaW8ocHJvcHMgPT4ge1xuICBjb25zdCB7IHRyYWNrVGl0bGUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1jb250YWluZXInPlxuICAgICAgPFBsYXlCdXR0b24gey4uLnByb3BzfSAvPlxuICAgICAgPFByb2dyZXNzIGNsYXNzTmFtZT17J3Byb2dyZXNzYmFyJ30vPlxuICAgICAgPGg1Pnt0cmFja1RpdGxlfTwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuXG5jb25zdCBBdWRpbyA9ICgpID0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICA8QVdTU291bmRQbGF5ZXJcbiAgICAgICAgdHJhY2tUaXRsZT0nQVVESU8nXG4gICAgICAgIHN0cmVhbVVybD17c3RyZWFtVXJsfVxuICAgICAgICBwcmVsb2FkVHlwZT1cImF1dG9cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEF1ZGlvKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/audio.js\n");

/***/ })

})