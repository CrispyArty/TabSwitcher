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
// Display the suggestions after user starts typing
chrome.omnibox.onInputChanged.addListener((input, suggest) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('chrome.omnibox.setDefaultSuggestion', chrome.omnibox.setDefaultSuggestion);
    chrome.omnibox.setDefaultSuggestion({
        description: 'Enter a Chrome API or choose from past searches',
    });
    console.log(input, suggest);
    // const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');
    // const suggestions = apiSuggestions.map((api) => {
    //   return { content: api, description: `Open chrome.${api} API` };
    // });
    suggest([
        { content: 'gosu1', description: 'desc1' },
        { content: 'gosu2', description: 'desc2' },
        { content: 'gosu3', description: 'desc3' },
        { content: 'gosu4', description: 'desc4' },
    ]);
}));
chrome.omnibox.onInputEntered.addListener((input) => {
    chrome.tabs.create({ url: 'https://example.com/' + input });
    // Save the latest keyword
    // updateHistory(input);
});
chrome.action.onClicked.addListener((tab) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('click', tab, chrome.tabs);
}));
chrome.commands.onCommand.addListener((command, tab) => {
    console.log('Command', command, tab, chrome);
    // chrome.windows.create({ type: 'normal' });
    chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
        console.log('res', res);
    });
    // chrome.windows.create({ type: 'panel' });
    // chrome.scripting
    //   .executeScript({
    //     target: { tabId: tab.id },
    //     func: addKeyEvent,
    //   })
    //   .then(() => console.log('script injected on target frames'));
});
chrome.runtime.onMessage.addListener((event) => {
    console.log('message1', event);
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBLGtCQUFrQiwwQ0FBMEMsS0FBSztBQUNqRSxRQUFRO0FBQ1I7QUFDQSxVQUFVLHdDQUF3QztBQUNsRCxVQUFVLHdDQUF3QztBQUNsRCxVQUFVLHdDQUF3QztBQUNsRCxVQUFVLHdDQUF3QztBQUNsRDtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5QixxQ0FBcUM7QUFDOUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLDRCQUE0QixrREFBa0Q7QUFDOUU7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gRGlzcGxheSB0aGUgc3VnZ2VzdGlvbnMgYWZ0ZXIgdXNlciBzdGFydHMgdHlwaW5nXG5jaHJvbWUub21uaWJveC5vbklucHV0Q2hhbmdlZC5hZGRMaXN0ZW5lcigoaW5wdXQsIHN1Z2dlc3QpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaHJvbWUub21uaWJveC5zZXREZWZhdWx0U3VnZ2VzdGlvbicsIGNocm9tZS5vbW5pYm94LnNldERlZmF1bHRTdWdnZXN0aW9uKTtcbiAgICBjaHJvbWUub21uaWJveC5zZXREZWZhdWx0U3VnZ2VzdGlvbih7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRW50ZXIgYSBDaHJvbWUgQVBJIG9yIGNob29zZSBmcm9tIHBhc3Qgc2VhcmNoZXMnLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGlucHV0LCBzdWdnZXN0KTtcbiAgICAvLyBjb25zdCB7IGFwaVN1Z2dlc3Rpb25zIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2FwaVN1Z2dlc3Rpb25zJyk7XG4gICAgLy8gY29uc3Qgc3VnZ2VzdGlvbnMgPSBhcGlTdWdnZXN0aW9ucy5tYXAoKGFwaSkgPT4ge1xuICAgIC8vICAgcmV0dXJuIHsgY29udGVudDogYXBpLCBkZXNjcmlwdGlvbjogYE9wZW4gY2hyb21lLiR7YXBpfSBBUElgIH07XG4gICAgLy8gfSk7XG4gICAgc3VnZ2VzdChbXG4gICAgICAgIHsgY29udGVudDogJ2dvc3UxJywgZGVzY3JpcHRpb246ICdkZXNjMScgfSxcbiAgICAgICAgeyBjb250ZW50OiAnZ29zdTInLCBkZXNjcmlwdGlvbjogJ2Rlc2MyJyB9LFxuICAgICAgICB7IGNvbnRlbnQ6ICdnb3N1MycsIGRlc2NyaXB0aW9uOiAnZGVzYzMnIH0sXG4gICAgICAgIHsgY29udGVudDogJ2dvc3U0JywgZGVzY3JpcHRpb246ICdkZXNjNCcgfSxcbiAgICBdKTtcbn0pKTtcbmNocm9tZS5vbW5pYm94Lm9uSW5wdXRFbnRlcmVkLmFkZExpc3RlbmVyKChpbnB1dCkgPT4ge1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vJyArIGlucHV0IH0pO1xuICAgIC8vIFNhdmUgdGhlIGxhdGVzdCBrZXl3b3JkXG4gICAgLy8gdXBkYXRlSGlzdG9yeShpbnB1dCk7XG59KTtcbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycsIHRhYiwgY2hyb21lLnRhYnMpO1xufSkpO1xuY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcigoY29tbWFuZCwgdGFiKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NvbW1hbmQnLCBjb21tYW5kLCB0YWIsIGNocm9tZSk7XG4gICAgLy8gY2hyb21lLndpbmRvd3MuY3JlYXRlKHsgdHlwZTogJ25vcm1hbCcgfSk7XG4gICAgY2hyb21lLndpbmRvd3MuY3JlYXRlKHsgZm9jdXNlZDogdHJ1ZSwgdHlwZTogJ3BvcHVwJywgdXJsOiAnd2luZG93Lmh0bWwnIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICB9KTtcbiAgICAvLyBjaHJvbWUud2luZG93cy5jcmVhdGUoeyB0eXBlOiAncGFuZWwnIH0pO1xuICAgIC8vIGNocm9tZS5zY3JpcHRpbmdcbiAgICAvLyAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAvLyAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAvLyAgICAgZnVuYzogYWRkS2V5RXZlbnQsXG4gICAgLy8gICB9KVxuICAgIC8vICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3NjcmlwdCBpbmplY3RlZCBvbiB0YXJnZXQgZnJhbWVzJykpO1xufSk7XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UxJywgZXZlbnQpO1xufSk7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=