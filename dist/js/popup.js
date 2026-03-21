/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "(extention)/./src/popup/TabList/styles.module.css"
/*!*********************************************!*\
  !*** ./src/popup/TabList/styles.module.css ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focused: () => (/* binding */ _1),
/* harmony export */   tab: () => (/* binding */ _2),
/* harmony export */   tabs: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "focused--DAWUL";
var _2 = "tab--C54UM";
var _3 = "tabs--pJ1tV";



/***/ },

/***/ "(extention)/./src/popup/global.css"
/*!******************************!*\
  !*** ./src/popup/global.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "(extention)/./src/popup/TabList/index.tsx"
/*!*************************************!*\
  !*** ./src/popup/TabList/index.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(extention)/./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "(extention)/./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "(extention)/./src/popup/TabList/styles.module.css");



const TabList = ({ tabs, focusTab, onClick }) => {
    const size = 16; // desired size, e.g., 16, 32, 64
    const getIconUrl = (url) => {
        return `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=${size}`;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.tabs }, tabs.map(({ id, title, url }, index) => {
        const name = `${title} (${url})`;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: id, className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__.tab, index === focusTab && _styles_module_css__WEBPACK_IMPORTED_MODULE_2__.focused), onClick: () => {
                onClick(id);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: getIconUrl(url), alt: "" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { title: name }, name)));
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabList);


/***/ },

/***/ "(extention)/./src/popup/index.tsx"
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "(extention)/./node_modules/react-dom/client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(extention)/./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.css */ "(extention)/./src/popup/global.css");
/* harmony import */ var _TabList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabList */ "(extention)/./src/popup/TabList/index.tsx");




