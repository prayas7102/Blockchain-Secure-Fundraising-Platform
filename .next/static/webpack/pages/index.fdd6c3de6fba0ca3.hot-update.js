"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./ethereum/web3.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\nvar compiledFactory = __webpack_require__(/*! ./build/CampaignFactory.json */ \"./ethereum/build/CampaignFactory.json\");\nvar compiledCampaign = __webpack_require__(/*! ./build/Campaign.json */ \"./ethereum/build/Campaign.json\");\nvar address = _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utils.toChecksumAddress(address);\nvar Instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(compiledFactory.abi, \"\".concat(process.env.DEPLOYED_ADDRESS));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUEwQjtBQUUxQixJQUFNQyxlQUFlLEdBQUdDLG1CQUFPLENBQUMsMkVBQThCLENBQUM7QUFDL0QsSUFBTUMsZ0JBQWdCLEdBQUdELG1CQUFPLENBQUMsNkRBQXVCLENBQUM7QUFFekQsSUFBTUUsT0FBTyxHQUFDSixxRUFBNEIsQ0FBQ0ksT0FBTyxDQUFDO0FBQ25ELElBQU1HLFFBQVEsR0FBRyxJQUFJUCwwREFBaUIsQ0FDakNDLGVBQWUsQ0FBQ1MsR0FBRyxFQUFHLEVBQUMsQ0FBK0IsT0FBN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBRSxDQUMzRDtBQUVELCtEQUFlTixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vZmFjdG9yeS5qcz9kMjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5cbmNvbnN0IGNvbXBpbGVkRmFjdG9yeSA9IHJlcXVpcmUoJy4vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb24nKTtcbmNvbnN0IGNvbXBpbGVkQ2FtcGFpZ24gPSByZXF1aXJlKCcuL2J1aWxkL0NhbXBhaWduLmpzb24nKTtcblxuY29uc3QgYWRkcmVzcz13ZWIzLnV0aWxzLnRvQ2hlY2tzdW1BZGRyZXNzKGFkZHJlc3MpXG5jb25zdCBJbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAoY29tcGlsZWRGYWN0b3J5LmFiaSksIGAke3Byb2Nlc3MuZW52LkRFUExPWUVEX0FERFJFU1N9YFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2U7Il0sIm5hbWVzIjpbIndlYjMiLCJjb21waWxlZEZhY3RvcnkiLCJyZXF1aXJlIiwiY29tcGlsZWRDYW1wYWlnbiIsImFkZHJlc3MiLCJ1dGlscyIsInRvQ2hlY2tzdW1BZGRyZXNzIiwiSW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSIsInByb2Nlc3MiLCJlbnYiLCJERVBMT1lFRF9BRERSRVNTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethereum/factory.js\n"));

/***/ })

});