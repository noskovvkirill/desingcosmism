webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_oneContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/oneContainer */ \"./components/oneContainer.js\");\n/* harmony import */ var _components_text_introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/text/introduction */ \"./components/text/introduction.js\");\n/* harmony import */ var _components_text_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/text/1 */ \"./components/text/1.js\");\n/* harmony import */ var _components_text_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text/2 */ \"./components/text/2.js\");\n/* harmony import */ var _components_text_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/text/3 */ \"./components/text/3.js\");\n/* harmony import */ var _components_text_4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/text/4 */ \"./components/text/4.js\");\n/* harmony import */ var _components_text_5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/text/5 */ \"./components/text/5.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-soundplayer/components */ \"./node_modules/react-soundplayer/components.js\");\n/* harmony import */ var react_soundplayer_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-soundplayer/addons */ \"./node_modules/react-soundplayer/addons.js\");\n/* harmony import */ var react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\nvar _jsxFileName = \"/Users/kirill/Desktop/DESIGN3D/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n // import ReactAudioPlayer from 'react-audio-player';\n\n // it's just an alias for `withSoundCloudAudio` but makes code clearer\n\n // audio source\n\nvar streamUrl = \"/audio/1.aac\"; // some track meta information\n\nvar trackTitle = 'Great song by random artist';\nvar AWSSoundPlayer = Object(react_soundplayer_addons__WEBPACK_IMPORTED_MODULE_13__[\"withCustomAudio\"])(_c = function _c(props) {\n  var trackTitle = props.trackTitle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"player-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_12__[\"PlayButton\"], _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_soundplayer_components__WEBPACK_IMPORTED_MODULE_12__[\"Progress\"], {\n      className: 'progressbar'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n      children: trackTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n});\n_c2 = AWSSoundPlayer;\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      objectDisplay = _useState[0],\n      setObjectDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      scrollMax = _useState2[0],\n      setScrollMax = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      count = _useState3[0],\n      setCount = _useState3[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null); // const { scrollYProgress } = useElementScroll(ref)\n\n  var NextObject = function NextObject(number) {\n    setObjectDisplay(number);\n  };\n\n  var Animate = function Animate() {// console.log('scroll',  scrollMax,  ref.current.scrollTop)\n    // if(ref.current){\n    //   ref.current.scrollTop =  ref.current.scrollTop+count;\n    //   // console.log(ref.current.scrollTop)\n    //   if(ref.current.scrollTop > 250) {\n    //     console.log('more!', ref.current.scrollTop)\n    //     setCount(-1)\n    //   }\n    //   if(ref.current.scrollTop === 0) {\n    //     setCount(1)\n    //   }\n    //   requestAnimationFrame(Animate)\n    // }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('scroll', ref.current.scrollHeight, ref.current.clientHeight);\n    setScrollMax(ref.current.clientHeight);\n    requestAnimationFrame(Animate);\n  }, []);\n  var titles = ['COSMIST FUTURISM', 'Active agent in Evolution', 'MultiUnity', 'ANDROGYNOUS WHOLENESS', 'Horizon of Eternity', 'SUBJECT TO COSMIC LAW'];\n  var descriptions = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_introduction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 25\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 42\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_2__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 50\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_3__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 58\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_4__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 68\n  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_text_5__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 77\n  }, _this)];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"object-main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"object-text\",\n          children: [descriptions[objectDisplay], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"object-text-three\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_oneContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              number: objectDisplay\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 11\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"object-three\",\n          ref: ref,\n          style: {\n            width: 'auto'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__[\"motion\"].button, {\n            className: \"button-sidebar\",\n            drag: true,\n            dragConstraints: {\n              top: -50,\n              left: -50,\n              right: 50,\n              bottom: 50\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"button-sidebar-content\",\n              children: \"Open Up!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__[\"motion\"].div, {\n            className: \"sidebar-objects\",\n            style: {\n              width: '15vw'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__[\"AnimatePresence\"], {\n              children: titles.map(function (object, index) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_oneContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    clickOne: NextObject,\n                    title: object,\n                    number: index\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 112,\n                    columnNumber: 21\n                  }, _this)\n                }, index, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 111,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"footer\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"audio\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AWSSoundPlayer, {\n            trackTitle: \"AUDIO\",\n            streamUrl: streamUrl,\n            preloadType: \"auto\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"card-footer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n              children: \"COSMIST FUTURISM\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 20\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n              children: \"PRoject developed by Petra Eros and Kirill Noskov\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 20\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 4\n  }, _this);\n};\n\n_s(Index, \"kYW18eNe8EnBZVPqAKMCLwVu9nw=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"AWSSoundPlayer$withCustomAudio\");\n$RefreshReg$(_c2, \"AWSSoundPlayer\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzdHJlYW1VcmwiLCJ0cmFja1RpdGxlIiwiQVdTU291bmRQbGF5ZXIiLCJ3aXRoQ3VzdG9tQXVkaW8iLCJwcm9wcyIsIkluZGV4IiwidXNlU3RhdGUiLCJvYmplY3REaXNwbGF5Iiwic2V0T2JqZWN0RGlzcGxheSIsInNjcm9sbE1heCIsInNldFNjcm9sbE1heCIsImNvdW50Iiwic2V0Q291bnQiLCJyZWYiLCJ1c2VSZWYiLCJOZXh0T2JqZWN0IiwibnVtYmVyIiwiQW5pbWF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGl0bGVzIiwiZGVzY3JpcHRpb25zIiwid2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtYXAiLCJvYmplY3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FJQTs7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsY0FBbEIsQyxDQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBRyw2QkFBbkI7QUFHQSxJQUFNQyxjQUFjLEdBQUdDLGlGQUFlLE1BQUMsWUFBQUMsS0FBSyxFQUFJO0FBQUEsTUFDdENILFVBRHNDLEdBQ3ZCRyxLQUR1QixDQUN0Q0gsVUFEc0M7QUFHOUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRSxxRUFBQyx3RUFBRCxvQkFBZ0JHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLHNFQUFEO0FBQVUsZUFBUyxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEs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QUFBQSxtQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFtREQsQ0FoR0Q7O0dBQU1LLEs7O01BQUFBLEs7QUFrR1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgT25lQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvb25lQ29udGFpbmVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3RleHQvaW50cm9kdWN0aW9uJ1xuaW1wb3J0IE9uZSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQvMSdcbmltcG9ydCBUd28gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LzInXG5pbXBvcnQgVGhyZWUgZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LzMnXG5pbXBvcnQgRm91ciBmcm9tICcuLi9jb21wb25lbnRzL3RleHQvNCdcbmltcG9ydCBGaXZlIGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC81J1xuXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlRWxlbWVudFNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbi8vIGltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gJ3JlYWN0LWF1ZGlvLXBsYXllcic7XG5cbmltcG9ydCB7IFBsYXlCdXR0b24sIFRpbWVyLCBQcm9ncmVzcyB9IGZyb20gJ3JlYWN0LXNvdW5kcGxheWVyL2NvbXBvbmVudHMnO1xuXG4vLyBpdCdzIGp1c3QgYW4gYWxpYXMgZm9yIGB3aXRoU291bmRDbG91ZEF1ZGlvYCBidXQgbWFrZXMgY29kZSBjbGVhcmVyXG5pbXBvcnQgeyB3aXRoQ3VzdG9tQXVkaW8gfSBmcm9tICdyZWFjdC1zb3VuZHBsYXllci9hZGRvbnMnO1xuXG4vLyBhdWRpbyBzb3VyY2VcbmNvbnN0IHN0cmVhbVVybCA9IFwiL2F1ZGlvLzEuYWFjXCI7XG5cbi8vIHNvbWUgdHJhY2sgbWV0YSBpbmZvcm1hdGlvblxuY29uc3QgdHJhY2tUaXRsZSA9ICdHcmVhdCBzb25nIGJ5IHJhbmRvbSBhcnRpc3QnO1xuXG5cbmNvbnN0IEFXU1NvdW5kUGxheWVyID0gd2l0aEN1c3RvbUF1ZGlvKHByb3BzID0+IHtcbiAgY29uc3QgeyB0cmFja1RpdGxlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItY29udGFpbmVyJz5cbiAgICAgIDxQbGF5QnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICAgIDxQcm9ncmVzcyBjbGFzc05hbWU9eydwcm9ncmVzc2Jhcid9Lz5cbiAgICAgIDxoNT57dHJhY2tUaXRsZX08L2g1PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cblxuY29uc3QgSW5kZXggPSAoKSA9PiB7ICBcbiAgY29uc3QgW29iamVjdERpc3BsYXksIHNldE9iamVjdERpc3BsYXldID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3Njcm9sbE1heCwgc2V0U2Nyb2xsTWF4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMSlcblxuICBcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gIC8vIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VFbGVtZW50U2Nyb2xsKHJlZilcblxuXG4gIGNvbnN0IE5leHRPYmplY3QgPSAobnVtYmVyKSA9PntcbiAgIFxuICAgIHNldE9iamVjdERpc3BsYXkobnVtYmVyKVxuICAgXG4gIH1cblxuICBjb25zdCBBbmltYXRlID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzY3JvbGwnLCAgc2Nyb2xsTWF4LCAgcmVmLmN1cnJlbnQuc2Nyb2xsVG9wKVxuICAgIC8vIGlmKHJlZi5jdXJyZW50KXtcbiAgICAvLyAgIHJlZi5jdXJyZW50LnNjcm9sbFRvcCA9ICByZWYuY3VycmVudC5zY3JvbGxUb3ArY291bnQ7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhyZWYuY3VycmVudC5zY3JvbGxUb3ApXG4gICAgLy8gICBpZihyZWYuY3VycmVudC5zY3JvbGxUb3AgPiAyNTApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ21vcmUhJywgcmVmLmN1cnJlbnQuc2Nyb2xsVG9wKVxuICAgIC8vICAgICBzZXRDb3VudCgtMSlcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmKHJlZi5jdXJyZW50LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgIC8vICAgICBzZXRDb3VudCgxKVxuICAgIC8vICAgfVxuICAgIC8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdGUpXG4gICAgLy8gfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCcsICByZWYuY3VycmVudC5zY3JvbGxIZWlnaHQsIHJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICBzZXRTY3JvbGxNYXgocmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRlKVxuICB9LFtdKVxuXG4gIGNvbnN0IHRpdGxlcyA9IFsnQ09TTUlTVCBGVVRVUklTTScsICdBY3RpdmUgYWdlbnQgaW4gRXZvbHV0aW9uJywgJ011bHRpVW5pdHknLCAnQU5EUk9HWU5PVVMgV0hPTEVORVNTJywgJ0hvcml6b24gb2YgRXRlcm5pdHknLCAgJ1NVQkpFQ1QgVE8gQ09TTUlDIExBVyddXG5cblxuICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbPEludHJvZHVjdGlvbi8+LCA8T25lLz4sIDxUd28vPiwgPFRocmVlLz4sIDxGb3VyLz4sIDxGaXZlLz5dXG5cblxuXG4gIHJldHVybiAoXG4gICA8TGF5b3V0PlxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J29iamVjdC1tYWluJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvYmplY3QtdGV4dCc+XG4gICAgICAge2Rlc2NyaXB0aW9uc1tvYmplY3REaXNwbGF5XX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J29iamVjdC10ZXh0LXRocmVlJz5cbiAgICAgICAgICA8T25lQ29udGFpbmVyIG51bWJlcj17b2JqZWN0RGlzcGxheX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvYmplY3QtdGhyZWUnIHJlZj17cmVmfSBzdHlsZT17e3dpZHRoOidhdXRvJ319PlxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b24gY2xhc3NOYW1lPSdidXR0b24tc2lkZWJhcidcbiAgICAgICAgICAgICBkcmFnXG4gICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7XG4gICAgICAgICAgICAgICB0b3A6IC01MCxcbiAgICAgICAgICAgICAgIGxlZnQ6IC01MCxcbiAgICAgICAgICAgICAgIHJpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1zaWRlYmFyLWNvbnRlbnQnPk9wZW4gVXAhPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J3NpZGViYXItb2JqZWN0cycgc3R5bGU9e3t3aWR0aDonMTV2dyd9fT5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgIHt0aXRsZXMubWFwKChvYmplY3QsIGluZGV4KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPE9uZUNvbnRhaW5lciBjbGlja09uZT17TmV4dE9iamVjdH0gdGl0bGU9e29iamVjdH0gbnVtYmVyPXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICAgICAgICAgIDxBV1NTb3VuZFBsYXllclxuICAgICAgICAgICAgICAgICAgdHJhY2tUaXRsZT0nQVVESU8nXG4gICAgICAgICAgICAgICAgICBzdHJlYW1Vcmw9e3N0cmVhbVVybH1cbiAgICAgICAgICAgICAgICAgIHByZWxvYWRUeXBlPVwiYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+PGg1PkNPU01JU1QgRlVUVVJJU008L2g1PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PjxoNT5QUm9qZWN0IGRldmVsb3BlZCBieSBQZXRyYSBFcm9zIGFuZCBLaXJpbGwgTm9za292PC9oNT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})