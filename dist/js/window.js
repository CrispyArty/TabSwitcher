/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./src/window/index.ts ***!
  \*****************************/
// chrome.runtime.sendMessage('InitWindow');
document.addEventListener('keyup', (event) => {
    console.log('event', event);
    chrome.runtime.sendMessage(event.key);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd2luZG93LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy93aW5kb3cvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ0luaXRXaW5kb3cnKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGV2ZW50LmtleSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==