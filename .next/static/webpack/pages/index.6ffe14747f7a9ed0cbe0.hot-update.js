webpackHotUpdate_N_E("pages/index",{

/***/ "./components/oneContainer.js":
/*!************************************!*\
  !*** ./components/oneContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var _components_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/one */ \"./components/one.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/components/oneContainer.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction Camera(props) {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useThree\"])(),\n      setDefaultCamera = _useThree.setDefaultCamera;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    return void setDefaultCamera(ref.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"perspectiveCamera\", _objectSpread({\n    ref: ref\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Camera, \"nfDvK7HykLYfypY0bURoTtz/jYM=\", false, function () {\n  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useThree\"]];\n});\n\n_c = Camera;\n\nvar OneContainer = function OneContainer(_ref) {\n  var clickOne = _ref.clickOne;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n    initial: {\n      y: 600,\n      opacity: 0\n    },\n    transition: {\n      duration: 2.5\n    },\n    animate: {\n      y: [600, 0],\n      opacity: 1\n    },\n    exit: {\n      y: -300,\n      opacity: 0\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"Canvas\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Camera, {\n        position: [0, 0, 15]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ambientLight\", {\n        intensity: 1.0\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pointLight\", {\n        position: [40, 40, 40]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Suspense\"], {\n        fallback: null,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_one__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          clickOne: clickOne\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = OneContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OneContainer);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Camera\");\n$RefreshReg$(_c2, \"OneContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vbmVDb250YWluZXIuanM/Nzg3ZCJdLCJuYW1lcyI6WyJDYW1lcmEiLCJwcm9wcyIsInJlZiIsInVzZVJlZiIsInVzZVRocmVlIiwic2V0RGVmYXVsdENhbWVyYSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJPbmVDb250YWluZXIiLCJjbGlja09uZSIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNuQixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLEVBQWxCOztBQURtQixrQkFFVUMsa0VBQVEsRUFGbEI7QUFBQSxNQUVYQyxnQkFGVyxhQUVYQSxnQkFGVzs7QUFHbkJDLHlEQUFTLENBQUM7QUFBQSxXQUFNLEtBQUtELGdCQUFnQixDQUFDSCxHQUFHLENBQUNLLE9BQUwsQ0FBM0I7QUFBQSxHQUFELEVBQTJDLEVBQTNDLENBQVQ7QUFDQSxzQkFBTztBQUFtQixPQUFHLEVBQUVMO0FBQXhCLEtBQWlDRCxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FMTUQsTTtVQUV3QkksMEQ7OztLQUZ4QkosTTs7QUFRVCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUduQyxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBYSxXQUFPLEVBQUU7QUFBRUMsT0FBQyxFQUFFLEdBQUw7QUFBVUMsYUFBTyxFQUFFO0FBQW5CLEtBQXRCO0FBQ0EsY0FBVSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBRFo7QUFFQSxXQUFPLEVBQUU7QUFBRUYsT0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FBTDtBQUFlQyxhQUFPLEVBQUU7QUFBeEIsS0FGVDtBQUdBLFFBQUksRUFBRTtBQUFFRCxPQUFDLEVBQUUsQ0FBQyxHQUFOO0FBQVdDLGFBQU8sRUFBRTtBQUFwQixLQUhOO0FBQUEsMkJBSUkscUVBQUMsd0RBQUQ7QUFBQSw4QkFDSSxxRUFBQyxNQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFjLGlCQUFTLEVBQUU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBWSxnQkFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJLHFFQUFDLDhDQUFEO0FBQVUsZ0JBQVEsRUFBRSxJQUFwQjtBQUFBLCtCQUNJLHFFQUFDLHVEQUFEO0FBQUssa0JBQVEsRUFBRUY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQW5CRDs7TUFBTUQsWTtBQXFCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL29uZUNvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgIFN1c3BlbnNlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhbnZhcywgdXNlVGhyZWV9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiXG5pbXBvcnQgT25lIGZyb20gJy4uL2NvbXBvbmVudHMvb25lJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmZ1bmN0aW9uIENhbWVyYShwcm9wcykge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gICAgY29uc3QgeyBzZXREZWZhdWx0Q2FtZXJhIH0gPSB1c2VUaHJlZSgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHZvaWQgc2V0RGVmYXVsdENhbWVyYShyZWYuY3VycmVudCksIFtdKVxuICAgIHJldHVybiA8cGVyc3BlY3RpdmVDYW1lcmEgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbiAgfVxuICBcblxuY29uc3QgT25lQ29udGFpbmVyID0gKHtjbGlja09uZX0pID0+IHsgIFxuICBcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2ICBpbml0aWFsPXt7IHk6IDYwMCwgb3BhY2l0eTogMCB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIuNSB9fVxuICAgIGFuaW1hdGU9e3sgeTogWzYwMCwgMF0sIG9wYWNpdHk6IDEgfX1cbiAgICBleGl0PXt7IHk6IC0zMDAsIG9wYWNpdHk6IDAgfX0+XG4gICAgICAgIDxDYW52YXM+XG4gICAgICAgICAgICA8Q2FtZXJhIHBvc2l0aW9uPXtbMCwgMCwgMTVdfSAvPlxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezEuMH0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXtbNDAsIDQwLCA0MF19IC8+XG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PiBcbiAgICAgICAgICAgICAgICA8T25lIGNsaWNrT25lPXtjbGlja09uZX0gLz5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvQ2FudmFzPlxuICAgIDwvbW90aW9uLmRpdj5cbiBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPbmVDb250YWluZXJcbiAgIFxuICAgXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/oneContainer.js\n");

/***/ })

})