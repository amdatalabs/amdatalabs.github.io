webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link, LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLink\", function() { return NavLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LearnMore\", function() { return LearnMore; });\n/* harmony import */ var _home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n\n\nvar _jsxFileName = \"/home/amdl/work/amdatalabs.github.io/src/components/link.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nfunction NavLink(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      children = _ref.children,\n      rest = Object(_home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"path\", \"label\", \"children\"]);\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], _objectSpread(_objectSpread({\n    to: path,\n    spy: true,\n    offset: -70,\n    smooth: true,\n    duration: 500,\n    className: \"nav-item\",\n    activeClass: \"active\"\n  }, rest), {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }), label);\n}\n_c = NavLink;\nfunction Link(_ref2) {\n  var path = _ref2.path,\n      label = _ref2.label,\n      children = _ref2.children,\n      rest = Object(_home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"path\", \"label\", \"children\"]);\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: path,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], _objectSpread(_objectSpread({\n    href: path\n  }, rest), {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), children ? children : label));\n}\n_c2 = Link;\nfunction LearnMore(_ref3) {\n  var path = _ref3.path,\n      label = _ref3.label,\n      children = _ref3.children,\n      rest = Object(_home_amdl_work_amdatalabs_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"path\", \"label\", \"children\"]);\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: path,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], _objectSpread(_objectSpread({\n    sx: styles.learnMore\n  }, rest), {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), label !== null && label !== void 0 ? label : 'Learn More', \" \", Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__[\"HiOutlineChevronRight\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 33\n    }\n  })));\n}\n_c3 = LearnMore;\nvar styles = {\n  learnMore: {\n    color: 'link',\n    cursor: 'pointer',\n    fontSize: [1, 1, 1, 2],\n    fontWeight: 500,\n    display: 'inline-flex',\n    alignItems: 'center',\n    svg: {\n      transition: 'margin-left 0.3s ease-in-out 0s',\n      ml: '3px'\n    },\n    ':hover': {\n      svg: {\n        ml: '5px'\n      }\n    }\n  }\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"Link\");\n$RefreshReg$(_c3, \"LearnMore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcz8wMzBkIl0sIm5hbWVzIjpbIk5hdkxpbmsiLCJwYXRoIiwibGFiZWwiLCJjaGlsZHJlbiIsInJlc3QiLCJMaW5rIiwiTGVhcm5Nb3JlIiwic3R5bGVzIiwibGVhcm5Nb3JlIiwiY29sb3IiLCJjdXJzb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInN2ZyIsInRyYW5zaXRpb24iLCJtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsT0FBVCxPQUFxRDtBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJDLElBQVE7O0FBQzFELFNBQ0UscURBQUMsaURBQUQ7QUFDRSxNQUFFLEVBQUVILElBRE47QUFFRSxPQUFHLEVBQUUsSUFGUDtBQUdFLFVBQU0sRUFBRSxDQUFDLEVBSFg7QUFJRSxVQUFNLEVBQUUsSUFKVjtBQUtFLFlBQVEsRUFBRSxHQUxaO0FBTUUsYUFBUyxFQUFDLFVBTlo7QUFPRSxlQUFXLEVBQUM7QUFQZCxLQVFNRyxJQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVR0YsS0FWSCxDQURGO0FBY0Q7S0FmZUYsTztBQWlCVCxTQUFTSyxJQUFULFFBQWtEO0FBQUEsTUFBbENKLElBQWtDLFNBQWxDQSxJQUFrQztBQUFBLE1BQTVCQyxLQUE0QixTQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsTUFBUkMsSUFBUTs7QUFDdkQsU0FDRSxxREFBQyxnREFBRDtBQUFVLFFBQUksRUFBRUgsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDZDQUFEO0FBQUcsUUFBSSxFQUFFQTtBQUFULEtBQW1CRyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTBCRCxRQUFRLEdBQUdBLFFBQUgsR0FBY0QsS0FBaEQsQ0FERixDQURGO0FBS0Q7TUFOZUcsSTtBQVFULFNBQVNDLFNBQVQsUUFBdUQ7QUFBQSxNQUFsQ0wsSUFBa0MsU0FBbENBLElBQWtDO0FBQUEsTUFBNUJDLEtBQTRCLFNBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxNQUFSQyxJQUFROztBQUM1RCxTQUNFLHFEQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFFSCxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNkNBQUQ7QUFBRyxNQUFFLEVBQUVNLE1BQU0sQ0FBQ0M7QUFBZCxLQUE2QkosSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHRixLQURILGFBQ0dBLEtBREgsY0FDR0EsS0FESCxHQUNZLFlBRFosT0FDMEIscURBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQxQixDQURGLENBREY7QUFPRDtNQVJlSSxTO0FBVWhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE1BREU7QUFFVEMsVUFBTSxFQUFFLFNBRkM7QUFHVEMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUhEO0FBSVRDLGNBQVUsRUFBRSxHQUpIO0FBS1RDLFdBQU8sRUFBRSxhQUxBO0FBTVRDLGNBQVUsRUFBRSxRQU5IO0FBT1RDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFLGlDQURUO0FBRUhDLFFBQUUsRUFBRTtBQUZELEtBUEk7QUFXVCxjQUFVO0FBQ1JGLFNBQUcsRUFBRTtBQUNIRSxVQUFFLEVBQUU7QUFERDtBQURHO0FBWEQ7QUFERSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbGluay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsganN4LCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIGFzIE1lbnVMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxNZW51TGlua1xuICAgICAgdG89e3BhdGh9XG4gICAgICBzcHk9e3RydWV9XG4gICAgICBvZmZzZXQ9ey03MH1cbiAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9NZW51TGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxBIGhyZWY9e3BhdGh9IHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvQT5cbiAgICA8L05leHRMaW5rPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGVhcm5Nb3JlKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8QSBzeD17c3R5bGVzLmxlYXJuTW9yZX0gey4uLnJlc3R9PlxuICAgICAgICB7bGFiZWwgPz8gJ0xlYXJuIE1vcmUnfSA8SGlPdXRsaW5lQ2hldnJvblJpZ2h0IC8+XG4gICAgICA8L0E+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBsZWFybk1vcmU6IHtcbiAgICBjb2xvcjogJ2xpbmsnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiBbMSwgMSwgMSwgMl0sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgc3ZnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnbWFyZ2luLWxlZnQgMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgICBtbDogJzNweCcsXG4gICAgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgc3ZnOiB7XG4gICAgICAgIG1sOiAnNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/link.js\n");

/***/ })

})