webpackHotUpdate_N_E("pages/index",{

/***/ "./components/threeContainer.js":
/*!**************************************!*\
  !*** ./components/threeContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var _components_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/three */ \"./components/three.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/components/threeContainer.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction Camera(props) {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useThree\"])(),\n      setDefaultCamera = _useThree.setDefaultCamera;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    return void setDefaultCamera(ref.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"perspectiveCamera\", _objectSpread({\n    ref: ref\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Camera, \"nfDvK7HykLYfypY0bURoTtz/jYM=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useThree\"]];\n});\n\n_c = Camera;\n\nvar ThreeContainer = function ThreeContainer(_ref) {\n  var clickOne = _ref.clickOne,\n      number = _ref.number,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'kek' : _ref$title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n    initial: {\n      y: 300,\n      opacity: 0\n    },\n    transition: {\n      duration: 2.5\n    },\n    animate: {\n      y: 0,\n      opacity: 1\n    },\n    exit: {\n      y: -300,\n      opacity: 0\n    },\n    className: \"three\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"Canvas\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Camera, {\n        position: [0, 0, 15]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ambientLight\", {\n        intensity: 1.0\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pointLight\", {\n        position: [40, 40, 40]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Suspense\"], {\n        fallback: null,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_three__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          clickOne: clickOne,\n          number: number\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = ThreeContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeContainer);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Camera\");\n$RefreshReg$(_c2, \"ThreeContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aHJlZUNvbnRhaW5lci5qcz9jNWJmIl0sIm5hbWVzIjpbIkNhbWVyYSIsInByb3BzIiwicmVmIiwidXNlUmVmIiwidXNlVGhyZWUiLCJzZXREZWZhdWx0Q2FtZXJhIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIlRocmVlQ29udGFpbmVyIiwiY2xpY2tPbmUiLCJudW1iZXIiLCJ0aXRsZSIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNuQixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCOztBQURtQixrQkFFVUMsa0VBQVEsRUFGbEI7QUFBQSxNQUVYQyxnQkFGVyxhQUVYQSxnQkFGVzs7QUFHbkJDLHlEQUFTLENBQUM7QUFBQSxXQUFNLEtBQUtELGdCQUFnQixDQUFDSCxHQUFHLENBQUNLLE9BQUwsQ0FBM0I7QUFBQSxHQUFELEVBQTJDLEVBQTNDLENBQVQ7QUFDQSxzQkFBTztBQUFtQixPQUFHLEVBQUVMO0FBQXhCLEtBQWlDRCxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FMTUQsTTtVQUV3QkksMEQ7OztLQUZ4QkosTTs7QUFRVCxJQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXFDO0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFYLEtBQVc7QUFFMUQsc0JBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFFO0FBQUVDLE9BQUMsRUFBRSxHQUFMO0FBQVVDLGFBQU8sRUFBRTtBQUFuQixLQUFyQjtBQUNBLGNBQVUsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQURaO0FBRUEsV0FBTyxFQUFFO0FBQUVGLE9BQUMsRUFBRSxDQUFMO0FBQVFDLGFBQU8sRUFBRTtBQUFqQixLQUZUO0FBR0EsUUFBSSxFQUFFO0FBQUVELE9BQUMsRUFBRSxDQUFDLEdBQU47QUFBV0MsYUFBTyxFQUFFO0FBQXBCLEtBSE47QUFJQSxhQUFTLEVBQUMsT0FKVjtBQUFBLDRCQUtFO0FBQUEsZ0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUkscUVBQUMsd0RBQUQ7QUFBQSw4QkFDUSxxRUFBQyxNQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFIsZUFFUTtBQUFjLGlCQUFTLEVBQUU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSLGVBR1E7QUFBWSxnQkFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIUixlQUlRLHFFQUFDLDhDQUFEO0FBQVUsZ0JBQVEsRUFBRSxJQUFwQjtBQUFBLCtCQUNJLHFFQUFDLHlEQUFEO0FBQU8sa0JBQVEsRUFBRUYsUUFBakI7QUFBMkIsZ0JBQU0sRUFBRUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQW5CRDs7TUFBTUYsYztBQXFCU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCAgU3VzcGVuc2UsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FudmFzLCB1c2VUaHJlZX0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCJcbmltcG9ydCBUaHJlZSBmcm9tICcuLi9jb21wb25lbnRzL3RocmVlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmZ1bmN0aW9uIENhbWVyYShwcm9wcykge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gICAgY29uc3QgeyBzZXREZWZhdWx0Q2FtZXJhIH0gPSB1c2VUaHJlZSgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHZvaWQgc2V0RGVmYXVsdENhbWVyYShyZWYuY3VycmVudCksIFtdKVxuICAgIHJldHVybiA8cGVyc3BlY3RpdmVDYW1lcmEgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbiAgfVxuICBcblxuY29uc3QgVGhyZWVDb250YWluZXIgPSAoe2NsaWNrT25lLCBudW1iZXIsIHRpdGxlPSdrZWsnfSkgPT4geyAgXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IHk6IDMwMCwgb3BhY2l0eTogMCB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIuNSB9fVxuICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgIGV4aXQ9e3sgeTogLTMwMCwgb3BhY2l0eTogMCB9fVxuICAgIGNsYXNzTmFtZT0ndGhyZWUnPlxuICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPENhbnZhcz5cbiAgICAgICAgICAgICAgICA8Q2FtZXJhIHBvc2l0aW9uPXtbMCwgMCwgMTVdfSAvPlxuICAgICAgICAgICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXsxLjB9IC8+XG4gICAgICAgICAgICAgICAgPHBvaW50TGlnaHQgcG9zaXRpb249e1s0MCwgNDAsIDQwXX0gLz5cbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PiBcbiAgICAgICAgICAgICAgICAgICAgPFRocmVlIGNsaWNrT25lPXtjbGlja09uZX0gbnVtYmVyPXtudW1iZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgPC9tb3Rpb24uZGl2PiAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaHJlZUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/threeContainer.js\n");

/***/ })

})