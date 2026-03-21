/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "(background)/./src/background/index.ts"
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isOpen, fastCtrl = false;
function cleanUp() {
    console.log('cleanUp');
    isOpen = fastCtrl = false;
    chrome.runtime.onMessage.removeListener(fastCtrlUpHandler);
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
    console.log('----log', message);
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
        console.log(message.name, message.key);
    }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handlerPopup = (_command, tab) => {
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   console.log('--tabs', tabs);
    // });
    if (!isOpen) {
        // Listen for fast ctrl keyup event from injected script
        chrome.runtime.onMessage.addListener(fastCtrlUpHandler);
        getOrderTabs(tab.windowId).then((tabs) => {
            chrome.storage.session.set({ orderTabs: tabs });
        });
        chrome.action
            .openPopup({
            windowId: tab.windowId,
        })
            .then(() => {
            if (fastCtrl) {
                console.log('fastCtrl', fastCtrl);
                // Notify popup on creation that ctrl already been released
                chrome.runtime.sendMessage('fast-ctrlup').catch(() => { });
            }
        });
    }
    else {
        // chrome.windows.update(tab.windowId, { focused: true }).then(() => {
        //   chrome.action.setPopup({ popup: 'popup.html' }).then(() => {
        //     chrome.action.openPopup({ windowId: tab.windowId });
        //   });
        // });
        //
        // chrome.runtime.sendMessage('closePopup');
    }
    isOpen = true;
    // Send event to popup on multiple presses
    chrome.runtime.sendMessage('focus-next-tab').catch(() => { });
    return true;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handlerWindow = (_command, tab) => {
    if (!isOpen) {
        // Listen for fast ctrl keyup event from injected script
        chrome.runtime.onMessage.addListener(fastCtrlUpHandler);
        getOrderTabs(tab.windowId).then((tabs) => {
            chrome.storage.session.set({ orderTabs: tabs });
        });
        chrome.windows.get(tab.windowId).then((wind) => {
            const width = 500;
            const height = 600;
            const left = Math.round(wind.width / 2 - width / 2) + wind.left;
            const top = wind.top + 60;
            chrome.windows
                .create({
                left: left,
                top: top,
                width: width,
                height: height,
                focused: true,
                type: 'popup',
                url: 'popup.html',
            })
                .then((win) => {
                console.log('open-window', win);
                if (fastCtrl) {
                    console.log('fastCtrl', fastCtrl);
                    // Notify window on creation that ctrl already been released
                    chrome.runtime.sendMessage('fast-ctrlup').catch(() => { });
                }
            });
        });
    }
    // Send event to popup on multiple presses
    chrome.runtime.sendMessage('focus-next-tab').catch(() => { });
    isOpen = true;
    return true;
};
chrome.commands.onCommand.addListener(handlerPopup);
// chrome.commands.onCommand.addListener(handlerWindow);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpREFBaUQsZUFBZTtBQUNoRSxzQ0FBc0MscUJBQXFCO0FBQzNELHlDQUF5Qyx3QkFBd0I7QUFDakUsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsaUJBQWlCO0FBQzFELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUU5SEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xubGV0IGlzT3BlbiwgZmFzdEN0cmwgPSBmYWxzZTtcbmZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsZWFuVXAnKTtcbiAgICBpc09wZW4gPSBmYXN0Q3RybCA9IGZhbHNlO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihmYXN0Q3RybFVwSGFuZGxlcik7XG59XG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcbiAgICBsZXQgcmVsb2FkID0gZmFsc2U7XG4gICAgaWYgKHBvcnQubmFtZSA9PT0gJ3BvcHVwLWNvbm5lY3Rpb24nKSB7XG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICByZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tLS1sb2cnLCBtZXNzYWdlKTtcbiAgICBpZiAobWVzc2FnZS5uYW1lID09PSAndGFiLWNoYW5nZScpIHtcbiAgICAgICAgY2hyb21lLnRhYnMudXBkYXRlKG1lc3NhZ2UudGFiSWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICBjbGVhblVwKCk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBnZXRPcmRlclRhYnMod2luZG93SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB0YWJzID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyB3aW5kb3dJZCB9KTtcbiAgICAgICAgdGFicy5zb3J0KChhLCBiKSA9PiBiLmxhc3RBY2Nlc3NlZCAtIGEubGFzdEFjY2Vzc2VkKTtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfSk7XG59XG5jb25zdCBmYXN0Q3RybFVwSGFuZGxlciA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ2luamVjdC1jdHJsLWtleXVwJykge1xuICAgICAgICBmYXN0Q3RybCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UubmFtZSwgbWVzc2FnZS5rZXkpO1xuICAgIH1cbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBoYW5kbGVyUG9wdXAgPSAoX2NvbW1hbmQsIHRhYikgPT4ge1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnLS10YWJzJywgdGFicyk7XG4gICAgLy8gfSk7XG4gICAgaWYgKCFpc09wZW4pIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmYXN0IGN0cmwga2V5dXAgZXZlbnQgZnJvbSBpbmplY3RlZCBzY3JpcHRcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZhc3RDdHJsVXBIYW5kbGVyKTtcbiAgICAgICAgZ2V0T3JkZXJUYWJzKHRhYi53aW5kb3dJZCkudGhlbigodGFicykgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBvcmRlclRhYnM6IHRhYnMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaHJvbWUuYWN0aW9uXG4gICAgICAgICAgICAub3BlblBvcHVwKHtcbiAgICAgICAgICAgIHdpbmRvd0lkOiB0YWIud2luZG93SWQsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmFzdEN0cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmFzdEN0cmwnLCBmYXN0Q3RybCk7XG4gICAgICAgICAgICAgICAgLy8gTm90aWZ5IHBvcHVwIG9uIGNyZWF0aW9uIHRoYXQgY3RybCBhbHJlYWR5IGJlZW4gcmVsZWFzZWRcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSgnZmFzdC1jdHJsdXAnKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh0YWIud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICBjaHJvbWUuYWN0aW9uLnNldFBvcHVwKHsgcG9wdXA6ICdwb3B1cC5odG1sJyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGNocm9tZS5hY3Rpb24ub3BlblBvcHVwKHsgd2luZG93SWQ6IHRhYi53aW5kb3dJZCB9KTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdjbG9zZVBvcHVwJyk7XG4gICAgfVxuICAgIGlzT3BlbiA9IHRydWU7XG4gICAgLy8gU2VuZCBldmVudCB0byBwb3B1cCBvbiBtdWx0aXBsZSBwcmVzc2VzXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ2ZvY3VzLW5leHQtdGFiJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBoYW5kbGVyV2luZG93ID0gKF9jb21tYW5kLCB0YWIpID0+IHtcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZhc3QgY3RybCBrZXl1cCBldmVudCBmcm9tIGluamVjdGVkIHNjcmlwdFxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZmFzdEN0cmxVcEhhbmRsZXIpO1xuICAgICAgICBnZXRPcmRlclRhYnModGFiLndpbmRvd0lkKS50aGVuKCh0YWJzKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IG9yZGVyVGFiczogdGFicyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNocm9tZS53aW5kb3dzLmdldCh0YWIud2luZG93SWQpLnRoZW4oKHdpbmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gNTAwO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gNjAwO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQod2luZC53aWR0aCAvIDIgLSB3aWR0aCAvIDIpICsgd2luZC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZC50b3AgKyA2MDtcbiAgICAgICAgICAgIGNocm9tZS53aW5kb3dzXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgZm9jdXNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncG9wdXAnLFxuICAgICAgICAgICAgICAgIHVybDogJ3BvcHVwLmh0bWwnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigod2luKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wZW4td2luZG93Jywgd2luKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFzdEN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zhc3RDdHJsJywgZmFzdEN0cmwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgd2luZG93IG9uIGNyZWF0aW9uIHRoYXQgY3RybCBhbHJlYWR5IGJlZW4gcmVsZWFzZWRcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ2Zhc3QtY3RybHVwJykuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNlbmQgZXZlbnQgdG8gcG9wdXAgb24gbXVsdGlwbGUgcHJlc3Nlc1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdmb2N1cy1uZXh0LXRhYicpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgaXNPcGVuID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5jaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKGhhbmRsZXJQb3B1cCk7XG4vLyBjaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKGhhbmRsZXJXaW5kb3cpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIoYmFja2dyb3VuZCkvLi9zcmMvYmFja2dyb3VuZC9pbmRleC50c1wiXS5jYWxsKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9