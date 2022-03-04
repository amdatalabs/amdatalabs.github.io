webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/widget.js":
/*!*****************************************!*\
  !*** ./src/components/footer/widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link */ \"./src/components/link.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\nvar _jsxFileName = \"/home/amdl/work/amdatalabs.github.io/src/components/footer/widget.js\",\n    _this = undefined;\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nvar Widget = function Widget(_ref) {\n  var title = _ref.title,\n      items = _ref.items;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.footerWidget,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Heading\"], {\n    as: \"h4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    path: \"https://twitter.com/AMdatalabs\",\n    key: \"1121231221\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"This is aa\")), items.map(function (_ref2, i) {\n    var path = _ref2.path,\n        label = _ref2.label,\n        icon = _ref2.icon;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      path: path,\n      key: i,\n      label: label,\n      variant: \"footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, icon && Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n      src: icon,\n      alt: label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 80\n      }\n    })));\n  })));\n};\n\n_c = Widget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widget);\nvar styles = {\n  footerWidget: {\n    h4: {\n      color: 'heading',\n      fontFamily: 'body',\n      fontSize: '18px',\n      fontWeight: 500,\n      lineHeight: 1.68,\n      letterSpacing: 'heading'\n    },\n    ul: {\n      listStyle: 'none',\n      margin: '28px 0 0',\n      padding: 0,\n      li: {\n        display: 'flex',\n        alignItems: 'center',\n        img: {\n          mr: '15px'\n        }\n      },\n      a: {\n        color: Object(polished__WEBPACK_IMPORTED_MODULE_2__[\"rgba\"])('#02073E', 0.8)\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Widget\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcz84ZWU2Il0sIm5hbWVzIjpbIldpZGdldCIsInRpdGxlIiwiaXRlbXMiLCJzdHlsZXMiLCJmb290ZXJXaWRnZXQiLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwiaWNvbiIsImg0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJ1bCIsImxpc3RTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJsaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaW1nIiwibXIiLCJhIiwicmdiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuQyxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JILEtBQWxCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLHFEQUFDLDBDQUFEO0FBQU0sUUFBSSxFQUFDLGdDQUFYO0FBQTRDLE9BQUcsRUFBQyxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKLENBREYsRUFJR0MsS0FBSyxDQUFDRyxHQUFOLENBQVUsaUJBQXdCQyxDQUF4QjtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFFBQWdCQyxJQUFoQixTQUFnQkEsSUFBaEI7QUFBQSxXQUNUO0FBQUksU0FBRyxFQUFFSCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxxREFBQywwQ0FBRDtBQUFNLFVBQUksRUFBRUMsSUFBWjtBQUFrQixTQUFHLEVBQUVELENBQXZCO0FBQTBCLFdBQUssRUFBRUUsS0FBakM7QUFBd0MsYUFBTyxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkRDLElBQUksSUFBSSxxREFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRUEsSUFBWjtBQUFrQixTQUFHLEVBQUVELEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbkUsQ0FGRixDQURTO0FBQUEsR0FBVixDQUpILENBRkYsQ0FERjtBQW1CRCxDQXBCRDs7S0FBTVIsTTtBQXNCU0EscUVBQWY7QUFFQSxJQUFNRyxNQUFNLEdBQUc7QUFDYkMsY0FBWSxFQUFFO0FBQ1pNLE1BQUUsRUFBRTtBQUNGQyxXQUFLLEVBQUUsU0FETDtBQUVGQyxnQkFBVSxFQUFFLE1BRlY7QUFHRkMsY0FBUSxFQUFFLE1BSFI7QUFJRkMsZ0JBQVUsRUFBRSxHQUpWO0FBS0ZDLGdCQUFVLEVBQUUsSUFMVjtBQU1GQyxtQkFBYSxFQUFFO0FBTmIsS0FEUTtBQVNaQyxNQUFFLEVBQUU7QUFDRkMsZUFBUyxFQUFFLE1BRFQ7QUFFRkMsWUFBTSxFQUFFLFVBRk47QUFHRkMsYUFBTyxFQUFFLENBSFA7QUFJRkMsUUFBRSxFQUFFO0FBQ0ZDLGVBQU8sRUFBRSxNQURQO0FBRUZDLGtCQUFVLEVBQUUsUUFGVjtBQUdGQyxXQUFHLEVBQUU7QUFDSEMsWUFBRSxFQUFFO0FBREQ7QUFISCxPQUpGO0FBV0ZDLE9BQUMsRUFBRTtBQUNEZixhQUFLLEVBQUVnQixxREFBSSxDQUFDLFNBQUQsRUFBWSxHQUFaO0FBRFY7QUFYRDtBQVRRO0FBREQsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci93aWRnZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vbGluayc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBXaWRnZXQgPSAoeyB0aXRsZSwgaXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJXaWRnZXR9PlxuICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiPnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48TGluayBwYXRoPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9BTWRhdGFsYWJzXCIga2V5PVwiMTEyMTIzMTIyMVwiPlRoaXMgaXMgYWE8L0xpbms+PC9saT5cblxuXG4gICAgICAgIHtpdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGluayBwYXRoPXtwYXRofSBrZXk9e2l9IGxhYmVsPXtsYWJlbH0gdmFyaWFudD1cImZvb3RlclwiID57aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn08L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cblxuXG4gICAgICA8L3VsPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3RlcldpZGdldDoge1xuICAgIGg0OiB7XG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBtYXJnaW46ICcyOHB4IDAgMCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbGk6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgbXI6ICcxNXB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC44KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer/widget.js\n");

/***/ })

})