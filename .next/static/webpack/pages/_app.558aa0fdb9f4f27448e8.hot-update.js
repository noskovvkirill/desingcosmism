webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./pages/index.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".audio{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  padding:16px;\\n  \\n}\\n\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%);\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  color: hotpink;\\n}\\n\\n.main {\\n  color: white;\\n}\\n.three{\\n  position:absolute;\\n  top:0px;\\n  height:100vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  -webkit-backdrop-filter:blur(15px);\\n          backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  -webkit-transform:translate(-50%,-50%);\\n          transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/index.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,cAAc;EACd,OAAO;EACP,QAAQ;EACR,YAAY;;AAEd;;;AAGA;EACE,cAAc;EACd,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,cAAc;EACd,OAAO;EACP,SAAS;EACT,SAAS;EACT,WAAW;EACX,eAAe;;EAEf,YAAY;AACd;;;;AAIA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,2EAA2E;AAC7E;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,OAAO;EACP,YAAY;EACZ,QAAQ;EACR,SAAS;AACX;;AAEA,gBAAgB,aAAa,EAAE;AAC/B;EACE,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;;AAGA;EACE,cAAc;EACd,cAAc;EACd,8BAAsB;UAAtB,sBAAsB;EACtB,OAAO;EACP,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,WAAW;EACX,mCAAmC;EACnC,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB;EAChB,+DAAuD;EAAvD,uDAAuD;AACzD;AACA;EACE,wBAAgB;UAAhB,gBAAgB;AAClB;;;;;AAKA;EACE,mCAAmC;EACnC,WAAW;EACX,cAAc;EACd,WAAW;EACX,QAAQ;EACR,kCAA0B;UAA1B,0BAA0B;EAC1B,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB;EAChB,+DAAuD;EAAvD,uDAAuD;AACzD;AACA;EACE,wBAAgB;UAAhB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,8BAAsB;UAAtB,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,kCAA0B;UAA1B,0BAA0B;EAC1B,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,8BAAsB;UAAtB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,SAAS;EACT,iCAAiC;AACnC;;;AAGA;EACE,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,kCAA0B;UAA1B,0BAA0B;EAC1B,QAAQ;EACR,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,QAAQ;EACR,sCAA8B;UAA9B,8BAA8B;EAC9B,OAAO;AACT;;AAEA;EACE,YAAY;AACd\",\"sourcesContent\":[\".audio{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  padding:16px;\\n  \\n}\\n\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%);\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  color: hotpink;\\n}\\n\\n.main {\\n  color: white;\\n}\\n.three{\\n  position:absolute;\\n  top:0px;\\n  height:100vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguY3NzPzYwZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsbUJBQW1CLFlBQVksYUFBYSxpQkFBaUIsT0FBTywyQkFBMkIsbUJBQW1CLFlBQVksYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixZQUFZLGNBQWMsY0FBYyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsY0FBYyxlQUFlLGdCQUFnQixrQkFBa0IsZ0ZBQWdGLEdBQUcsWUFBWSxpQkFBaUIsaUJBQWlCLEdBQUcsUUFBUSxjQUFjLGtCQUFrQiw0QkFBNEIsMEJBQTBCLG1CQUFtQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsU0FBUyxzQkFBc0IsWUFBWSxpQkFBaUIsYUFBYSxjQUFjLEdBQUcsbUJBQW1CLGVBQWUsRUFBRSxLQUFLLGlCQUFpQixtQkFBbUIsMkJBQTJCLG9CQUFvQixrQkFBa0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQixtQ0FBbUMsbUNBQW1DLFlBQVksY0FBYyxpQkFBaUIsd0JBQXdCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsOEJBQThCLGdCQUFnQix3Q0FBd0MsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsb0VBQW9FLDREQUE0RCxHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLEdBQUcsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixhQUFhLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCLGdCQUFnQix1QkFBdUIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDJCQUEyQixxQkFBcUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsNkJBQTZCLDZCQUE2QixvRUFBb0UsNERBQTRELEdBQUcsZUFBZSw2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QTJCLG9CQUFvQixrQkFBa0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQiwyQkFBMkIsWUFBWSxjQUFjLGlCQUFpQix3QkFBd0Isc0JBQXNCLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDRCQUE0Qiw4QkFBOEIsZ0JBQWdCLHdDQUF3QyxpQkFBaUIscUJBQXFCLDREQUE0RCxHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxpQkFBaUIsd0NBQXdDLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGFBQWEsK0JBQStCLGdCQUFnQixnQkFBZ0IsdUJBQXVCLG9CQUFvQix3QkFBd0IsNEJBQTRCLHVCQUF1QiwyQkFBMkIscUJBQXFCLGlCQUFpQix1QkFBdUIsaUJBQWlCLHFCQUFxQiw0REFBNEQsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsV0FBVyxlQUFlLGdCQUFnQiw0QkFBNEIsZUFBZSxnQkFBZ0IsbUJBQW1CLEdBQUcsYUFBYSxpQkFBaUIsd0JBQXdCLG1DQUFtQyx1QkFBdUIsR0FBRyxVQUFVLG1CQUFtQixpQkFBaUIsMkJBQTJCLDJCQUEyQixjQUFjLFlBQVksaUJBQWlCLGdCQUFnQixnQkFBZ0IsR0FBRyxlQUFlLGNBQWMscUJBQXFCLCtCQUErQixnQkFBZ0IsR0FBRyxpQkFBaUIsc0JBQXNCLGNBQWMsaUJBQWlCLDJCQUEyQixpQkFBaUIsaUJBQWlCLDJCQUEyQixjQUFjLHNDQUFzQyxHQUFHLGdCQUFnQixzQkFBc0IsZUFBZSxjQUFjLHNCQUFzQiwrQkFBK0IsYUFBYSxnQkFBZ0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGVBQWUsaUJBQWlCLGdCQUFnQixpQkFBaUIsMkJBQTJCLG1CQUFtQixhQUFhLG1DQUFtQyxZQUFZLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3elI7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3BhZ2VzL2luZGV4LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hdWRpb3tcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjBweDtcXG4gIGxlZnQ6MHB4O1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgXFxufVxcblxcblxcbi5jYW1lcmEtY29udHJvbC1sZWZ0e1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MHB4O1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMCU7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICB6LWluZGV4OjEwMDtcXG4gIGJhY2tncm91bmQ6Z3JheTtcXG59XFxuLmNhbWVyYS1jb250cm9sLXJpZ2h0e1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MHB4O1xcbiAgcmlnaHQ6MHB4O1xcbiAgd2lkdGg6MTAlO1xcbiAgei1pbmRleDoxMDA7XFxuICBiYWNrZ3JvdW5kOmdyYXk7XFxuXFxuICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYig1OCwgNTgsIDU4KSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgei1pbmRleDoxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi5tYWluIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRocmVle1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgbGVmdDowcHg7XFxuICB6LWluZGV4OjA7XFxufVxcblxcbi50aHJlZSA6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG5cXG4uaGVhZGVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRvcDowcHg7XFxuICB6LWluZGV4OjM7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDphdXRvO1xcbiAgZm9udC1zaXplOjEyOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoNnB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoNnB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gIHRyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbi5oZWFkZXI6aG92ZXJ7XFxuICAtd2Via2l0LWZpbHRlcjpibHVyKDBweCk7XFxuICAgICAgICAgIGZpbHRlcjpibHVyKDBweCk7XFxufVxcblxcblxcblxcblxcbmZvb3RlcntcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6YmxhY2s7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJvdHRvbTo5NnB4O1xcbiAgbGVmdDo1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDozNXB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdy15OnZpc2libGU7XFxuICBtYXgtd2lkdGg6OTIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xcbiAgYmFja2dyb3VuZDp1bnNldDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIHBhZGRpbmc6MTZweDtcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoNnB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoNnB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gIHRyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbmZvb3Rlcjpob3ZlcntcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoMHB4KTtcXG59XFxuZm9vdGVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OjMycHg7XFxufVxcblxcbmJ1dHRvbntcXG4gIHdpZHRoOjMycHg7XFxuICBoZWlnaHQ6MzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgYm9yZGVyOjBweDtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5tZW51cm93e1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206MzJweDtcXG59XFxuXFxuLm1lbnV7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByaWdodDowcHg7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLm1lbnVlbXB0eXtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQ6dW5zZXQ7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDE1cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNXB4KTtcXG4gIG9wYWNpdHk6MC4zO1xcbn1cXG4ubWVudWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgcmlnaHQ6MHB4O1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjg1KTtcXG59XFxuXFxuXFxuLnNuYXBzaG90e1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDphdXRvO1xcbiAgdG9wOjEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czo0cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGxlZnQ6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubW9kYWxJbWFnZXtcXG4gIHotaW5kZXg6MTA7XFxuICBkaXNwbGF5OmZsZXg7XFxuICB3aWR0aDo1MDBweDtcXG4gIGhlaWdodDo1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGxlZnQ6NTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRvcDo1MCU7XFxufVxcblxcbi5tb2RhbEltYWdlSGlkZGVue1xcbiAgZGlzcGxheTpub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTs7QUFFZDs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxl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cmNlc0NvbnRlbnRcIjpbXCIuYXVkaW97XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICBsZWZ0OjBweDtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIFxcbn1cXG5cXG5cXG4uY2FtZXJhLWNvbnRyb2wtbGVmdHtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjBweDtcXG4gIGxlZnQ6MHB4O1xcbiAgd2lkdGg6MTAlO1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgei1pbmRleDoxMDA7XFxuICBiYWNrZ3JvdW5kOmdyYXk7XFxufVxcbi5jYW1lcmEtY29udHJvbC1yaWdodHtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjBweDtcXG4gIHJpZ2h0OjBweDtcXG4gIHdpZHRoOjEwJTtcXG4gIHotaW5kZXg6MTAwO1xcbiAgYmFja2dyb3VuZDpncmF5O1xcblxcbiAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoNTgsIDU4LCA1OCkgMCUsIHJnYmEoMCwwLDAsMSkgMTAwJSk7XFxufVxcblxcbmNhbnZhcyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIHotaW5kZXg6MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50aHJlZXtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjBweDtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgei1pbmRleDowO1xcbn1cXG5cXG4udGhyZWUgOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuXFxuLmhlYWRlcntcXG4gIGN1cnNvcjpwb2ludGVyO1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdG9wOjBweDtcXG4gIHotaW5kZXg6MztcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OmF1dG87XFxuICBmb250LXNpemU6MTI4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgZmlsdGVyOmJsdXIoNnB4KTtcXG4gIHRyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbi5oZWFkZXI6aG92ZXJ7XFxuICBmaWx0ZXI6Ymx1cigwcHgpO1xcbn1cXG5cXG5cXG5cXG5cXG5mb290ZXJ7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOmJsYWNrO1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBib3R0b206OTZweDtcXG4gIGxlZnQ6NTAlO1xcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XFxuICBoZWlnaHQ6MzVweDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgb3ZlcmZsb3cteTp2aXNpYmxlO1xcbiAgbWF4LXdpZHRoOjkyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xcbiAgdGV4dC1hbGlnbi1sYXN0OmNlbnRlcjtcXG4gIGJhY2tncm91bmQ6dW5zZXQ7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICBwYWRkaW5nOjE2cHg7XFxuICBmaWx0ZXI6Ymx1cig2cHgpO1xcbiAgdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuZm9vdGVyOmhvdmVye1xcbiAgZmlsdGVyOmJsdXIoMHB4KTtcXG59XFxuZm9vdGVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OjMycHg7XFxufVxcblxcbmJ1dHRvbntcXG4gIHdpZHRoOjMycHg7XFxuICBoZWlnaHQ6MzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgYm9yZGVyOjBweDtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5tZW51cm93e1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206MzJweDtcXG59XFxuXFxuLm1lbnV7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcmlnaHQ6MHB4O1xcbiAgdG9wOjBweDtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5tZW51ZW1wdHl7XFxuICB3aWR0aDo1MCU7XFxuICBiYWNrZ3JvdW5kOnVuc2V0O1xcbiAgYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTVweCk7XFxuICBvcGFjaXR5OjAuMztcXG59XFxuLm1lbnVjb250YWluZXJ7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHJpZ2h0OjBweDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBwYWRkaW5nOjE2cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6NTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuODUpO1xcbn1cXG5cXG5cXG4uc25hcHNob3R7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOmF1dG87XFxuICB0b3A6MTIwcHg7XFxuICBib3JkZXItcmFkaXVzOjRweDtcXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgbGVmdDo1MCU7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tb2RhbEltYWdle1xcbiAgei1pbmRleDoxMDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIHdpZHRoOjUwMHB4O1xcbiAgaGVpZ2h0OjUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgbGVmdDo1MCU7XFxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICB0b3A6NTAlO1xcbn1cXG5cXG4ubW9kYWxJbWFnZUhpZGRlbntcXG4gIGRpc3BsYXk6bm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css\n");

/***/ })

})