/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "(extention)/./src/popup/eventBus.ts"
/*!*******************************!*\
  !*** ./src/popup/eventBus.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventBus_instances, _EventBus_eventsMap, _EventBus_listeners, _EventBus_addEvent, _EventBus_runListeners, _EventBus_addListener;
class EventBus {
    constructor() {
        _EventBus_instances.add(this);
        _EventBus_eventsMap.set(this, new Map());
        _EventBus_listeners.set(this, new Map());
    }
    emit(name, payload) {
        __classPrivateFieldGet(this, _EventBus_instances, "m", _EventBus_addEvent).call(this, name, payload);
        __classPrivateFieldGet(this, _EventBus_instances, "m", _EventBus_runListeners).call(this, name);
    }
    on(name, callback) {
        __classPrivateFieldGet(this, _EventBus_instances, "m", _EventBus_addListener).call(this, name, callback);
        __classPrivateFieldGet(this, _EventBus_instances, "m", _EventBus_runListeners).call(this, name);
    }
    off(name, callback) {
        if (!__classPrivateFieldGet(this, _EventBus_listeners, "f").has(name)) {
            return;
        }
        __classPrivateFieldGet(this, _EventBus_listeners, "f").set(name, __classPrivateFieldGet(this, _EventBus_listeners, "f").get(name).filter((cb) => cb !== callback));
    }
}
_EventBus_eventsMap = new WeakMap(), _EventBus_listeners = new WeakMap(), _EventBus_instances = new WeakSet(), _EventBus_addEvent = function _EventBus_addEvent(name, payload) {
    if (!__classPrivateFieldGet(this, _EventBus_eventsMap, "f").has(name)) {
        __classPrivateFieldGet(this, _EventBus_eventsMap, "f").set(name, []);
    }
    __classPrivateFieldGet(this, _EventBus_eventsMap, "f").get(name).push(payload);
}, _EventBus_runListeners = function _EventBus_runListeners(name) {
    const listeners = __classPrivateFieldGet(this, _EventBus_listeners, "f").get(name);
    if (!listeners) {
        return;
    }
    const events = __classPrivateFieldGet(this, _EventBus_eventsMap, "f").get(name);
    if (!events) {
        return;
    }
    while (events.length > 0) {
        const payload = events.shift();
        listeners.forEach((callback) => {
            callback(payload);
        });
    }
}, _EventBus_addListener = function _EventBus_addListener(name, callback) {
    if (!__classPrivateFieldGet(this, _EventBus_listeners, "f").has(name)) {
        __classPrivateFieldGet(this, _EventBus_listeners, "f").set(name, []);
    }
    __classPrivateFieldGet(this, _EventBus_listeners, "f").get(name).push(callback);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBus);


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
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
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/popup/listeners.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventBus */ "(extention)/./src/popup/eventBus.ts");

