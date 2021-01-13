webpackHotUpdate_N_E("pages/index",{

/***/ "./components/audio.js":
/*!*****************************!*\
  !*** ./components/audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-soundplayer/components */ \"./node_modules/react-soundplayer/components.js\");\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_interface_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/interface/star */ \"./components/interface/star.js\");\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-soundplayer/addons */ \"./node_modules/react-soundplayer/addons.js\");\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/components/audio.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n // it's just an alias for `withSoundCloudAudio` but makes code clearer\n\n // audio source\n\nvar streamUrl = \"/audio/1.aac\"; // some track meta information\n\nvar trackTitle = 'Great song by random artist';\nvar AWSSoundPlayer = Object(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_5__[\"withCustomAudio\"])(_c = function _c(props) {\n  var trackTitle = props.trackTitle,\n      duration = props.duration,\n      currentTime = props.currentTime;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n      style: {\n        marginBottom: '8px',\n        border: '1px solid white',\n        padding: '4px'\n      },\n      children: [\"AUDIO: \", trackTitle]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"player-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"PlayButton\"], _objectSpread({}, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'flex',\n          flexDirection: 'column'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"player-progress-icon\",\n          style: {\n            transform: \"translateX(\".concat(currentTime / duration * 100, \"%) translateY(-50%)\")\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_interface_star__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 133\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_2__[\"Progress\"], {\n          className: 'progressbar',\n          innerClassName: 'progressbar-inner',\n          value: currentTime / duration * 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n});\n_c2 = AWSSoundPlayer;\n\nvar Audio = function Audio(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"audio\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AWSSoundPlayer, {\n      streamable: false,\n      trackTitle: title,\n      streamUrl: streamUrl,\n      preloadType: \"auto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = Audio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Audio));\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AWSSoundPlayer$withCustomAudio\");\n$RefreshReg$(_c2, \"AWSSoundPlayer\");\n$RefreshReg$(_c3, \"Audio\");\n$RefreshReg$(_c4, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdWRpby5qcz8xYzNlIl0sIm5hbWVzIjpbInN0cmVhbVVybCIsInRyYWNrVGl0bGUiLCJBV1NTb3VuZFBsYXllciIsIndpdGhDdXN0b21BdWRpbyIsInByb3BzIiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRyYW5zZm9ybSIsIkF1ZGlvIiwidGl0bGUiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0NBRUE7O0NBR0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLGNBQWxCLEMsQ0FFQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsNkJBQW5CO0FBR0EsSUFBTUMsY0FBYyxHQUFHQyxnRkFBZSxNQUFDLFlBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ3RDSCxVQURzQyxHQUNBRyxLQURBLENBQ3RDSCxVQURzQztBQUFBLE1BQzFCSSxRQUQwQixHQUNBRCxLQURBLENBQzFCQyxRQUQwQjtBQUFBLE1BQ2hCQyxXQURnQixHQUNBRixLQURBLENBQ2hCRSxXQURnQjtBQUs5QyxzQkFDSTtBQUFBLDRCQUNBO0FBQUksV0FBSyxFQUFFO0FBQUNDLG9CQUFZLEVBQUMsS0FBZDtBQUFxQkMsY0FBTSxFQUFDLGlCQUE1QjtBQUErQ0MsZUFBTyxFQUFDO0FBQXZELE9BQVg7QUFBQSw0QkFBa0ZSLFVBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUY7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx1RUFBRCxvQkFBZ0JHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVJO0FBQUssYUFBSyxFQUFFO0FBQUNNLGlCQUFPLEVBQUMsTUFBVDtBQUFpQkMsdUJBQWEsRUFBQztBQUEvQixTQUFaO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQXNDLGVBQUssRUFBRTtBQUFDQyxxQkFBUyx1QkFBZ0JOLFdBQVcsR0FBQ0QsUUFBYixHQUF1QixHQUF0QztBQUFWLFdBQTdDO0FBQUEsaUNBQXdILHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLHFFQUFEO0FBQVUsbUJBQVMsRUFBRSxhQUFyQjtBQUFvQyx3QkFBYyxFQUFFLG1CQUFwRDtBQUF5RSxlQUFLLEVBQUdDLFdBQVcsR0FBQ0QsUUFBYixHQUF1QjtBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZFO0FBQUEsa0JBREo7QUFZRCxDQWpCcUMsQ0FBdEM7TUFBTUgsYzs7QUFvQk4sSUFBTVcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBWTtBQUFBLE1BQVZDLEtBQVUsUUFBVkEsS0FBVTtBQUN0QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsMkJBQ0EscUVBQUMsY0FBRDtBQUNBLGdCQUFVLEVBQUUsS0FEWjtBQUVBLGdCQUFVLEVBQUVBLEtBRlo7QUFHQSxlQUFTLEVBQUVkLFNBSFg7QUFJQSxpQkFBVyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBVkQ7O01BQU1hLEs7QUFZUyxrRkFBQUUsNENBQUssQ0FBQ0MsSUFBTixDQUFXSCxLQUFYLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1ZGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGF5QnV0dG9uLCBUaW1lciwgUHJvZ3Jlc3MgfSBmcm9tICdyZWFjdC1zb3VuZHBsYXllci9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3N0YXInXG4vLyBpdCdzIGp1c3QgYW4gYWxpYXMgZm9yIGB3aXRoU291bmRDbG91ZEF1ZGlvYCBidXQgbWFrZXMgY29kZSBjbGVhcmVyXG5pbXBvcnQgeyB3aXRoQ3VzdG9tQXVkaW8gfSBmcm9tICdyZWFjdC1zb3VuZHBsYXllci9hZGRvbnMnO1xuXG4vLyBhdWRpbyBzb3VyY2VcbmNvbnN0IHN0cmVhbVVybCA9IFwiL2F1ZGlvLzEuYWFjXCI7XG5cbi8vIHNvbWUgdHJhY2sgbWV0YSBpbmZvcm1hdGlvblxuY29uc3QgdHJhY2tUaXRsZSA9ICdHcmVhdCBzb25nIGJ5IHJhbmRvbSBhcnRpc3QnO1xuXG5cbmNvbnN0IEFXU1NvdW5kUGxheWVyID0gd2l0aEN1c3RvbUF1ZGlvKHByb3BzID0+IHtcbiAgY29uc3QgeyB0cmFja1RpdGxlLCBkdXJhdGlvbiwgY3VycmVudFRpbWUgfSA9IHByb3BzO1xuXG5cblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxoNSBzdHlsZT17e21hcmdpbkJvdHRvbTonOHB4JywgYm9yZGVyOicxcHggc29saWQgd2hpdGUnLCBwYWRkaW5nOic0cHgnfX0+QVVESU86IHt0cmFja1RpdGxlfTwvaDU+XG4gICAgPGRpdiBjbGFzc05hbWU9J3BsYXllci1jb250YWluZXInPlxuICAgICAgPFBsYXlCdXR0b24gey4uLnByb3BzfSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItcHJvZ3Jlc3MtaWNvbicgc3R5bGU9e3t0cmFuc2Zvcm06YHRyYW5zbGF0ZVgoJHsoY3VycmVudFRpbWUvZHVyYXRpb24pKjEwMH0lKSB0cmFuc2xhdGVZKC01MCUpYH19PjxTdGFyLz48L2Rpdj5cbiAgICAgICAgICAgIDxQcm9ncmVzcyBjbGFzc05hbWU9eydwcm9ncmVzc2Jhcid9IGlubmVyQ2xhc3NOYW1lPXsncHJvZ3Jlc3NiYXItaW5uZXInfSB2YWx1ZT17KGN1cnJlbnRUaW1lL2R1cmF0aW9uKSoxMDB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59KTtcblxuXG5jb25zdCBBdWRpbyA9ICh7dGl0bGV9KSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgPEFXU1NvdW5kUGxheWVyXG4gICAgICAgIHN0cmVhbWFibGU9e2ZhbHNlfVxuICAgICAgICB0cmFja1RpdGxlPXt0aXRsZX1cbiAgICAgICAgc3RyZWFtVXJsPXtzdHJlYW1Vcmx9XG4gICAgICAgIHByZWxvYWRUeXBlPVwiYXV0b1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQXVkaW8pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/audio.js\n");

/***/ })

})