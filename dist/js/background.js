/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isOpen = false;
let fastCtrl = false;
function cleanUp() {
    // console.log('cleanUp');
    isOpen = fastCtrl = false;
    chrome.runtime.onMessage.removeListener(fastCtrlUpHandler);
}
function sendMessage(message) {
    return chrome.runtime.sendMessage(message);
}
chrome.runtime.onConnect.addListener((port) => {
    let reload = false;
    if (port.name === 'popup-connection') {
        port.onMessage.addListener((message) => {
            if (message === 'reload') {
                reload = true;
            }
        });
        port.onDisconnect.addListener(() => {
            if (!reload) {
                cleanUp();
            }
        });
    }
});
chrome.runtime.onMessage.addListener((message) => {
    // console.log('----log', message);
    if (message.name === 'tab-change') {
        chrome.tabs.update(message.tabId, { active: true });
        cleanUp();
    }
});
function getOrderTabs(windowId) {
    return __awaiter(this, void 0, void 0, function* () {
        const tabs = yield chrome.tabs.query({ windowId });
        tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
        return tabs;
    });
}
const fastCtrlUpHandler = (message) => {
    if (message.name === 'inject-ctrl-keyup') {
        fastCtrl = true;
        // console.log(message.name, message.key);
    }
};
const commandMap = {
    next: (tab) => {
        if (!isOpen) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    console.log('inject');
                },
                injectImmediately: true,
            });
            // Listen for fast ctrl keyup event from injected script
            chrome.runtime.onMessage.addListener(fastCtrlUpHandler);
            getOrderTabs(tab.windowId).then((tabs) => {
                chrome.storage.session.set({ orderTabs: tabs });
            });
            chrome.action.openPopup({ windowId: tab.windowId }).then(() => {
                if (fastCtrl) {
                    // Notify popup on creation that ctrl already been released
                    sendMessage({ name: 'fast-ctrlup' }).catch(() => { });
                }
            });
        }
        else {
            // Send event to popup on multiple presses
            sendMessage({ name: 'focus-next-tab' }).catch(() => { });
        }
        isOpen = true;
    },
    prev: () => {
        if (isOpen) {
            sendMessage({ name: 'focus-prev-tab' }).catch(() => { });
        }
    },
};
const commandHandler = (command, tab) => {
    if (commandMap[command]) {
        commandMap[command](tab);
    }
};
chrome.commands.onCommand.addListener(commandHandler);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUJBQWlCO0FBQzlELGFBQWE7QUFDYixzQ0FBc0Msd0JBQXdCO0FBQzlEO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQXFCLGlCQUFpQjtBQUN4RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCLGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCLGlCQUFpQjtBQUNuRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmxldCBpc09wZW4gPSBmYWxzZTtcbmxldCBmYXN0Q3RybCA9IGZhbHNlO1xuZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2xlYW5VcCcpO1xuICAgIGlzT3BlbiA9IGZhc3RDdHJsID0gZmFsc2U7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGZhc3RDdHJsVXBIYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcbiAgICBsZXQgcmVsb2FkID0gZmFsc2U7XG4gICAgaWYgKHBvcnQubmFtZSA9PT0gJ3BvcHVwLWNvbm5lY3Rpb24nKSB7XG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICByZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1sb2cnLCBtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZS5uYW1lID09PSAndGFiLWNoYW5nZScpIHtcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKG1lc3NhZ2UudGFiSWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICBjbGVhblVwKCk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBnZXRPcmRlclRhYnMod2luZG93SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB0YWJzID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZCB9KTtcbiAgICAgICAgdGFicy5zb3J0KChhLCBiKSA9PiBiLmxhc3RBY2Nlc3NlZCAtIGEubGFzdEFjY2Vzc2VkKTtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfSk7XG59XG5jb25zdCBmYXN0Q3RybFVwSGFuZGxlciA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ2luamVjdC1jdHJsLWtleXVwJykge1xuICAgICAgICBmYXN0Q3RybCA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UubmFtZSwgbWVzc2FnZS5rZXkpO1xuICAgIH1cbn07XG5jb25zdCBjb21tYW5kTWFwID0ge1xuICAgIG5leHQ6ICh0YWIpID0+IHtcbiAgICAgICAgaWYgKCFpc09wZW4pIHtcbiAgICAgICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgICAgICAgICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmplY3QnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluamVjdEltbWVkaWF0ZWx5OiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIGZhc3QgY3RybCBrZXl1cCBldmVudCBmcm9tIGluamVjdGVkIHNjcmlwdFxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZhc3RDdHJsVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIGdldE9yZGVyVGFicyh0YWIud2luZG93SWQpLnRoZW4oKHRhYnMpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IG9yZGVyVGFiczogdGFicyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2hyb21lLmFjdGlvbi5vcGVuUG9wdXAoeyB3aW5kb3dJZDogdGFiLndpbmRvd0lkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmYXN0Q3RybCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgcG9wdXAgb24gY3JlYXRpb24gdGhhdCBjdHJsIGFscmVhZHkgYmVlbiByZWxlYXNlZFxuICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7IG5hbWU6ICdmYXN0LWN0cmx1cCcgfSkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNlbmQgZXZlbnQgdG8gcG9wdXAgb24gbXVsdGlwbGUgcHJlc3Nlc1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoeyBuYW1lOiAnZm9jdXMtbmV4dC10YWInIH0pLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcbiAgICB9LFxuICAgIHByZXY6ICgpID0+IHtcbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoeyBuYW1lOiAnZm9jdXMtcHJldi10YWInIH0pLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbmNvbnN0IGNvbW1hbmRIYW5kbGVyID0gKGNvbW1hbmQsIHRhYikgPT4ge1xuICAgIGlmIChjb21tYW5kTWFwW2NvbW1hbmRdKSB7XG4gICAgICAgIGNvbW1hbmRNYXBbY29tbWFuZF0odGFiKTtcbiAgICB9XG59O1xuY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcihjb21tYW5kSGFuZGxlcik7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=