"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/hooks/useCharacter.ts":
/*!***********************************!*\
  !*** ./src/hooks/useCharacter.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCharacter: () => (/* binding */ useCharacter)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_mapaSpots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/mapaSpots */ \"(app-pages-browser)/./src/data/mapaSpots.ts\");\n\n\n\n // Imagino que \"mapaSpots\" contenha as informações do mapa\nvar useCharacter = function() {\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(16).fill(Array(16).fill(false)) // Começa com tudo oculto\n    ), 2), visibilityMap = _useState[0], setVisibilityMap = _useState[1];\n    var radius = 2; // Definindo o raio da área visível\n    var revealAreaAroundPlayer = function(x, y) {\n        var revealedArea = [];\n        // Atualiza a visibilidade ao redor do jogador\n        setVisibilityMap(function(prevMap) {\n            var newMap = prevMap.map(function(row) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(row);\n            }); // Cópia profunda da matriz\n            for(var i = y - radius; i <= y + radius; i++){\n                for(var j = x - radius; j <= x + radius; j++){\n                    if (newMap[i] !== undefined && newMap[i][j] !== undefined) {\n                        newMap[i][j] = true; // Revela a área\n                        revealedArea.push({\n                            x: j,\n                            y: i,\n                            isSafe: _data_mapaSpots__WEBPACK_IMPORTED_MODULE_1__.mapaSpots[i][j] === 1\n                        });\n                    }\n                }\n            }\n            return newMap;\n        });\n        return revealedArea; // Retorna os blocos revelados\n    };\n    // Função para mostrar os blocos temporariamente\n    var highlightSafeSpots = function(revealArea) {\n        revealArea.forEach(function(spot) {\n            // Aqui você pode adicionar uma lógica visual, como mudar a cor dos blocos\n            if (spot.isSafe) {\n                console.log(\"Bloco seguro em (\".concat(spot.x, \", \").concat(spot.y, \")\"));\n            } else {\n                console.log(\"Bloco perigoso em (\".concat(spot.x, \", \").concat(spot.y, \")\"));\n            }\n        });\n        // Retorna os blocos seguros para o jogador poder ver\n        return revealArea;\n    };\n    return {\n        highlightSafeSpots: highlightSafeSpots,\n        revealAreaAroundPlayer: revealAreaAroundPlayer\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VDaGFyYWN0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDYSxDQUFDLDBEQUEwRDtBQUVsRyxJQUFNRSxlQUFlO0lBQzFCLElBQTBDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQ2hERyxNQUFNLElBQUlDLElBQUksQ0FBQ0QsTUFBTSxJQUFJQyxJQUFJLENBQUMsUUFBUSx5QkFBeUI7V0FEMURDLGdCQUFtQ0wsY0FBcEJNLG1CQUFvQk47SUFHMUMsSUFBTU8sU0FBUyxHQUFHLG1DQUFtQztJQUVyRCxJQUFNQyx5QkFBeUIsU0FBQ0MsR0FBV0M7UUFDekMsSUFBSUMsZUFBZSxFQUFFO1FBRXJCLDhDQUE4QztRQUM5Q0wsaUJBQWlCLFNBQUNNO1lBQ2hCLElBQU1DLFNBQVNELFFBQVFFLEdBQUcsQ0FBQyxTQUFDQzt1QkFBUyxvRUFBR0E7Z0JBQU8sMkJBQTJCO1lBQzFFLElBQUssSUFBSUMsSUFBSU4sSUFBSUgsUUFBUVMsS0FBS04sSUFBSUgsUUFBUVMsSUFBSztnQkFDN0MsSUFBSyxJQUFJQyxJQUFJUixJQUFJRixRQUFRVSxLQUFLUixJQUFJRixRQUFRVSxJQUFLO29CQUM3QyxJQUFJSixNQUFNLENBQUNHLEVBQUUsS0FBS0UsYUFBYUwsTUFBTSxDQUFDRyxFQUFFLENBQUNDLEVBQUUsS0FBS0MsV0FBVzt3QkFDekRMLE1BQU0sQ0FBQ0csRUFBRSxDQUFDQyxFQUFFLEdBQUcsTUFBTSxnQkFBZ0I7d0JBQ3JDTixhQUFhUSxJQUFJLENBQUM7NEJBQ2hCVixHQUFHUTs0QkFDSFAsR0FBR007NEJBQ0hJLFFBQVFuQixzREFBUyxDQUFDZSxFQUFFLENBQUNDLEVBQUUsS0FBSzt3QkFDOUI7b0JBQ0Y7Z0JBQ0Y7WUFDRjtZQUNBLE9BQU9KO1FBQ1Q7UUFFQSxPQUFPRixjQUFjLDhCQUE4QjtJQUNyRDtJQUVBLGdEQUFnRDtJQUNoRCxJQUFNVSxxQkFBcUIsU0FDekJDO1FBRUFBLFdBQVdDLE9BQU8sQ0FBQyxTQUFDQztZQUNsQiwwRUFBMEU7WUFDMUUsSUFBSUEsS0FBS0osTUFBTSxFQUFFO2dCQUNmSyxRQUFRQyxHQUFHLENBQUMsb0JBQStCRixPQUFYQSxLQUFLZixDQUFDLEVBQUMsTUFBVyxPQUFQZSxLQUFLZCxDQUFDLEVBQUM7WUFDcEQsT0FBTztnQkFDTGUsUUFBUUMsR0FBRyxDQUFDLHNCQUFpQ0YsT0FBWEEsS0FBS2YsQ0FBQyxFQUFDLE1BQVcsT0FBUGUsS0FBS2QsQ0FBQyxFQUFDO1lBQ3REO1FBQ0Y7UUFFQSxxREFBcUQ7UUFDckQsT0FBT1k7SUFDVDtJQUVBLE9BQU87UUFDTEQsb0JBQUFBO1FBQ0FiLHdCQUFBQTtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ2hhcmFjdGVyLnRzP2M2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFwYVNwb3RzIH0gZnJvbSBcIi4uL2RhdGEvbWFwYVNwb3RzXCI7IC8vIEltYWdpbm8gcXVlIFwibWFwYVNwb3RzXCIgY29udGVuaGEgYXMgaW5mb3JtYcOnw7VlcyBkbyBtYXBhXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2hhcmFjdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmlsaXR5TWFwLCBzZXRWaXNpYmlsaXR5TWFwXSA9IHVzZVN0YXRlKFxyXG4gICAgQXJyYXkoMTYpLmZpbGwoQXJyYXkoMTYpLmZpbGwoZmFsc2UpKSAvLyBDb21lw6dhIGNvbSB0dWRvIG9jdWx0b1xyXG4gICk7XHJcbiAgY29uc3QgcmFkaXVzID0gMjsgLy8gRGVmaW5pbmRvIG8gcmFpbyBkYSDDoXJlYSB2aXPDrXZlbFxyXG5cclxuICBjb25zdCByZXZlYWxBcmVhQXJvdW5kUGxheWVyID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgcmV2ZWFsZWRBcmVhID0gW107XHJcblxyXG4gICAgLy8gQXR1YWxpemEgYSB2aXNpYmlsaWRhZGUgYW8gcmVkb3IgZG8gam9nYWRvclxyXG4gICAgc2V0VmlzaWJpbGl0eU1hcCgocHJldk1hcCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdNYXAgPSBwcmV2TWFwLm1hcCgocm93KSA9PiBbLi4ucm93XSk7IC8vIEPDs3BpYSBwcm9mdW5kYSBkYSBtYXRyaXpcclxuICAgICAgZm9yIChsZXQgaSA9IHkgLSByYWRpdXM7IGkgPD0geSArIHJhZGl1czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHggLSByYWRpdXM7IGogPD0geCArIHJhZGl1czsgaisrKSB7XHJcbiAgICAgICAgICBpZiAobmV3TWFwW2ldICE9PSB1bmRlZmluZWQgJiYgbmV3TWFwW2ldW2pdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmV3TWFwW2ldW2pdID0gdHJ1ZTsgLy8gUmV2ZWxhIGEgw6FyZWFcclxuICAgICAgICAgICAgcmV2ZWFsZWRBcmVhLnB1c2goe1xyXG4gICAgICAgICAgICAgIHg6IGosXHJcbiAgICAgICAgICAgICAgeTogaSxcclxuICAgICAgICAgICAgICBpc1NhZmU6IG1hcGFTcG90c1tpXVtqXSA9PT0gMSwgLy8gVmVyaWZpY2Egc2UgbyBibG9jbyDDqSBzZWd1cm9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNYXA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV2ZWFsZWRBcmVhOyAvLyBSZXRvcm5hIG9zIGJsb2NvcyByZXZlbGFkb3NcclxuICB9O1xyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIG1vc3RyYXIgb3MgYmxvY29zIHRlbXBvcmFyaWFtZW50ZVxyXG4gIGNvbnN0IGhpZ2hsaWdodFNhZmVTcG90cyA9IChcclxuICAgIHJldmVhbEFyZWE6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGlzU2FmZTogYm9vbGVhbiB9PlxyXG4gICkgPT4ge1xyXG4gICAgcmV2ZWFsQXJlYS5mb3JFYWNoKChzcG90KSA9PiB7XHJcbiAgICAgIC8vIEFxdWkgdm9jw6ogcG9kZSBhZGljaW9uYXIgdW1hIGzDs2dpY2EgdmlzdWFsLCBjb21vIG11ZGFyIGEgY29yIGRvcyBibG9jb3NcclxuICAgICAgaWYgKHNwb3QuaXNTYWZlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEJsb2NvIHNlZ3VybyBlbSAoJHtzcG90Lnh9LCAke3Nwb3QueX0pYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEJsb2NvIHBlcmlnb3NvIGVtICgke3Nwb3QueH0sICR7c3BvdC55fSlgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmV0b3JuYSBvcyBibG9jb3Mgc2VndXJvcyBwYXJhIG8gam9nYWRvciBwb2RlciB2ZXJcclxuICAgIHJldHVybiByZXZlYWxBcmVhO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoaWdobGlnaHRTYWZlU3BvdHMsXHJcbiAgICByZXZlYWxBcmVhQXJvdW5kUGxheWVyLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1hcGFTcG90cyIsInVzZUNoYXJhY3RlciIsIkFycmF5IiwiZmlsbCIsInZpc2liaWxpdHlNYXAiLCJzZXRWaXNpYmlsaXR5TWFwIiwicmFkaXVzIiwicmV2ZWFsQXJlYUFyb3VuZFBsYXllciIsIngiLCJ5IiwicmV2ZWFsZWRBcmVhIiwicHJldk1hcCIsIm5ld01hcCIsIm1hcCIsInJvdyIsImkiLCJqIiwidW5kZWZpbmVkIiwicHVzaCIsImlzU2FmZSIsImhpZ2hsaWdodFNhZmVTcG90cyIsInJldmVhbEFyZWEiLCJmb3JFYWNoIiwic3BvdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useCharacter.ts\n"));

/***/ })

});