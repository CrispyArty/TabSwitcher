/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "(background)/./src/background/index.ts"
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
() {

// import { addKeyEvent } from './inject';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// chrome.action.onClicked.addListener(async (tab) => {
//   console.log('click', tab, chrome.tabs);
// });
// chrome.commands.onCommand.addListener((command, tab) => {
//   console.log('Command', command, tab, chrome);
//   // chrome.windows.create({ type: 'normal' });
//   // chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
//   //   console.log('res', res);
//   // });
//   // chrome.windows.create({ type: 'panel' });
//   chrome.scripting
//     .executeScript({
//       target: { tabId: tab.id },
//       func: addKeyEvent,
//     })
//     .then(() => console.log('script injected on target frames'));
// });
// async function changeTab(tabId) {
//   chrome.tabs.update(tabId, { active: true });
//   return 'Changed!';
// }
let popupOpen = false;
chrome.runtime.onMessage.addListener((message) => {
    if (message.name === 'tab-change') {
        console.log('tab-change', message, chrome.windows);
        popupOpen = false;
        chrome.tabs.update(message.tabId, { active: true });
    }
    return true;
});
// console.log('background');
function getOrderTabs() {
    return __awaiter(this, void 0, void 0, function* () {
        const wind = yield chrome.windows.getCurrent();
        const tabs = yield chrome.tabs.query({ windowId: wind.id });
        tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
        return tabs;
    });
}
const handlerPopup = (command, tab) => {
    // chrome.commands.onCommand.removeListener(handler);
    // chrome.action.disable();
    console.log('chrome.action', chrome.action, chrome.commands, command, tab);
    if (popupOpen) {
        chrome.runtime.sendMessage('focus-next-tab');
        getOrderTabs().then((tabs) => {
            chrome.storage.session.set({ orderTabs: tabs });
        });
    }
    popupOpen = true;
    chrome.action
        .openPopup({
        windowId: tab.windowId,
    })
        .catch((err) => {
        console.log('openPopup error', err);
    });
    // chrome.windows.getCurrent().then((w) => {
    //   console.log('wind', w, w.focused);
    // });
    // console.log('windowId', tab.windowId, chrome.windows);
    // chrome.windows.update(tab.windowId, { focused: true }).then(() => {
    //   console.log('openPopup()');
    // });
    // chrome.sidePanel.open({ windowId: tab.windowId });
    // chrome.sidePanel.setOptions({
    //   tabId: tab.id,
    //   path: 'window.html',
    //   enabled: true,
    // });
    return true;
};
// const handlerWindow = (command: string, tab: chrome.tabs.Tab) => {
//   console.log('chrome.action', chrome.action, chrome.commands, command, tab);
//   if (!isOpen) {
//     isOpen = true;
//     chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
//       console.log('res', res);
//     });
//   }
//   // chrome.windows.create({ type: 'normal' });
//   // chrome.windows.create({ type: 'panel' });
//   return true;
// };
chrome.commands.onCommand.addListener(handlerPopup);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["(background)/./src/background/index.ts"].call(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsZ0NBQWdDLGtEQUFrRDtBQUNsRjtBQUNBLFNBQVM7QUFDVCxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUJBQW1CO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQSxRQUFRO0FBQ1IsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQWtEO0FBQ2pGO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRCxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7Ozs7Ozs7O1VFOUZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBhZGRLZXlFdmVudCB9IGZyb20gJy4vaW5qZWN0JztcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHRhYikgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnY2xpY2snLCB0YWIsIGNocm9tZS50YWJzKTtcbi8vIH0pO1xuLy8gY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcigoY29tbWFuZCwgdGFiKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdDb21tYW5kJywgY29tbWFuZCwgdGFiLCBjaHJvbWUpO1xuLy8gICAvLyBjaHJvbWUud2luZG93cy5jcmVhdGUoeyB0eXBlOiAnbm9ybWFsJyB9KTtcbi8vICAgLy8gY2hyb21lLndpbmRvd3MuY3JlYXRlKHsgZm9jdXNlZDogdHJ1ZSwgdHlwZTogJ3BvcHVwJywgdXJsOiAnd2luZG93Lmh0bWwnIH0pLnRoZW4oKHJlcykgPT4ge1xuLy8gICAvLyAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpO1xuLy8gICAvLyB9KTtcbi8vICAgLy8gY2hyb21lLndpbmRvd3MuY3JlYXRlKHsgdHlwZTogJ3BhbmVsJyB9KTtcbi8vICAgY2hyb21lLnNjcmlwdGluZ1xuLy8gICAgIC5leGVjdXRlU2NyaXB0KHtcbi8vICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4vLyAgICAgICBmdW5jOiBhZGRLZXlFdmVudCxcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdzY3JpcHQgaW5qZWN0ZWQgb24gdGFyZ2V0IGZyYW1lcycpKTtcbi8vIH0pO1xuLy8gYXN5bmMgZnVuY3Rpb24gY2hhbmdlVGFiKHRhYklkKSB7XG4vLyAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyBhY3RpdmU6IHRydWUgfSk7XG4vLyAgIHJldHVybiAnQ2hhbmdlZCEnO1xuLy8gfVxubGV0IHBvcHVwT3BlbiA9IGZhbHNlO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ3RhYi1jaGFuZ2UnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWItY2hhbmdlJywgbWVzc2FnZSwgY2hyb21lLndpbmRvd3MpO1xuICAgICAgICBwb3B1cE9wZW4gPSBmYWxzZTtcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKG1lc3NhZ2UudGFiSWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuLy8gY29uc29sZS5sb2coJ2JhY2tncm91bmQnKTtcbmZ1bmN0aW9uIGdldE9yZGVyVGFicygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB3aW5kID0geWllbGQgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCgpO1xuICAgICAgICBjb25zdCB0YWJzID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZDogd2luZC5pZCB9KTtcbiAgICAgICAgdGFicy5zb3J0KChhLCBiKSA9PiBiLmxhc3RBY2Nlc3NlZCAtIGEubGFzdEFjY2Vzc2VkKTtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfSk7XG59XG5jb25zdCBoYW5kbGVyUG9wdXAgPSAoY29tbWFuZCwgdGFiKSA9PiB7XG4gICAgLy8gY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAvLyBjaHJvbWUuYWN0aW9uLmRpc2FibGUoKTtcbiAgICBjb25zb2xlLmxvZygnY2hyb21lLmFjdGlvbicsIGNocm9tZS5hY3Rpb24sIGNocm9tZS5jb21tYW5kcywgY29tbWFuZCwgdGFiKTtcbiAgICBpZiAocG9wdXBPcGVuKSB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdmb2N1cy1uZXh0LXRhYicpO1xuICAgICAgICBnZXRPcmRlclRhYnMoKS50aGVuKCh0YWJzKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IG9yZGVyVGFiczogdGFicyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvcHVwT3BlbiA9IHRydWU7XG4gICAgY2hyb21lLmFjdGlvblxuICAgICAgICAub3BlblBvcHVwKHtcbiAgICAgICAgd2luZG93SWQ6IHRhYi53aW5kb3dJZCxcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb3BlblBvcHVwIGVycm9yJywgZXJyKTtcbiAgICB9KTtcbiAgICAvLyBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KCkudGhlbigodykgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3dpbmQnLCB3LCB3LmZvY3VzZWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd3aW5kb3dJZCcsIHRhYi53aW5kb3dJZCwgY2hyb21lLndpbmRvd3MpO1xuICAgIC8vIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh0YWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvcGVuUG9wdXAoKScpO1xuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS5zaWRlUGFuZWwub3Blbih7IHdpbmRvd0lkOiB0YWIud2luZG93SWQgfSk7XG4gICAgLy8gY2hyb21lLnNpZGVQYW5lbC5zZXRPcHRpb25zKHtcbiAgICAvLyAgIHRhYklkOiB0YWIuaWQsXG4gICAgLy8gICBwYXRoOiAnd2luZG93Lmh0bWwnLFxuICAgIC8vICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4vLyBjb25zdCBoYW5kbGVyV2luZG93ID0gKGNvbW1hbmQ6IHN0cmluZywgdGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcbi8vICAgY29uc29sZS5sb2coJ2Nocm9tZS5hY3Rpb24nLCBjaHJvbWUuYWN0aW9uLCBjaHJvbWUuY29tbWFuZHMsIGNvbW1hbmQsIHRhYik7XG4vLyAgIGlmICghaXNPcGVuKSB7XG4vLyAgICAgaXNPcGVuID0gdHJ1ZTtcbi8vICAgICBjaHJvbWUud2luZG93cy5jcmVhdGUoeyBmb2N1c2VkOiB0cnVlLCB0eXBlOiAncG9wdXAnLCB1cmw6ICd3aW5kb3cuaHRtbCcgfSkudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gICAvLyBjaHJvbWUud2luZG93cy5jcmVhdGUoeyB0eXBlOiAnbm9ybWFsJyB9KTtcbi8vICAgLy8gY2hyb21lLndpbmRvd3MuY3JlYXRlKHsgdHlwZTogJ3BhbmVsJyB9KTtcbi8vICAgcmV0dXJuIHRydWU7XG4vLyB9O1xuY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcihoYW5kbGVyUG9wdXApO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIoYmFja2dyb3VuZCkvLi9zcmMvYmFja2dyb3VuZC9pbmRleC50c1wiXS5jYWxsKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9