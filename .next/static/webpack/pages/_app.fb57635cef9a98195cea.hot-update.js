webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./pages/index.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"audio::-webkit-media-controls-panel, video::-webkit-media-controls-panel {\\n  background-color: black;\\n  color:white;\\n}\\naudio::-webkit-media-controls-play-button{\\n  -webkit-filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(163deg) brightness(106%) contrast(101%);\\n          filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(163deg) brightness(106%) contrast(101%);\\n}\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%);\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  color: hotpink;\\n}\\n\\n.main {\\n  color: white;\\n}\\n.three{\\n  position:absolute;\\n  top:0px;\\n  height:100vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  -webkit-backdrop-filter:blur(15px);\\n          backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  -webkit-transform:translate(-50%,-50%);\\n          transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/index.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,uGAA+F;UAA/F,+FAA+F;AACjG;;AAEA;EACE,cAAc;EACd,OAAO;EACP,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,cAAc;EACd,OAAO;EACP,SAAS;EACT,SAAS;EACT,WAAW;EACX,eAAe;;EAEf,YAAY;AACd;;;;AAIA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,2EAA2E;AAC7E;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,OAAO;EACP,YAAY;EACZ,QAAQ;EACR,SAAS;AACX;;AAEA,gBAAgB,aAAa,EAAE;AAC/B;EACE,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;;AAGA;EACE,cAAc;EACd,cAAc;EACd,8BAAsB;UAAtB,sBAAsB;EACtB,OAAO;EACP,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,WAAW;EACX,mCAAmC;EACnC,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB;EAChB,+DAAuD;EAAvD,uDAAuD;AACzD;AACA;EACE,wBAAgB;UAAhB,gBAAgB;AAClB;;;;;AAKA;EACE,mCAAmC;EACnC,WAAW;EACX,cAAc;EACd,WAAW;EACX,QAAQ;EACR,kCAA0B;UAA1B,0BAA0B;EAC1B,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB;EAChB,+DAAuD;EAAvD,uDAAuD;AACzD;AACA;EACE,wBAAgB;UAAhB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,8BAAsB;UAAtB,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,kCAA0B;UAA1B,0BAA0B;EAC1B,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,8BAAsB;UAAtB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,SAAS;EACT,iCAAiC;AACnC;;;AAGA;EACE,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,kCAA0B;UAA1B,0BAA0B;EAC1B,QAAQ;EACR,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,QAAQ;EACR,sCAA8B;UAA9B,8BAA8B;EAC9B,OAAO;AACT;;AAEA;EACE,YAAY;AACd\",\"sourcesContent\":[\"audio::-webkit-media-controls-panel, video::-webkit-media-controls-panel {\\n  background-color: black;\\n  color:white;\\n}\\naudio::-webkit-media-controls-play-button{\\n  filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(163deg) brightness(106%) contrast(101%);\\n}\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%);\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  color: hotpink;\\n}\\n\\n.main {\\n  color: white;\\n}\\n.three{\\n  position:absolute;\\n  top:0px;\\n  height:100vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguY3NzPzYwZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLDZFQUE2RSw0QkFBNEIsZ0JBQWdCLEdBQUcsNENBQTRDLDRHQUE0Ryw0R0FBNEcsR0FBRyx5QkFBeUIsbUJBQW1CLFlBQVksYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixZQUFZLGNBQWMsY0FBYyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsY0FBYyxlQUFlLGdCQUFnQixrQkFBa0IsZ0ZBQWdGLEdBQUcsWUFBWSxpQkFBaUIsaUJBQWlCLEdBQUcsUUFBUSxjQUFjLGtCQUFrQiw0QkFBNEIsMEJBQTBCLG1CQUFtQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsU0FBUyxzQkFBc0IsWUFBWSxpQkFBaUIsYUFBYSxjQUFjLEdBQUcsbUJBQW1CLGVBQWUsRUFBRSxLQUFLLGlCQUFpQixtQkFBbUIsMkJBQTJCLG9CQUFvQixrQkFBa0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQixtQ0FBbUMsbUNBQW1DLFlBQVksY0FBYyxpQkFBaUIsd0JBQXdCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsOEJBQThCLGdCQUFnQix3Q0FBd0MsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsb0VBQW9FLDREQUE0RCxHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLEdBQUcsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixhQUFhLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCLGdCQUFnQix1QkFBdUIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDJCQUEyQixxQkFBcUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsNkJBQTZCLDZCQUE2QixvRUFBb0Us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cz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9wYWdlcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJhdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGFuZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b257XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTYzZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2M2RlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxuLmNhbWVyYS1jb250cm9sLWxlZnR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwJTtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHotaW5kZXg6MTAwO1xcbiAgYmFja2dyb3VuZDpncmF5O1xcbn1cXG4uY2FtZXJhLWNvbnRyb2wtcmlnaHR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICByaWdodDowcHg7XFxuICB3aWR0aDoxMCU7XFxuICB6LWluZGV4OjEwMDtcXG4gIGJhY2tncm91bmQ6Z3JheTtcXG5cXG4gIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDU4LCA1OCwgNTgpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICB6LWluZGV4OjE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogaG90cGluaztcXG59XFxuXFxuLm1haW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4udGhyZWV7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDowcHg7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBsZWZ0OjBweDtcXG4gIHotaW5kZXg6MDtcXG59XFxuXFxuLnRocmVlIDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMzZjUxYjU7XFxufVxcblxcblxcbi5oZWFkZXJ7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdG9wOjBweDtcXG4gIHotaW5kZXg6MztcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OmF1dG87XFxuICBmb250LXNpemU6MTI4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgLXdlYmtpdC1maWx0ZXI6Ymx1cig2cHgpO1xcbiAgICAgICAgICBmaWx0ZXI6Ymx1cig2cHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuLmhlYWRlcjpob3ZlcntcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoMHB4KTtcXG59XFxuXFxuXFxuXFxuXFxuZm9vdGVye1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjpibGFjaztcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgYm90dG9tOjk2cHg7XFxuICBsZWZ0OjUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgaGVpZ2h0OjM1cHg7XFxuICB3aWR0aDoxMDB2dztcXG4gIG92ZXJmbG93LXk6dmlzaWJsZTtcXG4gIG1heC13aWR0aDo5MjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246anVzdGlmeTtcXG4gIHRleHQtYWxpZ24tbGFzdDpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOnVuc2V0O1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgLXdlYmtpdC1maWx0ZXI6Ymx1cig2cHgpO1xcbiAgICAgICAgICBmaWx0ZXI6Ymx1cig2cHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuZm9vdGVyOmhvdmVye1xcbiAgLXdlYmtpdC1maWx0ZXI6Ymx1cigwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6Ymx1cigwcHgpO1xcbn1cXG5mb290ZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6MzJweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgd2lkdGg6MzJweDtcXG4gIGhlaWdodDozMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBib3JkZXI6MHB4O1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLm1lbnVyb3d7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTozMnB4O1xcbn1cXG5cXG4ubWVudXtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJpZ2h0OjBweDtcXG4gIHRvcDowcHg7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICB3aWR0aDoxMDB2dztcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ubWVudWVtcHR5e1xcbiAgd2lkdGg6NTAlO1xcbiAgYmFja2dyb3VuZDp1bnNldDtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjpibHVyKDE1cHgpO1xcbiAgb3BhY2l0eTowLjM7XFxufVxcbi5tZW51Y29udGFpbmVye1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICByaWdodDowcHg7XFxuICBkaXNwbGF5OmZsZXg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICBwYWRkaW5nOjE2cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6NTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuODUpO1xcbn1cXG5cXG5cXG4uc25hcHNob3R7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOmF1dG87XFxuICB0b3A6MTIwcHg7XFxuICBib3JkZXItcmFkaXVzOjRweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgbGVmdDo1MCU7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tb2RhbEltYWdle1xcbiAgei1pbmRleDoxMDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIHdpZHRoOjUwMHB4O1xcbiAgaGVpZ2h0OjUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgbGVmdDo1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgdG9wOjUwJTtcXG59XFxuXFxuLm1vZGFsSW1hZ2VIaWRkZW57XFxuICBkaXNwbGF5Om5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRSx1R0FBK0Y7VUFBL0YsK0ZBQStGO0FBQ2pHOztBQUVBO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlOztFQUVmLFlBQVk7QUFDZDs7OztBQUlBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxnQkFBZ0IsYUFBYSxFQUFFO0FBQy9CO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLCtEQUF1RDtFQUF2RCx1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLHdCQUFnQjtVQUFoQixnQkFBZ0I7QUFDbEI7Ozs7O0FBS0E7RUFDRSxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQiwrREFBdUQ7RUFBdkQsdURBQXVEO0FBQ3pEO0FBQ0E7RUFDRSx3QkFBZ0I7VUFBaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7RUFDWiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsUUFBUTtFQUNSLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxRQUFRO0VBQ1Isc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGFuZWwsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6d2hpdGU7XFxufVxcbmF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBsYXktYnV0dG9ue1xcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNjNkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSk7XFxufVxcblxcbi5jYW1lcmEtY29udHJvbC1sZWZ0e1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MHB4O1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMCU7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICB6LWluZGV4OjEwMDtcXG4gIGJhY2tncm91bmQ6Z3JheTtcXG59XFxuLmNhbWVyYS1jb250cm9sLXJpZ2h0e1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MHB4O1xcbiAgcmlnaHQ6MHB4O1xcbiAgd2lkdGg6MTAlO1xcbiAgei1pbmRleDoxMDA7XFxuICBiYWNrZ3JvdW5kOmdyYXk7XFxuXFxuICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYig1OCwgNTgsIDU4KSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgei1pbmRleDoxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGhvdHBpbms7XFxufVxcblxcbi5tYWluIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRocmVle1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgbGVmdDowcHg7XFxuICB6LWluZGV4OjA7XFxufVxcblxcbi50aHJlZSA6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG5cXG4uaGVhZGVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0b3A6MHB4O1xcbiAgei1pbmRleDozO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6YXV0bztcXG4gIGZvbnQtc2l6ZToxMjhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOjE2cHg7XFxuICBmaWx0ZXI6Ymx1cig2cHgpO1xcbiAgdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuLmhlYWRlcjpob3ZlcntcXG4gIGZpbHRlcjpibHVyKDBweCk7XFxufVxcblxcblxcblxcblxcbmZvb3RlcntcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6YmxhY2s7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJvdHRvbTo5NnB4O1xcbiAgbGVmdDo1MCU7XFxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDozNXB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdy15OnZpc2libGU7XFxuICBtYXgtd2lkdGg6OTIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xcbiAgYmFja2dyb3VuZDp1bnNldDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIHBhZGRpbmc6MTZweDtcXG4gIGZpbHRlcjpibHVyKDZweCk7XFxuICB0cmFuc2l0aW9uOmFsbCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbn1cXG5mb290ZXI6aG92ZXJ7XFxuICBmaWx0ZXI6Ymx1cigwcHgpO1xcbn1cXG5mb290ZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6MzJweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgd2lkdGg6MzJweDtcXG4gIGhlaWdodDozMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBib3JkZXI6MHB4O1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLm1lbnVyb3d7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTozMnB4O1xcbn1cXG5cXG4ubWVudXtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByaWdodDowcHg7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLm1lbnVlbXB0eXtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQ6dW5zZXQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNXB4KTtcXG4gIG9wYWNpdHk6MC4zO1xcbn1cXG4ubWVudWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgcmlnaHQ6MHB4O1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDo1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC44NSk7XFxufVxcblxcblxcbi5zbmFwc2hvdHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6YXV0bztcXG4gIHRvcDoxMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6NHB4O1xcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XFxuICBsZWZ0OjUwJTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1vZGFsSW1hZ2V7XFxuICB6LWluZGV4OjEwO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgd2lkdGg6NTAwcHg7XFxuICBoZWlnaHQ6NTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBsZWZ0OjUwJTtcXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRvcDo1MCU7XFxufVxcblxcbi5tb2RhbEltYWdlSGlkZGVue1xcbiAgZGlzcGxheTpub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css\n");

/***/ })

})