const Main = ({ tabs }) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    // const [tabs, setTabs] = useState<Array<chrome.tabs.Tab>>(tabs);
    const [focusIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(urlSearchParams.get('tab_index') || '1'));
    // console.log('urlSearchParams', urlSearchParams.get('tab_index') || '1', focusIndex);
    // const focusTab = useRef<chrome.tabs.Tab | undefined>(tabs[focusIndex]);
    const focusIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(focusIndex);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // console.log('---focusIndex', focusIndex);
        focusIndexRef.current = focusIndex;
    }, [tabs, focusIndex]);
    const saveDocState = () => {
        window.sessionStorage.setItem('snapshot', document.body.innerHTML);
        window.sessionStorage.setItem('popupHeight', document.body.scrollHeight + 'px');
        // sessionStorage.setItem('focusIndex', focusIndexRef.current.toString());
    };
    const reloadWithNewIndex = (newFocusIndex) => {
        saveDocState();
        window.AppBackgroundPort.postMessage('reload');
        document.location.href =
            document.location.origin +
                document.location.pathname +
                `?tab_index=${newFocusIndex}&old_tab_index=${focusIndexRef.current.toString()}`;
    };
    // const tabsChangedHandler = (changes, namespace) => {
    //   if (namespace === 'session' && changes.orderTabs) {
    //     setTabs(changes.orderTabs as Array<chrome.tabs.Tab>);
    //   }
    // };
    const extShortcutPressHandler = (message) => {
        if (message === 'focus-next-tab') {
            // setFocusIndex((old) => old + 1);
            reloadWithNewIndex(focusIndexRef.current + 1);
        }
        if (message === 'focus-prev-tab') {
            // setFocusIndex((old) => old - 1);
        }
    };
    // const keydownArrowKeysHandler = (event) => {
    //   if (event.key === 'ArrowDown') {
    //     setFocusIndex((old) => old + 1);
    //   }
    //   if (event.key === 'ArrowUp') {
    //     setFocusIndex((old) => old - 1);
    //   }
    // };
    const ctrlKeyupHandler = () => {
        console.log('tabs, focusIndex', tabs, focusIndex);
        chrome.runtime.sendMessage({ name: 'tab-change', tabId: tabs[focusIndex].id }).then((res) => {
            // window.close();
            console.log('window.close()', res);
        });
        // if (focusTab.current === undefined) {
        //   chrome.storage.session.get(['orderTabs']).then((result) => {
        //     chrome.runtime
        //       .sendMessage({ name: 'tab-change', tabId: result.orderTabs[1].id, fast: true })
        //       .then((res) => {
        //         // window.close();
        //         console.log('window.close()', res);
        //       });
        //   });
        // } else {
        //   chrome.runtime.sendMessage({ name: 'tab-change', tabId: focusTab.current.id }).then((res) => {
        //     // window.close();
        //     console.log('window.close()', res);
        //   });
        // }
        window.close();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // const queryTabIndex = urlSearchParams.get('tab_index');
        // if (queryTabIndex) {
        //   setFocusIndex(parseInt(queryTabIndex));
        // }
        // chrome.storage.session.get(['orderTabs']).then((result) => {
        //   setTabs(result.orderTabs as Array<chrome.tabs.Tab>);
        // });
        // console.log('chrome.extension.getViews()', chrome.extension.getViews());
        window.AppEventBus.on('control-keyup', ctrlKeyupHandler);
        // window.addEventListener('keydown', keydownArrowKeysHandler);
        chrome.runtime.onMessage.addListener(extShortcutPressHandler);
        // chrome.storage.onChanged.addListener(tabsChangedHandler);
        return () => {
            window.AppEventBus.off('control-keyup', ctrlKeyupHandler);
            // window.removeEventListener('keydown', keydownArrowKeysHandler);
            chrome.runtime.onMessage.removeListener(extShortcutPressHandler);
            // chrome.storage.onChanged.removeListener(tabsChangedHandler);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TabList__WEBPACK_IMPORTED_MODULE_3__["default"], { tabs: tabs, focusTab: focusIndex, onClick: (id) => {
                chrome.runtime.sendMessage({ name: 'tab-change', tabId: id });
                window.close();
            } })));
};
const snapshot = sessionStorage.getItem('snapshot');
// console.log('Date.now()1', Date.now());
chrome.storage.session.get(['orderTabs']).then((result) => {
    // console.log('Date.now()2', Date.now());
    const tabs = (result.orderTabs || []);
    if (snapshot) {
        const snapshot = sessionStorage.getItem('snapshot');
        document.body.innerHTML = snapshot;
        // console.log('document.getElementById', document.getElementById('root').innerHTML);
        sessionStorage.removeItem('snapshot');
        // hydrateRoot(
        //   document.getElementById('root'),
        //   <React.StrictMode>
        //     <Main tabs={tabs} />
        //   </React.StrictMode>,
        // );
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('root')).render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Main, { tabs: tabs })));
    }
    else {
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById('root')).render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Main, { tabs: tabs })));
    }
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension_tab_switcher"] = self["webpackChunkchrome_extension_tab_switcher"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("(extention)/./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvLi9zcmMvcG9wdXAvVGFiTGlzdC9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9wb3B1cC9nbG9iYWwuY3NzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyLy4vc3JjL3BvcHVwL1RhYkxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyLy4vc3JjL3BvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG52YXIgXzEgPSBcImZvY3VzZWQtLURBV1VMXCI7XG52YXIgXzIgPSBcInRhYi0tQzU0VU1cIjtcbnZhciBfMyA9IFwidGFicy0tcEoxdFZcIjtcbmV4cG9ydCB7IF8xIGFzIFwiZm9jdXNlZFwiLCBfMiBhcyBcInRhYlwiLCBfMyBhcyBcInRhYnNcIiB9XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgKiBhcyBzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuY29uc3QgVGFiTGlzdCA9ICh7IHRhYnMsIGZvY3VzVGFiLCBvbkNsaWNrIH0pID0+IHtcbiAgICBjb25zdCBzaXplID0gMTY7IC8vIGRlc2lyZWQgc2l6ZSwgZS5nLiwgMTYsIDMyLCA2NFxuICAgIGNvbnN0IGdldEljb25VcmwgPSAodXJsKSA9PiB7XG4gICAgICAgIHJldHVybiBgY2hyb21lLWV4dGVuc2lvbjovLyR7Y2hyb21lLnJ1bnRpbWUuaWR9L19mYXZpY29uLz9wYWdlVXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHVybCl9JnNpemU9JHtzaXplfWA7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogcy50YWJzIH0sIHRhYnMubWFwKCh7IGlkLCB0aXRsZSwgdXJsIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHt0aXRsZX0gKCR7dXJsfSlgO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaWQsIGNsYXNzTmFtZTogY2xzeChzLnRhYiwgaW5kZXggPT09IGZvY3VzVGFiICYmIHMuZm9jdXNlZCksIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrKGlkKTtcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGdldEljb25VcmwodXJsKSwgYWx0OiBcIlwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyB0aXRsZTogbmFtZSB9LCBuYW1lKSkpO1xuICAgIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFiTGlzdDtcbiIsImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5pbXBvcnQgVGFiTGlzdCBmcm9tICcuL1RhYkxpc3QnO1xuY29uc3QgTWFpbiA9ICh7IHRhYnMgfSkgPT4ge1xuICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgLy8gY29uc3QgW3RhYnMsIHNldFRhYnNdID0gdXNlU3RhdGU8QXJyYXk8Y2hyb21lLnRhYnMuVGFiPj4odGFicyk7XG4gICAgY29uc3QgW2ZvY3VzSW5kZXhdID0gdXNlU3RhdGUocGFyc2VJbnQodXJsU2VhcmNoUGFyYW1zLmdldCgndGFiX2luZGV4JykgfHwgJzEnKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3VybFNlYXJjaFBhcmFtcycsIHVybFNlYXJjaFBhcmFtcy5nZXQoJ3RhYl9pbmRleCcpIHx8ICcxJywgZm9jdXNJbmRleCk7XG4gICAgLy8gY29uc3QgZm9jdXNUYWIgPSB1c2VSZWY8Y2hyb21lLnRhYnMuVGFiIHwgdW5kZWZpbmVkPih0YWJzW2ZvY3VzSW5kZXhdKTtcbiAgICBjb25zdCBmb2N1c0luZGV4UmVmID0gdXNlUmVmKGZvY3VzSW5kZXgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS1mb2N1c0luZGV4JywgZm9jdXNJbmRleCk7XG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IGZvY3VzSW5kZXg7XG4gICAgfSwgW3RhYnMsIGZvY3VzSW5kZXhdKTtcbiAgICBjb25zdCBzYXZlRG9jU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzbmFwc2hvdCcsIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MKTtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3BvcHVwSGVpZ2h0JywgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZm9jdXNJbmRleCcsIGZvY3VzSW5kZXhSZWYuY3VycmVudC50b1N0cmluZygpKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbG9hZFdpdGhOZXdJbmRleCA9IChuZXdGb2N1c0luZGV4KSA9PiB7XG4gICAgICAgIHNhdmVEb2NTdGF0ZSgpO1xuICAgICAgICB3aW5kb3cuQXBwQmFja2dyb3VuZFBvcnQucG9zdE1lc3NhZ2UoJ3JlbG9hZCcpO1xuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID1cbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiArXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgK1xuICAgICAgICAgICAgICAgIGA/dGFiX2luZGV4PSR7bmV3Rm9jdXNJbmRleH0mb2xkX3RhYl9pbmRleD0ke2ZvY3VzSW5kZXhSZWYuY3VycmVudC50b1N0cmluZygpfWA7XG4gICAgfTtcbiAgICAvLyBjb25zdCB0YWJzQ2hhbmdlZEhhbmRsZXIgPSAoY2hhbmdlcywgbmFtZXNwYWNlKSA9PiB7XG4gICAgLy8gICBpZiAobmFtZXNwYWNlID09PSAnc2Vzc2lvbicgJiYgY2hhbmdlcy5vcmRlclRhYnMpIHtcbiAgICAvLyAgICAgc2V0VGFicyhjaGFuZ2VzLm9yZGVyVGFicyBhcyBBcnJheTxjaHJvbWUudGFicy5UYWI+KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9O1xuICAgIGNvbnN0IGV4dFNob3J0Y3V0UHJlc3NIYW5kbGVyID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09ICdmb2N1cy1uZXh0LXRhYicpIHtcbiAgICAgICAgICAgIC8vIHNldEZvY3VzSW5kZXgoKG9sZCkgPT4gb2xkICsgMSk7XG4gICAgICAgICAgICByZWxvYWRXaXRoTmV3SW5kZXgoZm9jdXNJbmRleFJlZi5jdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09ICdmb2N1cy1wcmV2LXRhYicpIHtcbiAgICAgICAgICAgIC8vIHNldEZvY3VzSW5kZXgoKG9sZCkgPT4gb2xkIC0gMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGNvbnN0IGtleWRvd25BcnJvd0tleXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgIC8vICAgICBzZXRGb2N1c0luZGV4KChvbGQpID0+IG9sZCArIDEpO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgLy8gICAgIHNldEZvY3VzSW5kZXgoKG9sZCkgPT4gb2xkIC0gMSk7XG4gICAgLy8gICB9XG4gICAgLy8gfTtcbiAgICBjb25zdCBjdHJsS2V5dXBIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGFicywgZm9jdXNJbmRleCcsIHRhYnMsIGZvY3VzSW5kZXgpO1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICd0YWItY2hhbmdlJywgdGFiSWQ6IHRhYnNbZm9jdXNJbmRleF0uaWQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cuY2xvc2UoKScsIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiAoZm9jdXNUYWIuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoWydvcmRlclRhYnMnXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vICAgICBjaHJvbWUucnVudGltZVxuICAgICAgICAvLyAgICAgICAuc2VuZE1lc3NhZ2UoeyBuYW1lOiAndGFiLWNoYW5nZScsIHRhYklkOiByZXN1bHQub3JkZXJUYWJzWzFdLmlkLCBmYXN0OiB0cnVlIH0pXG4gICAgICAgIC8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAvLyB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnd2luZG93LmNsb3NlKCknLCByZXMpO1xuICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICd0YWItY2hhbmdlJywgdGFiSWQ6IGZvY3VzVGFiLmN1cnJlbnQuaWQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aW5kb3cuY2xvc2UoKScsIHJlcyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBxdWVyeVRhYkluZGV4ID0gdXJsU2VhcmNoUGFyYW1zLmdldCgndGFiX2luZGV4Jyk7XG4gICAgICAgIC8vIGlmIChxdWVyeVRhYkluZGV4KSB7XG4gICAgICAgIC8vICAgc2V0Rm9jdXNJbmRleChwYXJzZUludChxdWVyeVRhYkluZGV4KSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoWydvcmRlclRhYnMnXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vICAgc2V0VGFicyhyZXN1bHQub3JkZXJUYWJzIGFzIEFycmF5PGNocm9tZS50YWJzLlRhYj4pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nocm9tZS5leHRlbnNpb24uZ2V0Vmlld3MoKScsIGNocm9tZS5leHRlbnNpb24uZ2V0Vmlld3MoKSk7XG4gICAgICAgIHdpbmRvdy5BcHBFdmVudEJ1cy5vbignY29udHJvbC1rZXl1cCcsIGN0cmxLZXl1cEhhbmRsZXIpO1xuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25BcnJvd0tleXNIYW5kbGVyKTtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGV4dFNob3J0Y3V0UHJlc3NIYW5kbGVyKTtcbiAgICAgICAgLy8gY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRhYnNDaGFuZ2VkSGFuZGxlcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuQXBwRXZlbnRCdXMub2ZmKCdjb250cm9sLWtleXVwJywgY3RybEtleXVwSGFuZGxlcik7XG4gICAgICAgICAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25BcnJvd0tleXNIYW5kbGVyKTtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihleHRTaG9ydGN1dFByZXNzSGFuZGxlcik7XG4gICAgICAgICAgICAvLyBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGFic0NoYW5nZWRIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiTGlzdCwgeyB0YWJzOiB0YWJzLCBmb2N1c1RhYjogZm9jdXNJbmRleCwgb25DbGljazogKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBuYW1lOiAndGFiLWNoYW5nZScsIHRhYklkOiBpZCB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gfSkpKTtcbn07XG5jb25zdCBzbmFwc2hvdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NuYXBzaG90Jyk7XG4vLyBjb25zb2xlLmxvZygnRGF0ZS5ub3coKTEnLCBEYXRlLm5vdygpKTtcbmNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KFsnb3JkZXJUYWJzJ10pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRlLm5vdygpMicsIERhdGUubm93KCkpO1xuICAgIGNvbnN0IHRhYnMgPSAocmVzdWx0Lm9yZGVyVGFicyB8fCBbXSk7XG4gICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc25hcHNob3QnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBzbmFwc2hvdDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5pbm5lckhUTUwpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzbmFwc2hvdCcpO1xuICAgICAgICAvLyBoeWRyYXRlUm9vdChcbiAgICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxuICAgICAgICAvLyAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICAvLyAgICAgPE1haW4gdGFicz17dGFic30gLz5cbiAgICAgICAgLy8gICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICAgICAgICAvLyApO1xuICAgICAgICBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW4sIHsgdGFiczogdGFicyB9KSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5TdHJpY3RNb2RlLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYWluLCB7IHRhYnM6IHRhYnMgfSkpKTtcbiAgICB9XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfZXh0ZW5zaW9uX3RhYl9zd2l0Y2hlclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfZXh0ZW5zaW9uX3RhYl9zd2l0Y2hlclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIihleHRlbnRpb24pLy4vc3JjL3BvcHVwL2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9