webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./pages/index.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n@font-face {\\n  font-family: 'GTEestiProText';\\n  src: url('/Fonts/GTEestiProText-Regular.ttf'); /* IE9 Compat Modes */\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: 'Syne-Regular';\\n  src: url('/Fonts/Syne-Regular.woff'); /* IE9 Compat Modes */\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n\\n\\nh1{\\n  font-family:'GTEestiProText', 'Courier New', sans-serif;\\n}\\np{\\n  font-family:'Syne-Regular', 'Courier New', sans-serif;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background:rgb(14, 13, 13);\\n  /* background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%); */\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: left;\\n\\n}\\n\\n.main {\\n  color: white;\\n}\\n\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  -webkit-filter:blur(6px);\\n          filter:blur(6px);\\n  -webkit-transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  -webkit-filter:blur(0px);\\n          filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  -webkit-backdrop-filter:blur(15px);\\n          backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  -webkit-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  -webkit-transform:translate(-50%,-50%);\\n          transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\\n\\n.object-main{\\n  width:100vw;\\n  display:flex;\\n  flex-direction:row;\\n  align-items:flex-end;\\n  justify-content: flex-end;\\n}\\n\\nmain{\\n  display:flex;\\n  flex-direction:column;\\n}\\n\\n.object-text{\\n  position:relative;\\n  width:100%;\\n  -webkit-box-sizing:border-box;\\n          box-sizing:border-box;\\n  overflow:scroll;\\n  font-size:32px;\\n  font-family:Helvetica;\\n  height:85vh;\\n  border-bottom:1px dashed white;\\n  padding:32px;\\n  padding-bottom:0px;\\n}\\n.object-text-three{\\n  position:absolute;\\n  top:0%;\\n  left:0%;\\n  width:100%;\\n  opacity:0.5;\\n  z-index:-1;\\n}\\n.object-text-three .three{\\n  height:100%;\\n}\\n.object-three{\\n  border-left:1px dashed white;\\n  border-bottom:1px dashed white;\\n  width:25%;\\n  height:85vh;\\n  overflow:scroll;\\n}\\n\\n.three{\\n  cursor:pointer;\\n  top:0px;\\n  height:25vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\n.audio{\\n  top:0px;\\n  left:0px;\\n  padding:16px;\\n  z-index:20;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/index.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"\\n\\n.camera-control-left{\\n  position:fixed;\\n  top:0px;\\n  left:0px;\\n  width:10%;\\n  height:100vh;\\n  z-index:100;\\n  background:gray;\\n}\\n.camera-control-right{\\n  position:fixed;\\n  top:0px;\\n  right:0px;\\n  width:10%;\\n  z-index:100;\\n  background:gray;\\n\\n  height:100vh;\\n}\\n\\n@font-face {\\n  font-family: 'GTEestiProText';\\n  src: url('/Fonts/GTEestiProText-Regular.ttf'); /* IE9 Compat Modes */\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: 'Syne-Regular';\\n  src: url('/Fonts/Syne-Regular.woff'); /* IE9 Compat Modes */\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n\\n\\nh1{\\n  font-family:'GTEestiProText', 'Courier New', sans-serif;\\n}\\np{\\n  font-family:'Syne-Regular', 'Courier New', sans-serif;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background:rgb(14, 13, 13);\\n  /* background: radial-gradient(circle, rgb(58, 58, 58) 0%, rgba(0,0,0,1) 100%); */\\n}\\n\\ncanvas {\\n  width: 100vw;\\n  height: 100%;\\n}\\n\\nh1 {\\n  z-index:1;\\n  display: flex;\\n  justify-content: center;\\n  align-content: left;\\n\\n}\\n\\n.main {\\n  color: white;\\n}\\n\\n\\na:hover {\\n  color: #3f51b5;\\n}\\n\\n\\n.header{\\n  cursor:pointer;\\n  position:fixed;\\n  box-sizing: border-box;\\n  top:0px;\\n  z-index:3;\\n  display:flex;\\n  align-items: center;\\n  text-align:center;\\n  width:100vw;\\n  height:auto;\\n  font-size:128px;\\n  justify-content: center;\\n  text-transform: uppercase;\\n  color:white;\\n  font-family:  Helvetica, sans-serif;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n.header:hover{\\n  filter:blur(0px);\\n}\\n\\n\\n\\n\\nfooter{\\n  font-family:  Helvetica, sans-serif;\\n  color:black;\\n  position:fixed;\\n  bottom:96px;\\n  left:50%;\\n  transform:translateX(-50%);\\n  height:35px;\\n  width:100vw;\\n  overflow-y:visible;\\n  max-width:920px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align:justify;\\n  text-align-last:center;\\n  background:unset;\\n  display:flex;\\n  flex-direction:row;\\n  padding:16px;\\n  filter:blur(6px);\\n  transition:all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\nfooter:hover{\\n  filter:blur(0px);\\n}\\nfooter span {\\n  margin-right:32px;\\n}\\n\\nbutton{\\n  width:32px;\\n  height:32px;\\n  background-color: unset;\\n  border:0px;\\n  color:white;\\n  cursor:pointer;\\n}\\n\\n.menurow{\\n  display:flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom:32px;\\n}\\n\\n.menu{\\n  position:fixed;\\n  display:flex;\\n  box-sizing: border-box;\\n  flex-direction: column;\\n  right:0px;\\n  top:0px;\\n  height:100vh;\\n  width:100vw;\\n  color:white;\\n}\\n\\n.menuempty{\\n  width:50%;\\n  background:unset;\\n  backdrop-filter:blur(15px);\\n  opacity:0.3;\\n}\\n.menucontainer{\\n  position:absolute;\\n  right:0px;\\n  display:flex;\\n  box-sizing: border-box;\\n  height:100vh;\\n  padding:16px;\\n  flex-direction: column;\\n  width:50%;\\n  background-color:rgba(0,0,0,0.85);\\n}\\n\\n\\n.snapshot{\\n  position:absolute;\\n  width:auto;\\n  top:120px;\\n  border-radius:4px;\\n  transform:translateX(-50%);\\n  left:50%;\\n  color:white;\\n  border:1px solid black;\\n}\\n\\n.modalImage{\\n  z-index:10;\\n  display:flex;\\n  width:500px;\\n  height:500px;\\n  background-color:white;\\n  position:fixed;\\n  left:50%;\\n  transform:translate(-50%,-50%);\\n  top:50%;\\n}\\n\\n.modalImageHidden{\\n  display:none;\\n}\\n\\n.object-main{\\n  width:100vw;\\n  display:flex;\\n  flex-direction:row;\\n  align-items:flex-end;\\n  justify-content: flex-end;\\n}\\n\\nmain{\\n  display:flex;\\n  flex-direction:column;\\n}\\n\\n.object-text{\\n  position:relative;\\n  width:100%;\\n  box-sizing:border-box;\\n  overflow:scroll;\\n  font-size:32px;\\n  font-family:Helvetica;\\n  height:85vh;\\n  border-bottom:1px dashed white;\\n  padding:32px;\\n  padding-bottom:0px;\\n}\\n.object-text-three{\\n  position:absolute;\\n  top:0%;\\n  left:0%;\\n  width:100%;\\n  opacity:0.5;\\n  z-index:-1;\\n}\\n.object-text-three .three{\\n  height:100%;\\n}\\n.object-three{\\n  border-left:1px dashed white;\\n  border-bottom:1px dashed white;\\n  width:25%;\\n  height:85vh;\\n  overflow:scroll;\\n}\\n\\n.three{\\n  cursor:pointer;\\n  top:0px;\\n  height:25vh;\\n  left:0px;\\n  z-index:0;\\n}\\n\\n.three :focus { outline: none; }\\na {\\n  color: white;\\n  display: block;\\n  text-decoration: unset;\\n  font-size: 20px;\\n  margin: 5px 0;\\n}\\n\\n.audio{\\n  top:0px;\\n  left:0px;\\n  padding:16px;\\n  z-index:20;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguY3NzPzYwZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixtQkFBbUIsWUFBWSxhQUFhLGNBQWMsaUJBQWlCLGdCQUFnQixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLFlBQVksY0FBYyxjQUFjLGdCQUFnQixvQkFBb0IsbUJBQW1CLEdBQUcsZ0JBQWdCLGtDQUFrQyxrREFBa0QsOENBQThDLHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLGdDQUFnQyx5Q0FBeUMsOENBQThDLHFCQUFxQix1QkFBdUIsR0FBRyxTQUFTLDREQUE0RCxHQUFHLElBQUksMERBQTBELEdBQUcsVUFBVSxjQUFjLGVBQWUsZ0JBQWdCLGtCQUFrQiwrQkFBK0IsbUZBQW1GLE1BQU0sWUFBWSxpQkFBaUIsaUJBQWlCLEdBQUcsUUFBUSxjQUFjLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEtBQUssV0FBVyxpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQixtQ0FBbUMsbUNBQW1DLFlBQVksY0FBYyxpQkFBaUIsd0JBQXdCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsOEJBQThCLGdCQUFnQix3Q0FBd0MsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsb0VBQW9FLDREQUE0RCxHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLEdBQUcsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixhQUFhLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCLGdCQUFnQix1QkFBdUIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDJCQUEyQixxQkFBcUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsNkJBQTZCLDZCQUE2QixvRUFBb0UsNERBQTRELEdBQUcsZUFBZSw2QkFBNkIsNkJBQTZCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxXQUFXLGVBQWUsZ0JBQWdCLDRCQUE0QixlQUFlLGdCQUFnQixtQkFBbUIsR0FBRyxhQUFhLGlCQUFpQix3QkFBd0IsbUNBQW1DLHVCQUF1QixHQUFHLFVBQVUsbUJBQW1CLGlCQUFpQixtQ0FBbUMsbUNBQW1DLDJCQUEyQixjQUFjLFlBQVksaUJBQWlCLGdCQUFnQixnQkFBZ0IsR0FBRyxlQUFlLGNBQWMscUJBQXFCLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixjQUFjLGlCQUFpQixtQ0FBbUMsbUNBQW1DLGlCQUFpQixpQkFBaUIsMkJBQTJCLGNBQWMsc0NBQXNDLEdBQUcsZ0JBQWdCLHNCQUFzQixlQUFlLGNBQWMsc0JBQXNCLHVDQUF1Qyx1Q0FBdUMsYUFBYSxnQkFBZ0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGVBQWUsaUJBQWlCLGdCQUFnQixpQkFBaUIsMkJBQTJCLG1CQUFtQixhQUFhLDJDQUEyQywyQ0FBMkMsWUFBWSxHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIseUJBQXlCLDhCQUE4QixHQUFHLFNBQVMsaUJBQWlCLDBCQUEwQixHQUFHLGlCQUFpQixzQkFBc0IsZUFBZSxrQ0FBa0Msa0NBQWtDLG9CQUFvQixtQkFBbUIsMEJBQTBCLGdCQUFnQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixHQUFHLHFCQUFxQixzQkFBc0IsV0FBVyxZQUFZLGVBQWUsZ0JBQWdCLGVBQWUsR0FBRyw0QkFBNEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLGlDQUFpQyxtQ0FBbUMsY0FBYyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxtQkFBbUIsWUFBWSxnQkFBZ0IsYUFBYSxjQUFjLEdBQUcsbUJBQW1CLGVBQWUsRUFBRSxLQUFLLGlCQUFpQixtQkFBbUIsMkJBQTJCLG9CQUFvQixrQkFBa0IsR0FBRyxXQUFXLFlBQVksYUFBYSxpQkFBaUIsZUFBZSxHQUFHLFNBQVMsNkVBQTZFLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSx5QkFBeUIsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVkseUJBQXlCLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLHNCQUFzQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxrREFBa0QsbUJBQW1CLFlBQVksYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixZQUFZLGNBQWMsY0FBYyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixHQUFHLGdCQUFnQixrQ0FBa0Msa0RBQWtELDhDQUE4QyxxQkFBcUIsdUJBQXVCLEdBQUcsY0FBYyxnQ0FBZ0MseUNBQXlDLDhDQUE4QyxxQkFBcUIsdUJBQXVCLEdBQUcsU0FBUyw0REFBNEQsR0FBRyxJQUFJLDBEQUEwRCxHQUFHLFVBQVUsY0FBYyxlQUFlLGdCQUFnQixrQkFBa0IsK0JBQStCLG1GQUFtRixNQUFNLFlBQVksaUJBQWlCLGlCQUFpQixHQUFHLFFBQVEsY0FBYyxrQkFBa0IsNEJBQTRCLHdCQUF3QixLQUFLLFdBQVcsaUJBQWlCLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyxjQUFjLG1CQUFtQixtQkFBbUIsMkJBQTJCLFlBQVksY0FBYyxpQkFBaUIsd0JBQXdCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsOEJBQThCLGdCQUFnQix3Q0FBd0MsaUJBQWlCLHFCQUFxQiw0REFBNEQsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsaUJBQWlCLHdDQUF3QyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixhQUFhLCtCQUErQixnQkFBZ0IsZ0JBQWdCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsMkJBQTJCLHFCQUFxQixpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsNERBQTRELEdBQUcsZUFBZSxxQkFBcUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLFdBQVcsZUFBZSxnQkFBZ0IsNEJBQTRCLGVBQWUsZ0JBQWdCLG1CQUFtQixHQUFHLGFBQWEsaUJBQWlCLHdCQUF3QixtQ0FBbUMsdUJBQXVCLEdBQUcsVUFBVSxtQkFBbUIsaUJBQWlCLDJCQUEyQiwyQkFBMkIsY0FBYyxZQUFZLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLEdBQUcsZUFBZSxjQUFjLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixjQUFjLGlCQUFpQiwyQkFBMkIsaUJBQWlCLGlCQUFpQiwyQkFBMkIsY0FBYyxzQ0FBc0MsR0FBRyxnQkFBZ0Isc0JBQXNCLGVBQWUsY0FBYyxzQkFBc0IsK0JBQStCLGFBQWEsZ0JBQWdCLDJCQUEyQixHQUFHLGdCQUFnQixlQUFlLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixtQkFBbUIsYUFBYSxtQ0FBbUMsWUFBWSxHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIseUJBQXlCLDhCQUE4QixHQUFHLFNBQVMsaUJBQWlCLDBCQUEwQixHQUFHLGlCQUFpQixzQkFBc0IsZUFBZSwwQkFBMEIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLG1DQUFtQyxpQkFBaUIsdUJBQXVCLEdBQUcscUJBQXFCLHNCQUFzQixXQUFXLFlBQVksZUFBZSxnQkFBZ0IsZUFBZSxHQUFHLDRCQUE0QixnQkFBZ0IsR0FBRyxnQkFBZ0IsaUNBQWlDLG1DQUFtQyxjQUFjLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLG1CQUFtQixZQUFZLGdCQUFnQixhQUFhLGNBQWMsR0FBRyxtQkFBbUIsZUFBZSxFQUFFLEtBQUssaUJBQWlCLG1CQUFtQiwyQkFBMkIsb0JBQW9CLGtCQUFrQixHQUFHLFdBQVcsWUFBWSxhQUFhLGlCQUFpQixlQUFlLEdBQUcscUJBQXFCO0FBQ2o1WDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vcGFnZXMvaW5kZXguY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLmNhbWVyYS1jb250cm9sLWxlZnR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwJTtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHotaW5kZXg6MTAwO1xcbiAgYmFja2dyb3VuZDpncmF5O1xcbn1cXG4uY2FtZXJhLWNvbnRyb2wtcmlnaHR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICByaWdodDowcHg7XFxuICB3aWR0aDoxMCU7XFxuICB6LWluZGV4OjEwMDtcXG4gIGJhY2tncm91bmQ6Z3JheTtcXG5cXG4gIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dURWVzdGlQcm9UZXh0JztcXG4gIHNyYzogdXJsKCcvRm9udHMvR1RFZXN0aVByb1RleHQtUmVndWxhci50dGYnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1N5bmUtUmVndWxhcic7XFxuICBzcmM6IHVybCgnL0ZvbnRzL1N5bmUtUmVndWxhci53b2ZmJyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcblxcbmgxe1xcbiAgZm9udC1mYW1pbHk6J0dURWVzdGlQcm9UZXh0JywgJ0NvdXJpZXIgTmV3Jywgc2Fucy1zZXJpZjtcXG59XFxucHtcXG4gIGZvbnQtZmFtaWx5OidTeW5lLVJlZ3VsYXInLCAnQ291cmllciBOZXcnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOnJnYigxNCwgMTMsIDEzKTtcXG4gIC8qIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYig1OCwgNTgsIDU4KSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTsgKi9cXG59XFxuXFxuY2FudmFzIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgei1pbmRleDoxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogbGVmdDtcXG5cXG59XFxuXFxuLm1haW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG5cXG4uaGVhZGVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRvcDowcHg7XFxuICB6LWluZGV4OjM7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDphdXRvO1xcbiAgZm9udC1zaXplOjEyOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoNnB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoNnB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gIHRyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbi5oZWFkZXI6aG92ZXJ7XFxuICAtd2Via2l0LWZpbHRlcjpibHVyKDBweCk7XFxuICAgICAgICAgIGZpbHRlcjpibHVyKDBweCk7XFxufVxcblxcblxcblxcblxcbmZvb3RlcntcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6YmxhY2s7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJvdHRvbTo5NnB4O1xcbiAgbGVmdDo1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDozNXB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdy15OnZpc2libGU7XFxuICBtYXgtd2lkdGg6OTIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xcbiAgYmFja2dyb3VuZDp1bnNldDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIHBhZGRpbmc6MTZweDtcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoNnB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoNnB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gIHRyYW5zaXRpb246YWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbmZvb3Rlcjpob3ZlcntcXG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOmJsdXIoMHB4KTtcXG59XFxuZm9vdGVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OjMycHg7XFxufVxcblxcbmJ1dHRvbntcXG4gIHdpZHRoOjMycHg7XFxuICBoZWlnaHQ6MzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgYm9yZGVyOjBweDtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5tZW51cm93e1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206MzJweDtcXG59XFxuXFxuLm1lbnV7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByaWdodDowcHg7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLm1lbnVlbXB0eXtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQ6dW5zZXQ7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDE1cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNXB4KTtcXG4gIG9wYWNpdHk6MC4zO1xcbn1cXG4ubWVudWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgcmlnaHQ6MHB4O1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjg1KTtcXG59XFxuXFxuXFxuLnNuYXBzaG90e1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDphdXRvO1xcbiAgdG9wOjEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czo0cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGxlZnQ6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubW9kYWxJbWFnZXtcXG4gIHotaW5kZXg6MTA7XFxuICBkaXNwbGF5OmZsZXg7XFxuICB3aWR0aDo1MDBweDtcXG4gIGhlaWdodDo1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGxlZnQ6NTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRvcDo1MCU7XFxufVxcblxcbi5tb2RhbEltYWdlSGlkZGVue1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ub2JqZWN0LW1haW57XFxuICB3aWR0aDoxMDB2dztcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxubWFpbntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLm9iamVjdC10ZXh0e1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB3aWR0aDoxMDAlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG4gIGZvbnQtc2l6ZTozMnB4O1xcbiAgZm9udC1mYW1pbHk6SGVsdmV0aWNhO1xcbiAgaGVpZ2h0Ojg1dmg7XFxuICBib3JkZXItYm90dG9tOjFweCBkYXNoZWQgd2hpdGU7XFxuICBwYWRkaW5nOjMycHg7XFxuICBwYWRkaW5nLWJvdHRvbTowcHg7XFxufVxcbi5vYmplY3QtdGV4dC10aHJlZXtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjAlO1xcbiAgbGVmdDowJTtcXG4gIHdpZHRoOjEwMCU7XFxuICBvcGFjaXR5OjAuNTtcXG4gIHotaW5kZXg6LTE7XFxufVxcbi5vYmplY3QtdGV4dC10aHJlZSAudGhyZWV7XFxuICBoZWlnaHQ6MTAwJTtcXG59XFxuLm9iamVjdC10aHJlZXtcXG4gIGJvcmRlci1sZWZ0OjFweCBkYXNoZWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOjFweCBkYXNoZWQgd2hpdGU7XFxuICB3aWR0aDoyNSU7XFxuICBoZWlnaHQ6ODV2aDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuLnRocmVle1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjI1dmg7XFxuICBsZWZ0OjBweDtcXG4gIHotaW5kZXg6MDtcXG59XFxuXFxuLnRocmVlIDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH1cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbi5hdWRpb3tcXG4gIHRvcDowcHg7XFxuICBsZWZ0OjBweDtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIHotaW5kZXg6MjA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTs7RUFFZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNkNBQTZDLEVBQUUscUJBQXFCO0VBQ3BFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DLEVBQUUscUJBQXFCO0VBQzNELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0Us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QWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZ0JBQWdCLGFBQWEsRUFBRTtBQUMvQjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLmNhbWVyYS1jb250cm9sLWxlZnR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwJTtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHotaW5kZXg6MTAwO1xcbiAgYmFja2dyb3VuZDpncmF5O1xcbn1cXG4uY2FtZXJhLWNvbnRyb2wtcmlnaHR7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowcHg7XFxuICByaWdodDowcHg7XFxuICB3aWR0aDoxMCU7XFxuICB6LWluZGV4OjEwMDtcXG4gIGJhY2tncm91bmQ6Z3JheTtcXG5cXG4gIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dURWVzdGlQcm9UZXh0JztcXG4gIHNyYzogdXJsKCcvRm9udHMvR1RFZXN0aVByb1RleHQtUmVndWxhci50dGYnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1N5bmUtUmVndWxhcic7XFxuICBzcmM6IHVybCgnL0ZvbnRzL1N5bmUtUmVndWxhci53b2ZmJyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcblxcbmgxe1xcbiAgZm9udC1mYW1pbHk6J0dURWVzdGlQcm9UZXh0JywgJ0NvdXJpZXIgTmV3Jywgc2Fucy1zZXJpZjtcXG59XFxucHtcXG4gIGZvbnQtZmFtaWx5OidTeW5lLVJlZ3VsYXInLCAnQ291cmllciBOZXcnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOnJnYigxNCwgMTMsIDEzKTtcXG4gIC8qIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYig1OCwgNTgsIDU4KSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTsgKi9cXG59XFxuXFxuY2FudmFzIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgei1pbmRleDoxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogbGVmdDtcXG5cXG59XFxuXFxuLm1haW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG5cXG4uaGVhZGVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0b3A6MHB4O1xcbiAgei1pbmRleDozO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6YXV0bztcXG4gIGZvbnQtc2l6ZToxMjhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOjE2cHg7XFxuICBmaWx0ZXI6Ymx1cig2cHgpO1xcbiAgdHJhbnNpdGlvbjphbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuLmhlYWRlcjpob3ZlcntcXG4gIGZpbHRlcjpibHVyKDBweCk7XFxufVxcblxcblxcblxcblxcbmZvb3RlcntcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6YmxhY2s7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIGJvdHRvbTo5NnB4O1xcbiAgbGVmdDo1MCU7XFxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDozNXB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdy15OnZpc2libGU7XFxuICBtYXgtd2lkdGg6OTIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XFxuICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xcbiAgYmFja2dyb3VuZDp1bnNldDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIHBhZGRpbmc6MTZweDtcXG4gIGZpbHRlcjpibHVyKDZweCk7XFxuICB0cmFuc2l0aW9uOmFsbCAwLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbn1cXG5mb290ZXI6aG92ZXJ7XFxuICBmaWx0ZXI6Ymx1cigwcHgpO1xcbn1cXG5mb290ZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6MzJweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgd2lkdGg6MzJweDtcXG4gIGhlaWdodDozMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBib3JkZXI6MHB4O1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLm1lbnVyb3d7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTozMnB4O1xcbn1cXG5cXG4ubWVudXtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByaWdodDowcHg7XFxuICB0b3A6MHB4O1xcbiAgaGVpZ2h0OjEwMHZoO1xcbiAgd2lkdGg6MTAwdnc7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLm1lbnVlbXB0eXtcXG4gIHdpZHRoOjUwJTtcXG4gIGJhY2tncm91bmQ6dW5zZXQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNXB4KTtcXG4gIG9wYWNpdHk6MC4zO1xcbn1cXG4ubWVudWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgcmlnaHQ6MHB4O1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHBhZGRpbmc6MTZweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDo1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC44NSk7XFxufVxcblxcblxcbi5zbmFwc2hvdHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6YXV0bztcXG4gIHRvcDoxMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6NHB4O1xcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XFxuICBsZWZ0OjUwJTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1vZGFsSW1hZ2V7XFxuICB6LWluZGV4OjEwO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgd2lkdGg6NTAwcHg7XFxuICBoZWlnaHQ6NTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICBsZWZ0OjUwJTtcXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRvcDo1MCU7XFxufVxcblxcbi5tb2RhbEltYWdlSGlkZGVue1xcbiAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ub2JqZWN0LW1haW57XFxuICB3aWR0aDoxMDB2dztcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxubWFpbntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLm9iamVjdC10ZXh0e1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB3aWR0aDoxMDAlO1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcbiAgZm9udC1zaXplOjMycHg7XFxuICBmb250LWZhbWlseTpIZWx2ZXRpY2E7XFxuICBoZWlnaHQ6ODV2aDtcXG4gIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCB3aGl0ZTtcXG4gIHBhZGRpbmc6MzJweDtcXG4gIHBhZGRpbmctYm90dG9tOjBweDtcXG59XFxuLm9iamVjdC10ZXh0LXRocmVle1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6MCU7XFxuICBsZWZ0OjAlO1xcbiAgd2lkdGg6MTAwJTtcXG4gIG9wYWNpdHk6MC41O1xcbiAgei1pbmRleDotMTtcXG59XFxuLm9iamVjdC10ZXh0LXRocmVlIC50aHJlZXtcXG4gIGhlaWdodDoxMDAlO1xcbn1cXG4ub2JqZWN0LXRocmVle1xcbiAgYm9yZGVyLWxlZnQ6MXB4IGRhc2hlZCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCB3aGl0ZTtcXG4gIHdpZHRoOjI1JTtcXG4gIGhlaWdodDo4NXZoO1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4udGhyZWV7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHRvcDowcHg7XFxuICBoZWlnaHQ6MjV2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgei1pbmRleDowO1xcbn1cXG5cXG4udGhyZWUgOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfVxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLmF1ZGlve1xcbiAgdG9wOjBweDtcXG4gIGxlZnQ6MHB4O1xcbiAgcGFkZGluZzoxNnB4O1xcbiAgei1pbmRleDoyMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.css\n");

/***/ })

})