window.AppBackgroundPort = chrome.runtime.connect({ name: 'popup-connection' });
window.AppEventBus = new _eventBus__WEBPACK_IMPORTED_MODULE_0__["default"]();
(function restoreHeight() {
    const height = window.sessionStorage.getItem('popupHeight');
    if (height) {
        document.documentElement.style.minHeight = height;
    }
})();
document.addEventListener('keyup', (event) => {
    // console.log('keyup', event.key);
    chrome.runtime.sendMessage({ name: 'document-popup-keyup', key: event.key });
    if (event.key === 'Control' || event.key === 'Meta') {
        window.AppEventBus.emit('control-keyup');
    }
});
chrome.runtime.onMessage.addListener((message) => {
    // console.log('---------event', message);
    if (message === 'fast-ctrlup') {
        // console.log('tab-change1', message, chrome.windows);
        window.AppEventBus.emit('control-keyup');
    }
    if (message === 'closePopup') {
        // window.sessionStorage.setItem('snapshot', document.body.innerHTML);
        // window.sessionStorage.setItem('popupHeight', document.body.scrollHeight + 'px');
        // window.AppBackgroundPort.disconnect();
        // window.location.reload();
        //
        // document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Unidentified', bubbles: true }));
        // const iframe = document.getElementById('content') as HTMLIFrameElement;
        // iframe.src = 'iframe.html?' + Date.now();
        // iframe.contentWindow?.focus();
        //
        // const script = document.createElement('script');
        // document.head.appendChild(script);
        // document.head.removeChild(script);
        //
        // const fresh = document.body.cloneNode(true);
        // document.body.replaceWith(fresh);
        //
        // document.addEventListener('keyup', (event) => {
        //   chrome.runtime.sendMessage({ name: 'document-closePopup-popup-keyup', key: event.key });
        // });
        //
        // window.addEventListener('keyup', (event) => {
        //   chrome.runtime.sendMessage({ name: 'window-closePopup-popup-keyup', key: event.key });
        // });
        //
        // const iframe: HTMLIFrameElement = document.querySelector('#event-iframe > iframe');
        // setTimeout(() => {
        //   iframe.contentWindow?.location.reload();
        //   iframe.contentWindow?.focus();
        // }, 1000);
        //
        // refreshIframe();
        // chrome.runtime.sendMessage({ name: '=====window.location.href', event: window.location.href });
        // console.log('window.location.href', window.location.href);
        // window.location.href = window.location.href + '?page=2';
        // document.documentElement.style.minHeight = `${window.innerHeight}px`;
        // window.focus();
    }
});
// window.addEventListener('keyup', (event) => {
//   // console.log('keyup', event.key);
//   chrome.runtime.sendMessage({ name: 'window-popup-keyup', key: event.key });
// });
// document.addEventListener('keydown', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({ name: 'popup-keydown', key: event.key, ctrl: event.ctrlKey });
// });
// document.addEventListener('blur', (event) => {
//   chrome.runtime.sendMessage({ name: '=====blur', event: event });
// });
// document.addEventListener('focus', (event) => {
//   chrome.runtime.sendMessage({ name: '=====focus', event: event });
// });
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function refreshIframe() {
//   const container = document.querySelector('#event-iframe');
//   container.innerHTML = '';
//   const iframe = document.createElement('iframe');
//   iframe.width = '200';
//   iframe.height = '40';
//   iframe.style.border = '1px solid black';
//   iframe.id = 'my-dynamic-iframe';
//   iframe.src = 'iframe.html?' + Date.now();
//   container.appendChild(iframe);
//   const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//   chrome.runtime.sendMessage({ name: '=====iframeDoc', event: iframeDoc });
//   if (iframeDoc) {
//     iframe.contentWindow.focus();
//     // iframeDoc.addEventListener('keydown', (event) => {
//     //   // console.log('keydown', event.key);
//     //   // chrome.runtime.sendMessage({ name: 'popup-keydown', key: event.key, ctrl: event.ctrlKey });
//     // });
//   }
// }
// window.addEventListener('mousemove', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({ name: 'window-popup-mousemove', event: event, ctrl: event.ctrlKey });
// });
// document.addEventListener('mousemove', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({
//     name: 'document-popup-mousemove',
//     event: event,
//     ctrl: event.ctrlKey,
//   });
// });
// window.addEventListener("focus", () => {
//   requestAnimationFrame(() => {
//     // Check on next frame
//   });
// });
// document.addEventListener('keydown', function (e) {
//   if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
//     e.preventDefault();
//     console.log('Ctrl+C intercepted!');
//   }
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbGlzdGVuZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEJBQThCLFNBQUksSUFBSSxTQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDckR4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05rQztBQUNsQyxvREFBb0QsMEJBQTBCO0FBQzlFLHlCQUF5QixpREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsOENBQThDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsb0NBQW9DO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx5REFBeUQ7QUFDbkcsWUFBWTtBQUNaO0FBQ0E7QUFDQSwwQ0FBMEMsdURBQXVEO0FBQ2pHLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQWdFO0FBQ3hHO0FBQ0E7QUFDQSx5REFBeUQsbUJBQW1CO0FBQzVFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtDQUFrQyw0Q0FBNEM7QUFDOUUsSUFBSTtBQUNKO0FBQ0E7QUFDQSxrQ0FBa0MsNERBQTREO0FBQzlGLElBQUk7QUFDSjtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkUsSUFBSTtBQUNKO0FBQ0Esa0NBQWtDLGtDQUFrQztBQUNwRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBDQUEwQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0REFBNEQ7QUFDeEcsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1FQUFtRTtBQUNyRyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvLi9zcmMvcG9wdXAvZXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9wb3B1cC9saXN0ZW5lcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0V2ZW50QnVzX2luc3RhbmNlcywgX0V2ZW50QnVzX2V2ZW50c01hcCwgX0V2ZW50QnVzX2xpc3RlbmVycywgX0V2ZW50QnVzX2FkZEV2ZW50LCBfRXZlbnRCdXNfcnVuTGlzdGVuZXJzLCBfRXZlbnRCdXNfYWRkTGlzdGVuZXI7XG5jbGFzcyBFdmVudEJ1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9FdmVudEJ1c19pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfRXZlbnRCdXNfZXZlbnRzTWFwLnNldCh0aGlzLCBuZXcgTWFwKCkpO1xuICAgICAgICBfRXZlbnRCdXNfbGlzdGVuZXJzLnNldCh0aGlzLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICBlbWl0KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfaW5zdGFuY2VzLCBcIm1cIiwgX0V2ZW50QnVzX2FkZEV2ZW50KS5jYWxsKHRoaXMsIG5hbWUsIHBheWxvYWQpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19pbnN0YW5jZXMsIFwibVwiLCBfRXZlbnRCdXNfcnVuTGlzdGVuZXJzKS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgIH1cbiAgICBvbihuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19pbnN0YW5jZXMsIFwibVwiLCBfRXZlbnRCdXNfYWRkTGlzdGVuZXIpLmNhbGwodGhpcywgbmFtZSwgY2FsbGJhY2spO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19pbnN0YW5jZXMsIFwibVwiLCBfRXZlbnRCdXNfcnVuTGlzdGVuZXJzKS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgIH1cbiAgICBvZmYobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19saXN0ZW5lcnMsIFwiZlwiKS5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19saXN0ZW5lcnMsIFwiZlwiKS5zZXQobmFtZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfbGlzdGVuZXJzLCBcImZcIikuZ2V0KG5hbWUpLmZpbHRlcigoY2IpID0+IGNiICE9PSBjYWxsYmFjaykpO1xuICAgIH1cbn1cbl9FdmVudEJ1c19ldmVudHNNYXAgPSBuZXcgV2Vha01hcCgpLCBfRXZlbnRCdXNfbGlzdGVuZXJzID0gbmV3IFdlYWtNYXAoKSwgX0V2ZW50QnVzX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9FdmVudEJ1c19hZGRFdmVudCA9IGZ1bmN0aW9uIF9FdmVudEJ1c19hZGRFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19ldmVudHNNYXAsIFwiZlwiKS5oYXMobmFtZSkpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfZXZlbnRzTWFwLCBcImZcIikuc2V0KG5hbWUsIFtdKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfZXZlbnRzTWFwLCBcImZcIikuZ2V0KG5hbWUpLnB1c2gocGF5bG9hZCk7XG59LCBfRXZlbnRCdXNfcnVuTGlzdGVuZXJzID0gZnVuY3Rpb24gX0V2ZW50QnVzX3J1bkxpc3RlbmVycyhuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfbGlzdGVuZXJzLCBcImZcIikuZ2V0KG5hbWUpO1xuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfZXZlbnRzTWFwLCBcImZcIikuZ2V0KG5hbWUpO1xuICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2hpbGUgKGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBldmVudHMuc2hpZnQoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhwYXlsb2FkKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSwgX0V2ZW50QnVzX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX0V2ZW50QnVzX2FkZExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FdmVudEJ1c19saXN0ZW5lcnMsIFwiZlwiKS5oYXMobmFtZSkpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfbGlzdGVuZXJzLCBcImZcIikuc2V0KG5hbWUsIFtdKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRXZlbnRCdXNfbGlzdGVuZXJzLCBcImZcIikuZ2V0KG5hbWUpLnB1c2goY2FsbGJhY2spO1xufTtcbmV4cG9ydCBkZWZhdWx0IEV2ZW50QnVzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL2V2ZW50QnVzJztcbndpbmRvdy5BcHBCYWNrZ3JvdW5kUG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiAncG9wdXAtY29ubmVjdGlvbicgfSk7XG53aW5kb3cuQXBwRXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKTtcbihmdW5jdGlvbiByZXN0b3JlSGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwb3B1cEhlaWdodCcpO1xuICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IGhlaWdodDtcbiAgICB9XG59KSgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5dXAnLCBldmVudC5rZXkpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJ2RvY3VtZW50LXBvcHVwLWtleXVwJywga2V5OiBldmVudC5rZXkgfSk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0NvbnRyb2wnIHx8IGV2ZW50LmtleSA9PT0gJ01ldGEnKSB7XG4gICAgICAgIHdpbmRvdy5BcHBFdmVudEJ1cy5lbWl0KCdjb250cm9sLWtleXVwJyk7XG4gICAgfVxufSk7XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tZXZlbnQnLCBtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZSA9PT0gJ2Zhc3QtY3RybHVwJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGFiLWNoYW5nZTEnLCBtZXNzYWdlLCBjaHJvbWUud2luZG93cyk7XG4gICAgICAgIHdpbmRvdy5BcHBFdmVudEJ1cy5lbWl0KCdjb250cm9sLWtleXVwJyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlID09PSAnY2xvc2VQb3B1cCcpIHtcbiAgICAgICAgLy8gd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NuYXBzaG90JywgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwpO1xuICAgICAgICAvLyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncG9wdXBIZWlnaHQnLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCArICdweCcpO1xuICAgICAgICAvLyB3aW5kb3cuQXBwQmFja2dyb3VuZFBvcnQuZGlzY29ubmVjdCgpO1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7IGtleTogJ1VuaWRlbnRpZmllZCcsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgICAvLyBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xuICAgICAgICAvLyBpZnJhbWUuc3JjID0gJ2lmcmFtZS5odG1sPycgKyBEYXRlLm5vdygpO1xuICAgICAgICAvLyBpZnJhbWUuY29udGVudFdpbmRvdz8uZm9jdXMoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgLy8gZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zdCBmcmVzaCA9IGRvY3VtZW50LmJvZHkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnJlcGxhY2VXaXRoKGZyZXNoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICdkb2N1bWVudC1jbG9zZVBvcHVwLXBvcHVwLWtleXVwJywga2V5OiBldmVudC5rZXkgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICd3aW5kb3ctY2xvc2VQb3B1cC1wb3B1cC1rZXl1cCcsIGtleTogZXZlbnQua2V5IH0pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudC1pZnJhbWUgPiBpZnJhbWUnKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgaWZyYW1lLmNvbnRlbnRXaW5kb3c/LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAvLyAgIGlmcmFtZS5jb250ZW50V2luZG93Py5mb2N1cygpO1xuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gcmVmcmVzaElmcmFtZSgpO1xuICAgICAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICc9PT09PXdpbmRvdy5sb2NhdGlvbi5ocmVmJywgZXZlbnQ6IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnd2luZG93LmxvY2F0aW9uLmhyZWYnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnP3BhZ2U9Mic7XG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xuICAgICAgICAvLyB3aW5kb3cuZm9jdXMoKTtcbiAgICB9XG59KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuLy8gICAvLyBjb25zb2xlLmxvZygna2V5dXAnLCBldmVudC5rZXkpO1xuLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICd3aW5kb3ctcG9wdXAta2V5dXAnLCBrZXk6IGV2ZW50LmtleSB9KTtcbi8vIH0pO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuLy8gICAvLyBjb25zb2xlLmxvZygna2V5ZG93bicsIGV2ZW50LmtleSk7XG4vLyAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJ3BvcHVwLWtleWRvd24nLCBrZXk6IGV2ZW50LmtleSwgY3RybDogZXZlbnQuY3RybEtleSB9KTtcbi8vIH0pO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICc9PT09PWJsdXInLCBldmVudDogZXZlbnQgfSk7XG4vLyB9KTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4vLyAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJz09PT09Zm9jdXMnLCBldmVudDogZXZlbnQgfSk7XG4vLyB9KTtcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbi8vIGZ1bmN0aW9uIHJlZnJlc2hJZnJhbWUoKSB7XG4vLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudC1pZnJhbWUnKTtcbi8vICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuLy8gICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbi8vICAgaWZyYW1lLndpZHRoID0gJzIwMCc7XG4vLyAgIGlmcmFtZS5oZWlnaHQgPSAnNDAnO1xuLy8gICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4vLyAgIGlmcmFtZS5pZCA9ICdteS1keW5hbWljLWlmcmFtZSc7XG4vLyAgIGlmcmFtZS5zcmMgPSAnaWZyYW1lLmh0bWw/JyArIERhdGUubm93KCk7XG4vLyAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuLy8gICBjb25zdCBpZnJhbWVEb2MgPSBpZnJhbWUuY29udGVudERvY3VtZW50IHx8IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICc9PT09PWlmcmFtZURvYycsIGV2ZW50OiBpZnJhbWVEb2MgfSk7XG4vLyAgIGlmIChpZnJhbWVEb2MpIHtcbi8vICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5mb2N1cygpO1xuLy8gICAgIC8vIGlmcmFtZURvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4vLyAgICAgLy8gICAvLyBjb25zb2xlLmxvZygna2V5ZG93bicsIGV2ZW50LmtleSk7XG4vLyAgICAgLy8gICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICdwb3B1cC1rZXlkb3duJywga2V5OiBldmVudC5rZXksIGN0cmw6IGV2ZW50LmN0cmxLZXkgfSk7XG4vLyAgICAgLy8gfSk7XG4vLyAgIH1cbi8vIH1cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbi8vICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24nLCBldmVudC5rZXkpO1xuLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICd3aW5kb3ctcG9wdXAtbW91c2Vtb3ZlJywgZXZlbnQ6IGV2ZW50LCBjdHJsOiBldmVudC5jdHJsS2V5IH0pO1xuLy8gfSk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbi8vICAgLy8gY29uc29sZS5sb2coJ2tleWRvd24nLCBldmVudC5rZXkpO1xuLy8gICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4vLyAgICAgbmFtZTogJ2RvY3VtZW50LXBvcHVwLW1vdXNlbW92ZScsXG4vLyAgICAgZXZlbnQ6IGV2ZW50LFxuLy8gICAgIGN0cmw6IGV2ZW50LmN0cmxLZXksXG4vLyAgIH0pO1xuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbi8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbi8vICAgICAvLyBDaGVjayBvbiBuZXh0IGZyYW1lXG4vLyAgIH0pO1xuLy8gfSk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleSA9PT0gJ3EnKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdDdHJsK0MgaW50ZXJjZXB0ZWQhJyk7XG4vLyAgIH1cbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9