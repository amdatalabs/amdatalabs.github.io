webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/widget.js":
/*!*****************************************!*\
  !*** ./src/components/footer/widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link */ \"./src/components/link.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\nvar _jsxFileName = \"/home/amdl/work/amdatalabs.github.io/src/components/footer/widget.js\",\n    _this = undefined;\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nvar Widget = function Widget(_ref) {\n  var title = _ref.title,\n      items = _ref.items;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.footerWidget,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Heading\"], {\n    as: \"h4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, items.map(function (_ref2, i) {\n    var path = _ref2.path,\n        label = _ref2.label,\n        icon = _ref2.icon;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }, icon && Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n      src: icon,\n      alt: label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 22\n      }\n    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      path: path,\n      key: i,\n      label: label,\n      variant: \"footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }));\n  })));\n};\n\n_c = Widget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widget);\nvar styles = {\n  footerWidget: {\n    h4: {\n      color: 'heading',\n      fontFamily: 'body',\n      fontSize: '18px',\n      fontWeight: 500,\n      lineHeight: 1.68,\n      letterSpacing: 'heading'\n    },\n    ul: {\n      listStyle: 'none',\n      margin: '28px 0 0',\n      padding: 0,\n      li: {\n        display: 'flex',\n        alignItems: 'center',\n        img: {\n          mr: '15px'\n        }\n      },\n      a: {\n        color: Object(polished__WEBPACK_IMPORTED_MODULE_2__[\"rgba\"])('#02073E', 0.8)\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Widget\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcz84ZWU2Il0sIm5hbWVzIjpbIldpZGdldCIsInRpdGxlIiwiaXRlbXMiLCJzdHlsZXMiLCJmb290ZXJXaWRnZXQiLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwiaWNvbiIsImg0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJ1bCIsImxpc3RTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJsaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaW1nIiwibXIiLCJhIiwicmdiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuQyxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JILEtBQWxCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLEtBQUssQ0FBQ0csR0FBTixDQUFVLGlCQUF3QkMsQ0FBeEI7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxLQUFULFNBQVNBLEtBQVQ7QUFBQSxRQUFnQkMsSUFBaEIsU0FBZ0JBLElBQWhCO0FBQUEsV0FDVDtBQUFJLFNBQUcsRUFBRUgsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dHLElBQUksSUFBSSxxREFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRUEsSUFBWjtBQUFrQixTQUFHLEVBQUVELEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEWCxFQUVFLHFEQUFDLDBDQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQWtCLFNBQUcsRUFBRUQsQ0FBdkI7QUFBMEIsV0FBSyxFQUFFRSxLQUFqQztBQUF3QyxhQUFPLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FGRixDQURGO0FBZ0JELENBakJEOztLQUFNUixNO0FBbUJTQSxxRUFBZjtBQUVBLElBQU1HLE1BQU0sR0FBRztBQUNiQyxjQUFZLEVBQUU7QUFDWk0sTUFBRSxFQUFFO0FBQ0ZDLFdBQUssRUFBRSxTQURMO0FBRUZDLGdCQUFVLEVBQUUsTUFGVjtBQUdGQyxjQUFRLEVBQUUsTUFIUjtBQUlGQyxnQkFBVSxFQUFFLEdBSlY7QUFLRkMsZ0JBQVUsRUFBRSxJQUxWO0FBTUZDLG1CQUFhLEVBQUU7QUFOYixLQURRO0FBU1pDLE1BQUUsRUFBRTtBQUNGQyxlQUFTLEVBQUUsTUFEVDtBQUVGQyxZQUFNLEVBQUUsVUFGTjtBQUdGQyxhQUFPLEVBQUUsQ0FIUDtBQUlGQyxRQUFFLEVBQUU7QUFDRkMsZUFBTyxFQUFFLE1BRFA7QUFFRkMsa0JBQVUsRUFBRSxRQUZWO0FBR0ZDLFdBQUcsRUFBRTtBQUNIQyxZQUFFLEVBQUU7QUFERDtBQUhILE9BSkY7QUFXRkMsT0FBQyxFQUFFO0FBQ0RmLGFBQUssRUFBRWdCLHFEQUFJLENBQUMsU0FBRCxFQUFZLEdBQVo7QUFEVjtBQVhEO0FBVFE7QUFERCxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9saW5rJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IFdpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCwgaWNvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn1cbiAgICAgICAgICAgIDxMaW5rIHBhdGg9e3BhdGh9IGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuXG5cbiAgICAgIDwvdWw+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyV2lkZ2V0OiB7XG4gICAgaDQ6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMS42OCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHVsOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbjogJzI4cHggMCAwJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBsaToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICBtcjogJzE1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGE6IHtcbiAgICAgICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjgpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/widget.js\n");

/***/ })

})