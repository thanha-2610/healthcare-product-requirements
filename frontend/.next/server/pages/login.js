"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction LoginPage() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLogin = (e)=>{\n        e.preventDefault();\n        // Giả lập lưu user vào localStorage\n        localStorage.setItem(\"user_name\", username || \"Kh\\xe1ch\");\n        localStorage.setItem(\"is_logged_in\", \"true\");\n        router.push(\"/survey\") // Chuyển sang trang khảo sát\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen items-center justify-center bg-slate-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleLogin,\n            className: \"w-96 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-6 text-center text-2xl font-bold text-slate-800\",\n                    children: \"Đăng nhập\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Nhập t\\xean của bạn...\",\n                    className: \"mb-4 w-full rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-emerald-500\",\n                    onChange: (e)=>setUsername(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full rounded-2xl bg-emerald-500 p-4 font-bold text-white transition-all hover:bg-emerald-600\",\n                    children: \"Bắt đầu ngay\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>router.push(\"/\"),\n                    className: \"mt-2 w-full text-sm text-slate-400\",\n                    children: \"Tiếp tục với tư c\\xe1ch Kh\\xe1ch\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\pione\\\\healthcare-product-requirements\\\\frontend\\\\pages\\\\login.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ0E7QUFFeEIsU0FBU0csU0FBUyxHQUFHO0lBQ2xDLE1BQU0sS0FBQ0MsUUFBUSxNQUFFQyxXQUFXLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVDLE1BQU1LLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUUxQixNQUFNSyxXQUFXLEdBQUcsQ0FBQ0MsQ0FBa0IsR0FBSztRQUMxQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEIsb0NBQW9DO1FBQ3BDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUVQLFFBQVEsSUFBSSxVQUFPLENBQUM7UUFDdERNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7UUFDNUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLDZCQUE2Qjs7SUFDdEQsQ0FBQztJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywyREFBMkQ7a0JBQ3hFLDRFQUFDQyxNQUFJO1lBQ0hDLFFBQVEsRUFBRVQsV0FBVztZQUNyQk8sU0FBUyxFQUFDLGlFQUFpRTs7OEJBRTNFLDhEQUFDRyxJQUFFO29CQUFDSCxTQUFTLEVBQUMsb0RBQW9EOzhCQUFDLFdBRW5FOzs7Ozt3QkFBSzs4QkFDTCw4REFBQ0ksT0FBSztvQkFDSkMsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLFdBQVcsRUFBQyx3QkFBcUI7b0JBQ2pDTixTQUFTLEVBQUMscUZBQXFGO29CQUMvRk8sUUFBUSxFQUFFLENBQUNiLENBQUMsR0FBS0gsV0FBVyxDQUFDRyxDQUFDLENBQUNjLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDOzs7Ozt3QkFDNUM7OEJBQ0YsOERBQUNDLFFBQU07b0JBQUNWLFNBQVMsRUFBQyxnR0FBZ0c7OEJBQUMsY0FFbkg7Ozs7O3dCQUFTOzhCQUNULDhEQUFDVSxRQUFNO29CQUNMTCxJQUFJLEVBQUMsUUFBUTtvQkFDYk0sT0FBTyxFQUFFLElBQU1uQixNQUFNLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQy9CRSxTQUFTLEVBQUMsb0NBQW9DOzhCQUMvQyxrQ0FFRDs7Ozs7d0JBQVM7Ozs7OztnQkFDSjs7Ozs7WUFDSCxDQUNQO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBHaeG6oyBs4bqtcCBsxrB1IHVzZXIgdsOgbyBsb2NhbFN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX25hbWUnLCB1c2VybmFtZSB8fCAnS2jDoWNoJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc19sb2dnZWRfaW4nLCAndHJ1ZScpXHJcbiAgICByb3V0ZXIucHVzaCgnL3N1cnZleScpIC8vIENodXnhu4NuIHNhbmcgdHJhbmcga2jhuqNvIHPDoXRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS01MFwiPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVMb2dpbn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc2xhdGUtMTAwIGJnLXdoaXRlIHAtOCBzaGFkb3cteGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICDEkMSDbmcgbmjhuq1wXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHTDqm4gY+G7p2EgYuG6oW4uLi5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNCB3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIHAtNCBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZW1lcmFsZC01MDBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTJ4bCBiZy1lbWVyYWxkLTUwMCBwLTQgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctZW1lcmFsZC02MDBcIj5cclxuICAgICAgICAgIELhuq90IMSR4bqndSBuZ2F5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LWZ1bGwgdGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVGnhur9wIHThu6VjIHbhu5tpIHTGsCBjw6FjaCBLaMOhY2hcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInJvdXRlciIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();