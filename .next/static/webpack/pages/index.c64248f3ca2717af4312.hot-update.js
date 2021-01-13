webpackHotUpdate_N_E("pages/index",{

/***/ "./components/audio.js":
/*!*****************************!*\
  !*** ./components/audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-soundplayer/components */ \"./node_modules/react-soundplayer/components.js\");\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-soundplayer/addons */ \"./node_modules/react-soundplayer/addons.js\");\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/components/audio.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // it's just an alias for `withSoundCloudAudio` but makes code clearer\n\n // audio source\n\nvar streamUrl = \"/audio/1.aac\"; // some track meta information\n\nvar trackTitle = 'Great song by random artist';\nvar AWSSoundPlayer = Object(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_4__[\"withCustomAudio\"])(_c = function _c(props) {\n  var trackTitle = props.trackTitle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n      style: {\n        marginBottom: '8px'\n      },\n      children: trackTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"player-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"PlayButton\"], _objectSpread({}, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'flex',\n          flexDirection: 'column'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"Progress\"], {\n          className: 'progressbar'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n});\n_c2 = AWSSoundPlayer;\n\nvar Audio = function Audio() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"audio\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AWSSoundPlayer, {\n      trackTitle: \"AUDIO\",\n      streamUrl: streamUrl,\n      preloadType: \"auto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = Audio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Audio));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AWSSoundPlayer$withCustomAudio\");\n$RefreshReg$(_c2, \"AWSSoundPlayer\");\n$RefreshReg$(_c3, \"Audio\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdWRpby5qcz8xYzNlIl0sIm5hbWVzIjpbInN0cmVhbVVybCIsInRyYWNrVGl0bGUiLCJBV1NTb3VuZFBsYXllciIsIndpdGhDdXN0b21BdWRpbyIsInByb3BzIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJBdWRpbyIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FFQTs7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsY0FBbEIsQyxDQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBRyw2QkFBbkI7QUFHQSxJQUFNQyxjQUFjLEdBQUdDLGdGQUFlLE1BQUMsWUFBQUMsS0FBSyxFQUFJO0FBQUEsTUFDdENILFVBRHNDLEdBQ3ZCRyxLQUR1QixDQUN0Q0gsVUFEc0M7QUFHOUMsc0JBQ0k7QUFBQSw0QkFDQTtBQUFJLFdBQUssRUFBRTtBQUFDSSxvQkFBWSxFQUFDO0FBQWQsT0FBWDtBQUFBLGdCQUFrQ0o7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUY7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx1RUFBRCxvQkFBZ0JHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVJO0FBQUssYUFBSyxFQUFFO0FBQUNFLGlCQUFPLEVBQUMsTUFBVDtBQUFpQkMsdUJBQWEsRUFBQztBQUEvQixTQUFaO0FBQUEsK0JBQ0kscUVBQUMscUVBQUQ7QUFBVSxtQkFBUyxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkU7QUFBQSxrQkFESjtBQVdELENBZHFDLENBQXRDO01BQU1MLGM7O0FBaUJOLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQUs7QUFDZixzQkFDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsMkJBQ0EscUVBQUMsY0FBRDtBQUNBLGdCQUFVLEVBQUMsT0FEWDtBQUVBLGVBQVMsRUFBRVIsU0FGWDtBQUdBLGlCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FURDs7TUFBTVEsSztBQVdTLGtGQUFBQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdGLEtBQVgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXVkaW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYXlCdXR0b24sIFRpbWVyLCBQcm9ncmVzcyB9IGZyb20gJ3JlYWN0LXNvdW5kcGxheWVyL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaXQncyBqdXN0IGFuIGFsaWFzIGZvciBgd2l0aFNvdW5kQ2xvdWRBdWRpb2AgYnV0IG1ha2VzIGNvZGUgY2xlYXJlclxuaW1wb3J0IHsgd2l0aEN1c3RvbUF1ZGlvIH0gZnJvbSAncmVhY3Qtc291bmRwbGF5ZXIvYWRkb25zJztcblxuLy8gYXVkaW8gc291cmNlXG5jb25zdCBzdHJlYW1VcmwgPSBcIi9hdWRpby8xLmFhY1wiO1xuXG4vLyBzb21lIHRyYWNrIG1ldGEgaW5mb3JtYXRpb25cbmNvbnN0IHRyYWNrVGl0bGUgPSAnR3JlYXQgc29uZyBieSByYW5kb20gYXJ0aXN0JztcblxuXG5jb25zdCBBV1NTb3VuZFBsYXllciA9IHdpdGhDdXN0b21BdWRpbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgdHJhY2tUaXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8aDUgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzhweCd9fT57dHJhY2tUaXRsZX08L2g1PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItY29udGFpbmVyJz5cbiAgICAgIDxQbGF5QnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XG4gICAgICAgICAgICA8UHJvZ3Jlc3MgY2xhc3NOYW1lPXsncHJvZ3Jlc3NiYXInfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSk7XG5cblxuY29uc3QgQXVkaW8gPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgPEFXU1NvdW5kUGxheWVyXG4gICAgICAgIHRyYWNrVGl0bGU9J0FVRElPJ1xuICAgICAgICBzdHJlYW1Vcmw9e3N0cmVhbVVybH1cbiAgICAgICAgcHJlbG9hZFR5cGU9XCJhdXRvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBdWRpbykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/audio.js\n");

/***/ })

})